export type RestaurantSummary = {
  id: string
  name: string
  tags: string[]
  cuisine: string
  rating: number
  reviews: number
  eta: string
  fee: string
  distance: string
  image: string
  notice: string
  searchTerms: string[]
}

import friedChicken from '../assets/food/fried-chicken.jpg'
import hotPot from '../assets/food/hot-pot.jpg'
import burgerHero from '../assets/food/burger-hero.jpg'
import italianHero from '../assets/food/italian-hero.jpg'
import sushi02 from '../assets/food/sushi-02.jpg'
import bubbleTeaHero from '../assets/food/bubble-tea-hero.jpg'
import ricePork from '../assets/food/rice-pork.jpg'
import congeeChicken from '../assets/food/congee-chicken.jpg'
import bbqSkewers from '../assets/food/bbq-skewers.jpg'
import thaiPad from '../assets/food/thai-pad.jpg'
import gelatoWaffle from '../assets/food/gelato-waffle.jpg'
import bakerySourdough from '../assets/food/bakery-sourdough.jpg'
import coffeeFlatwhite from '../assets/food/coffee-flatwhite.jpg'
import braisedPork from '../assets/food/braised-pork.jpg'
import sweetRedbean from '../assets/food/sweet-redbean.jpg'
import homeStirfryBeef from '../assets/food/home-stirfry-beef.jpg'
import sichuanMapo from '../assets/food/sichuan-mapo.jpg'
import jiangxiPork from '../assets/food/jiangxi-pork.jpg'

export type RestaurantCategory = { name: string; keywords: string[]; image: string }

export const restaurantCategories: RestaurantCategory[] = [
  { name: '快餐小吃', keywords: ['炸鸡', '汉堡', '早餐', '卤味', '盖饭', '小吃'], image: friedChicken },
  { name: '家常炒菜', keywords: ['炒菜', '家常菜', '中式简餐', '小炒'], image: homeStirfryBeef },
  { name: '地方菜', keywords: ['川菜', '江西菜', '川味', '赣菜', '地方菜'], image: sichuanMapo },
  { name: '火锅烧烤', keywords: ['麻辣烫', '冒菜', '烧烤', '烤串', '火锅'], image: hotPot },
  { name: '面包烘焙', keywords: ['面包', '欧包', '烘焙', '蛋糕'], image: bakerySourdough },
  { name: '甜品冰品', keywords: ['甜品', '糖水', '冰淇淋', '蛋糕'], image: gelatoWaffle },
  { name: '咖啡饮品', keywords: ['咖啡', '奶茶', '果茶', '饮品'], image: coffeeFlatwhite },
  { name: '日韩料理', keywords: ['日料', '寿司', '韩餐', '炸鸡'], image: sushi02 },
  { name: '西餐披萨', keywords: ['西餐', '披萨', '意面', '汉堡'], image: italianHero },
  { name: '异国料理', keywords: ['泰餐', '东南亚菜', '咖喱', '日料', '韩餐', '西餐'], image: thaiPad },
]

