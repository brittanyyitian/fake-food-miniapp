import Taro from '@tarojs/taro'

export function getRootLayout(reservedHeight = 0) {
  const system = Taro.getSystemInfoSync()
  const statusBarHeight = system.statusBarHeight || 20
  let navBarHeight = 44
  let rightInset = 18
  if (typeof Taro.getMenuButtonBoundingClientRect === 'function') {
    const menuButton = Taro.getMenuButtonBoundingClientRect()
    if (menuButton && menuButton.top && menuButton.height && menuButton.left) {
      navBarHeight = (menuButton.top - statusBarHeight) * 2 + menuButton.height
      rightInset = system.windowWidth - menuButton.left + 10
    }
  }
  const topInset = statusBarHeight + navBarHeight
  return {
    statusBarHeight,
    navBarHeight,
    rightInset,
    topInset,
    scrollHeight: Math.max(240, (system.windowHeight || 667) - topInset - reservedHeight),
  }
}
