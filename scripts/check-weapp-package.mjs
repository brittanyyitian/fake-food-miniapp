import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join, relative } from 'node:path'

const root = new URL('../dist/', import.meta.url).pathname
const mediaExtensions = new Set(['.jpg', '.jpeg', '.webp', '.png', '.gif', '.svg', '.mp3', '.wav', '.aac'])
const mediaLimit = 200 * 1024
const mediaTotalLimit = 200 * 1024
const mainPackageLimit = 1.5 * 1024 * 1024
// 微信开发者工具“代码质量”会把每个分包也纳入 1.5 MiB 建议阈值。
const subPackageLimit = 1.5 * 1024 * 1024

if (!existsSync(root)) throw new Error('dist 不存在，请先运行 npm run build:weapp')

const files = []
const visit = (directory) => readdirSync(directory).forEach((name) => {
  const path = join(directory, name)
  if (statSync(path).isDirectory()) visit(path)
  else files.push(path)
})
visit(root)

const failures = []
const appConfig = JSON.parse(readFileSync(join(root, 'app.json'), 'utf8'))
const subPackageRoots = (appConfig.subPackages || appConfig.subpackages || []).map((item) => item.root)
const relativePath = (path) => relative(root, path)
const isInSubPackage = (path, subRoot) => relativePath(path) === subRoot || relativePath(path).startsWith(`${subRoot}/`)
const mainFiles = files.filter((path) => !subPackageRoots.some((subRoot) => isInSubPackage(path, subRoot)))
const mainPackageBytes = mainFiles.reduce((total, path) => total + statSync(path).size, 0)
if (mainPackageBytes > mainPackageLimit) failures.push(`主包 ${(mainPackageBytes / 1048576).toFixed(3)} MiB，超过 1.5 MiB`)
const subPackageBytes = subPackageRoots.map((subRoot) => ({
  root: subRoot,
  bytes: files.filter((path) => isInSubPackage(path, subRoot)).reduce((total, path) => total + statSync(path).size, 0),
}))
subPackageBytes.forEach((item) => {
  if (item.bytes > subPackageLimit) failures.push(`分包 ${item.root} ${(item.bytes / 1048576).toFixed(3)} MiB，超过 1.5 MiB`)
})

const mediaFiles = files.filter((path) => mediaExtensions.has(extname(path).toLowerCase()))
const mediaBytes = mediaFiles.reduce((total, path) => total + statSync(path).size, 0)

// 微信开发者工具的 IMAGE_AND_AUDIO_LIMIT 统计所有本地图片/音频的合计，
// 并非只检查单个文件。因此单图均小于 200 KiB 时也可能失败。
if (mediaBytes > mediaTotalLimit) {
  failures.push(`本地图片/音频合计 ${Math.ceil(mediaBytes / 1024)} K，超过代码质量建议的 200 K；应迁移到 CDN`)
}

mediaFiles.forEach((path) => {
  const bytes = statSync(path).size
  if (bytes > mediaLimit) failures.push(`${relative(root, path)} 单文件为 ${Math.ceil(bytes / 1024)} K`)
})

files.filter((path) => extname(path) === '.js').forEach((path) => {
  const source = readFileSync(path, 'utf8')
  if (/\?\.|\?\?/.test(source)) failures.push(`${relative(root, path)} 含旧版微信不支持的可选链或空值合并语法`)
  const containingSubPackage = subPackageRoots.find((subRoot) => isInSubPackage(path, subRoot))
  for (const match of source.matchAll(/assets\/food\/[A-Za-z0-9._-]+/g)) {
    const candidates = [join(root, match[0])]
    if (containingSubPackage) candidates.push(join(root, containingSubPackage, match[0]))
    if (!candidates.some(existsSync)) failures.push(`${relative(root, path)} 引用了不存在的 ${match[0]}`)
  }
})

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join('\n'))
  process.exit(1)
}

const largestMedia = Math.max(...mediaFiles.map((path) => statSync(path).size))
const totalBytes = files.reduce((total, path) => total + statSync(path).size, 0)
const subPackageReport = subPackageBytes.map((item) => `${item.root}=${(item.bytes / 1048576).toFixed(3)} MiB`).join(', ')
console.log(`main=${(mainPackageBytes / 1048576).toFixed(3)} MiB, ${subPackageReport}, total=${(totalBytes / 1048576).toFixed(3)} MiB, media_total=${Math.ceil(mediaBytes / 1024)} K, largest_media=${Math.ceil(largestMedia / 1024)} K, missing_assets=0, legacy_syntax=0`)