export const restaurantSummaries: RestaurantSummary[] = [
  { id: 'chicken', name: '夜猫炸鸡社', tags: ['炸鸡', '韩餐', '夜宵'], cuisine: '韩式炸鸡 · 年糕 · 小食', rating: 4.8, reviews: 326, eta: '25–35 分钟', fee: '配送费 ¥3', distance: '1.2 km', image: friedChicken, notice: '今日营业至 01:30 · 预计 15 分钟出餐', searchTerms: ['鸡翅', '鸡块', '年糕', '拌饭'] },
  { id: 'hotpot', name: '沸腾小锅', tags: ['麻辣烫', '川味', '冒菜'], cuisine: '麻辣烫 · 冒菜 · 川味', rating: 4.7, reviews: 518, eta: '30–40 分钟', fee: '配送费 ¥2', distance: '1.8 km', image: hotPot, notice: '满 ¥29 起送 · 汤底可选不辣', searchTerms: ['肥牛', '蔬菜小锅', '拌面', '云吞'] },
  { id: 'burger', name: '街角汉堡局', tags: ['汉堡', '西餐', '快餐'], cuisine: '汉堡 · 薯条 · 美式快餐', rating: 4.9, reviews: 842, eta: '20–30 分钟', fee: '免配送费', distance: '0.9 km', image: burgerHero, notice: '新客立减 ¥6 · 现点现煎', searchTerms: ['牛肉堡', '鸡堡', '薯条', '洋葱圈'] },
  { id: 'italian', name: '炉边披萨', tags: ['披萨', '意面', '西餐'], cuisine: '披萨 · 意面 · 意式料理', rating: 4.6, reviews: 214, eta: '35–45 分钟', fee: '配送费 ¥4', distance: '2.3 km', image: italianHero, notice: '披萨均为 9 英寸 · 可免费切片', searchTerms: ['萨拉米', '番茄宽面', '奶油意面', '提拉米苏'] },
  { id: 'sushi', name: '一丁目寿司', tags: ['寿司', '日料', '刺身'], cuisine: '寿司 · 刺身 · 日式小食', rating: 4.8, reviews: 403, eta: '25–35 分钟', fee: '配送费 ¥3', distance: '1.5 km', image: sushi02, notice: '冷食与热食分袋包装', searchTerms: ['三文鱼', '卷物', '天妇罗'] },
  { id: 'dessert', name: '半糖研究所', tags: ['奶茶', '甜品', '下午茶'], cuisine: '奶茶 · 蛋糕 · 下午茶', rating: 4.7, reviews: 629, eta: '18–28 分钟', fee: '免配送费', distance: '0.7 km', image: bubbleTeaHero, notice: '奶茶默认三分糖 · 含吸管', searchTerms: ['黑糖珍珠', '茉莉奶绿', '果茶', '芝士蛋糕'] },
  { id: 'rice', name: '灶台家常饭', tags: ['盖饭', '炒饭', '中式简餐'], cuisine: '盖饭 · 炒饭 · 家常小炒', rating: 4.8, reviews: 731, eta: '22–32 分钟', fee: '免配送费', distance: '1.0 km', image: ricePork, notice: '工作日午餐热销 · 米饭可免费加量', searchTerms: ['滑蛋猪排', '牛肉饭', '鸡丁炒饭'] },
  { id: 'breakfast', name: '晨光粥点铺', tags: ['早餐', '粥', '包子', '点心'], cuisine: '粥 · 小笼包 · 中式早餐', rating: 4.7, reviews: 468, eta: '15–25 分钟', fee: '配送费 ¥2', distance: '0.6 km', image: congeeChicken, notice: '早晨 06:30 开档 · 粥点分开包装', searchTerms: ['鸡丝粥', '小笼包', '云吞面', '吐司'] },
  { id: 'bbq', name: '炭火串场', tags: ['烧烤', '烤串', '夜宵'], cuisine: '烤串 · 烤蔬菜 · 夜宵', rating: 4.9, reviews: 956, eta: '28–38 分钟', fee: '配送费 ¥3', distance: '1.7 km', image: bbqSkewers, notice: '营业至 02:00 · 默认孜然微辣', searchTerms: ['羊肉串', '烤茄子', '烤排骨', '烤口蘑'] },
  { id: 'thai', name: '椰风泰食堂', tags: ['泰餐', '东南亚菜', '咖喱'], cuisine: '泰式炒粉 · 咖喱 · 甜品', rating: 4.8, reviews: 387, eta: '30–40 分钟', fee: '配送费 ¥3', distance: '2.0 km', image: thaiPad, notice: '辣度可选 · 咖喱默认配泰香米', searchTerms: ['炒河粉', '冬阴功', '芒果糯米饭', '菠萝炒饭'] },
  { id: 'icecream', name: '云朵冰室', tags: ['冰淇淋', '甜品', '冰品'], cuisine: '手作冰淇淋 · 圣代 · 冰甜品', rating: 4.8, reviews: 592, eta: '18–28 分钟', fee: '配送费 ¥2', distance: '0.8 km', image: gelatoWaffle, notice: '全程保冷配送 · 默认附小勺', searchTerms: ['香草', '巧克力', '甜筒', '窝夫'] },
  { id: 'bakery', name: '麦香发酵所', tags: ['面包', '欧包', '烘焙', '甜品'], cuisine: '酸种欧包 · 可颂 · 每日烘焙', rating: 4.9, reviews: 764, eta: '20–30 分钟', fee: '免配送费', distance: '1.1 km', image: bakerySourdough, notice: '每日 10:00 首炉 · 售完即止', searchTerms: ['酸种', '可颂', '黄油卷'] },
  { id: 'coffee', name: '街角慢咖', tags: ['咖啡', '饮品', '下午茶', '甜品'], cuisine: '现磨咖啡 · 奶咖 · 咖啡甜点', rating: 4.8, reviews: 886, eta: '15–25 分钟', fee: '免配送费', distance: '0.5 km', image: coffeeFlatwhite, notice: '咖啡与冰块分装可选 · 无最低起送', searchTerms: ['拿铁', '馥芮白', '摩卡', '玛奇朵'] },
  { id: 'braised', name: '老巷卤味铺', tags: ['卤味', '熟食', '小吃', '快餐小吃'], cuisine: '现切卤味 · 卤肉饭 · 熟食拼盘', rating: 4.7, reviews: 671, eta: '20–30 分钟', fee: '配送费 ¥2', distance: '1.3 km', image: braisedPork, notice: '卤味现切称重 · 默认微辣', searchTerms: ['卤肉饭', '卤五花', '卤味拼盘'] },
  { id: 'sweet-soup', name: '南风糖水铺', tags: ['糖水', '甜品', '饮品', '港式甜品'], cuisine: '广式糖水 · 炖奶 · 手作甜品', rating: 4.8, reviews: 539, eta: '18–28 分钟', fee: '配送费 ¥2', distance: '0.9 km', image: sweetRedbean, notice: '冷热可选 · 默认少甜', searchTerms: ['红豆芋圆', '芝麻汤圆', '椰香甜品'] },
  { id: 'homecook', name: '小灶现炒馆', tags: ['炒菜', '家常菜', '中式简餐', '小炒'], cuisine: '家常小炒 · 米饭 · 下饭菜', rating: 4.8, reviews: 1026, eta: '25–35 分钟', fee: '免配送费', distance: '1.4 km', image: homeStirfryBeef, notice: '小炒现点现做 · 米饭可免费加量', searchTerms: ['小炒牛肉', '回锅肉', '时令合炒'] },
  { id: 'sichuan', name: '椒香川菜馆', tags: ['川菜', '地方菜', '炒菜', '麻辣'], cuisine: '川菜 · 麻辣鲜香 · 下饭小炒', rating: 4.9, reviews: 1187, eta: '28–38 分钟', fee: '配送费 ¥3', distance: '1.6 km', image: sichuanMapo, notice: '辣度可选 · 菜品与米饭分盒', searchTerms: ['麻婆豆腐', '宫保鸡丁', '鱼香肉丝', '担担面'] },
  { id: 'jiangxi', name: '赣味小馆', tags: ['江西菜', '赣菜', '地方菜', '炒菜', '小炒'], cuisine: '江西小炒 · 南昌拌粉 · 瓦罐汤', rating: 4.8, reviews: 448, eta: '26–36 分钟', fee: '配送费 ¥2', distance: '1.9 km', image: jiangxiPork, notice: '鲜辣度可选 · 默认配一份米饭', searchTerms: ['江西小炒肉', '南昌拌粉', '瓦罐汤'] },
]

export const findRestaurantSummary = (id?: string) => restaurantSummaries.find((item) => item.id === id) || restaurantSummaries[0]
