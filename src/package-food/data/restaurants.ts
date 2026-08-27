import type { Dish, DishOptions, Restaurant } from '../../types'

const friedChicken = '/assets/food/fried-chicken.jpg'
import chickenPlain from '../assets/food/chicken-plain.jpg'
import chickenBites from '../assets/food/chicken-bites.jpg'
const hotPot = '/assets/food/hot-pot.jpg'
import hotpotSpicy from '../assets/food/hotpot-spicy.jpg'
import hotpotBeef from '../assets/food/hotpot-beef.jpg'
import hotpotVeg from '../assets/food/hotpot-veg.jpg'
import burger from '../assets/food/burger.jpg'
const burgerHero = '/assets/food/burger-hero.jpg'
import burgerEgg from '../assets/food/burger-egg.jpg'
import fries from '../assets/food/fries.jpg'
import italian from '../assets/food/italian.jpg'
const italianHero = '/assets/food/italian-hero.jpg'
import pizza from '../assets/food/pizza.jpg'
import pastaCream from '../assets/food/pasta-cream.jpg'
const sushi02 = '/assets/food/sushi-02.jpg'
import sushiRoll from '../assets/food/sushi-roll.jpg'
import sushi01 from '../assets/food/sushi-01.jpg'
import bubbleTea from '../assets/food/bubble-tea.jpg'
const bubbleTeaHero = '/assets/food/bubble-tea-hero.jpg'
import bobaBrown from '../assets/food/boba-brown.jpg'
import cake from '../assets/food/cake.jpg'
const ricePork = '/assets/food/rice-pork.jpg'
import riceEgg from '../assets/food/rice-egg.jpg'
import riceChicken from '../assets/food/rice-chicken.jpg'
const congeeChicken = '/assets/food/congee-chicken.jpg'
import dumplings from '../assets/food/dumplings.jpg'
import baoVeg from '../assets/food/bao-veg.jpg'
const bbqSkewers = '/assets/food/bbq-skewers.jpg'
import bbqEggplant from '../assets/food/bbq-eggplant.jpg'
import bbqCorn from '../assets/food/bbq-corn.jpg'
const thaiPad = '/assets/food/thai-pad.jpg'
import thaiCurry from '../assets/food/thai-curry.jpg'
import thaiMango from '../assets/food/thai-mango.jpg'
import chickenTteok from '../assets/food/chicken-tteok.jpg'
import chickenBibimbap from '../assets/food/chicken-bibimbap.jpg'
import hotpotNoodles from '../assets/food/hotpot-noodles.jpg'
import hotpotWonton from '../assets/food/hotpot-wonton.jpg'
import burgerChicken from '../assets/food/burger-chicken.jpg'
import burgerOnion from '../assets/food/burger-onion.jpg'
import italianLasagna from '../assets/food/italian-lasagna.jpg'
import italianTiramisu from '../assets/food/italian-tiramisu.jpg'
import sushiSashimi from '../assets/food/sushi-sashimi.jpg'
import sushiTempura from '../assets/food/sushi-tempura.jpg'
import dessertFruitTea from '../assets/food/dessert-fruit-tea.jpg'
import dessertCheesecake from '../assets/food/dessert-cheesecake.jpg'
import riceBeef from '../assets/food/rice-beef.jpg'
import ricePepperBeef from '../assets/food/rice-pepper-beef.jpg'
import breakfastWonton from '../assets/food/breakfast-wonton.jpg'
import breakfastEggToast from '../assets/food/breakfast-egg-toast.jpg'
import bbqWings from '../assets/food/bbq-wings.jpg'
import bbqMushroom from '../assets/food/bbq-mushroom.jpg'
import thaiTomyum from '../assets/food/thai-tomyum.jpg'
import thaiPineapple from '../assets/food/thai-pineapple.jpg'
import gelatoVanilla from '../assets/food/gelato-vanilla.jpg'
const gelatoWaffle = '/assets/food/gelato-waffle.jpg'
import gelatoSoftserve from '../assets/food/gelato-softserve.jpg'
import gelatoChocolate from '../assets/food/gelato-chocolate.jpg'
const bakerySourdough = '/assets/food/bakery-sourdough.jpg'
import bakeryCroissant from '../assets/food/bakery-croissant.jpg'
import bakeryAlmond from '../assets/food/bakery-almond.jpg'
import bakeryRolls from '../assets/food/bakery-rolls.jpg'
import coffeeLattePastry from '../assets/food/coffee-latte-pastry.jpg'
const coffeeFlatwhite = '/assets/food/coffee-flatwhite.jpg'
import coffeeMocha from '../assets/food/coffee-mocha.jpg'
import coffeeCaramel from '../assets/food/coffee-caramel.jpg'
const braisedPork = '/assets/food/braised-pork.jpg'
import braisedRice from '../assets/food/braised-rice.jpg'
import braisedBelly from '../assets/food/braised-belly.jpg'
import braisedPlatter from '../assets/food/braised-platter.jpg'
const sweetRedbean = '/assets/food/sweet-redbean.jpg'
import sweetTangyuan from '../assets/food/sweet-tangyuan.jpg'
import sweetCoconut from '../assets/food/sweet-coconut.jpg'
import sweetDessertTable from '../assets/food/sweet-dessert-table.jpg'
const homeStirfryBeef = '/assets/food/home-stirfry-beef.jpg'
import homeStirfryPork from '../assets/food/home-stirfry-pork.jpg'
import homeStirfrySpicy from '../assets/food/home-stirfry-spicy.jpg'
import homeStirfrySkillet from '../assets/food/home-stirfry-skillet.jpg'
const sichuanMapo = '/assets/food/sichuan-mapo.jpg'
import sichuanChicken from '../assets/food/sichuan-chicken.jpg'
import sichuanChilli from '../assets/food/sichuan-chilli.jpg'
import sichuanNoodles from '../assets/food/sichuan-noodles.jpg'
const jiangxiPork = '/assets/food/jiangxi-pork.jpg'
import jiangxiNoodles from '../assets/food/jiangxi-noodles.jpg'
import jiangxiSoup from '../assets/food/jiangxi-soup.jpg'
import jiangxiMeatball from '../assets/food/jiangxi-meatball.jpg'

export type RestaurantCategory = {
  name: string
  keywords: string[]
  image: string
}

export const restaurantCategories: RestaurantCategory[] = [
  { name: '快餐小吃', keywords: ['炸鸡', '汉堡', '早餐', '卤味', '盖饭', '小吃'], image: friedChicken },
  { name: '家常炒菜', keywords: ['炒菜', '家常菜', '中式简餐', '小炒'], image: homeStirfryBeef },
  { name: '地方菜', keywords: ['川菜', '江西菜', '川味', '赣菜', '地方菜'], image: sichuanMapo },
  { name: '火锅烧烤', keywords: ['麻辣烫', '冒菜', '烧烤', '烤串', '火锅'], image: hotPot },
  { name: '面包烘焙', keywords: ['面包', '欧包', '烘焙', '蛋糕'], image: bakerySourdough },
  { name: '甜品冰品', keywords: ['甜品', '糖水', '冰淇淋', '蛋糕'], image: gelatoWaffle },
  { name: '咖啡饮品', keywords: ['咖啡', '奶茶', '果茶', '饮品'], image: coffeeFlatwhite },
  { name: '日韩料理', keywords: ['日料', '寿司', '韩餐', '炸鸡'], image: sushi02 },
  { name: '西餐披萨', keywords: ['西餐', '披萨', '意面', '汉堡'], image: pizza },
  { name: '异国料理', keywords: ['泰餐', '东南亚菜', '咖喱', '日料', '韩餐', '西餐'], image: thaiPad },
]

export const restaurants: Restaurant[] = [
  {
    id: 'chicken', name: '夜猫炸鸡社', tags: ['炸鸡', '韩餐', '夜宵'], cuisine: '韩式炸鸡 · 年糕 · 小食', rating: 4.8, reviews: 326,
    eta: '25–35 分钟', fee: '配送费 ¥3', distance: '1.2 km', image: friedChicken,
    description: '现炸鸡翅与无骨鸡块，酱料下单后现拌。夜宵档口也认真做脆皮。',
    notice: '今日营业至 01:30 · 预计 15 分钟出餐',
    dishes: [
      { id: 'soy-wings', restaurantId: 'chicken', name: '蒜香酱油鸡翅', note: '10 只 · 蒜香微甜 · 店内热销 No.1', price: 36, calories: 760, image: friedChicken, category: '人气推荐', popular: true },
      { id: 'half-chicken', restaurantId: 'chicken', name: '双拼脆皮炸鸡', note: '原味 + 甜辣 · 配腌萝卜', price: 42, calories: 980, image: chickenPlain, category: '炸鸡' },
      { id: 'chicken-bites', restaurantId: 'chicken', name: '无骨鸡块', note: '一口大小 · 可选蘸酱', price: 28, calories: 640, image: chickenBites, category: '小食' },
      { id: 'cheese-tteok', restaurantId: 'chicken', name: '甜辣芝士年糕', note: '韩式年糕 · 鱼饼 · 溏心蛋', price: 24, calories: 520, image: chickenTteok, category: '韩式小食' },
      { id: 'bibimbap', restaurantId: 'chicken', name: '韩式石锅拌饭', note: '牛肉末 · 时蔬 · 韩式辣酱', price: 29, calories: 610, image: chickenBibimbap, category: '主食' },
    ],
  },
  {
    id: 'hotpot', name: '沸腾小锅', tags: ['麻辣烫', '川味', '冒菜'], cuisine: '麻辣烫 · 冒菜 · 川味', rating: 4.7, reviews: 518,
    eta: '30–40 分钟', fee: '配送费 ¥2', distance: '1.8 km', image: hotPot,
    description: '每日现熬牛骨底汤，蔬菜、豆制品与肉类分格装盒，到家依然清爽。',
    notice: '满 ¥29 起送 · 汤底可选不辣',
    dishes: [
      { id: 'classic-malatang', restaurantId: 'hotpot', name: '招牌全家福麻辣烫', note: '牛肉卷、虾滑、豆皮与时蔬', price: 32, calories: 620, image: hotpotSpicy, category: '热销', popular: true },
      { id: 'beef-hotpot', restaurantId: 'hotpot', name: '双倍肥牛小锅', note: '肥牛 150g · 金针菇 · 宽粉', price: 39, calories: 760, image: hotpotBeef, category: '小锅' },
      { id: 'veg-hotpot', restaurantId: 'hotpot', name: '十全蔬菜小锅', note: '十种蔬菜 · 清汤也好吃', price: 25, calories: 380, image: hotpotVeg, category: '轻负担' },
      { id: 'spicy-noodles', restaurantId: 'hotpot', name: '红油酸辣拌面', note: '手工宽面 · 香醋 · 辣椒红油', price: 22, calories: 560, image: hotpotNoodles, category: '面食' },
      { id: 'wonton-soup', restaurantId: 'hotpot', name: '鲜虾云吞汤', note: '鲜虾云吞 · 青菜 · 清汤', price: 26, calories: 430, image: hotpotWonton, category: '汤品' },
    ],
  },
  {
    id: 'burger', name: '街角汉堡局', tags: ['汉堡', '西餐', '快餐'], cuisine: '汉堡 · 薯条 · 美式快餐', rating: 4.9, reviews: 842,
    eta: '20–30 分钟', fee: '免配送费', distance: '0.9 km', image: burgerHero,
    description: '当天手打牛肉饼，接单后现煎。面包轻烤、奶酪融化才装盒。',
    notice: '新客立减 ¥6 · 现点现煎',
    dishes: [
      { id: 'double-burger', restaurantId: 'burger', name: '双层芝士牛肉堡', note: '双层牛肉饼 · 车打芝士 · 酸黄瓜', price: 38, calories: 860, image: burger, category: '招牌汉堡', popular: true },
      { id: 'egg-burger', restaurantId: 'burger', name: '培根煎蛋牛肉堡', note: '流心蛋 · 烟熏培根 · 生菜', price: 42, calories: 910, image: burgerEgg, category: '招牌汉堡' },
      { id: 'fries', restaurantId: 'burger', name: '海盐脆薯', note: '粗切薯条 · 番茄蘸酱', price: 15, calories: 420, image: fries, category: '小食' },
      { id: 'crispy-chicken-burger', restaurantId: 'burger', name: '香辣脆鸡堡', note: '酥脆鸡腿排 · 生菜 · 辣味蛋黄酱', price: 34, calories: 730, image: burgerChicken, category: '招牌汉堡' },
      { id: 'onion-rings', restaurantId: 'burger', name: '黄金洋葱圈', note: '现炸洋葱圈 · 双拼蘸酱', price: 18, calories: 390, image: burgerOnion, category: '小食' },
    ],
  },
  {
    id: 'italian', name: '炉边披萨', tags: ['披萨', '意面', '西餐'], cuisine: '披萨 · 意面 · 意式料理', rating: 4.6, reviews: 214,
    eta: '35–45 分钟', fee: '配送费 ¥4', distance: '2.3 km', image: italianHero,
    description: '手工发酵面团与现煮意面，口味简单直接，适合一个人慢慢吃。',
    notice: '披萨均为 9 英寸 · 可免费切片',
    dishes: [
      { id: 'margherita', restaurantId: 'italian', name: '炉烤萨拉米披萨', note: '番茄、马苏里拉与萨拉米', price: 46, calories: 780, image: pizza, category: '披萨', popular: true },
      { id: 'tomato-pasta', restaurantId: 'italian', name: '番茄宽面', note: '慢煮番茄酱 · 帕玛森芝士', price: 39, calories: 650, image: italian, category: '意面' },
      { id: 'mushroom-pasta', restaurantId: 'italian', name: '奶油蘑菇意面', note: '口蘑 · 淡奶油 · 黑胡椒', price: 42, calories: 720, image: pastaCream, category: '意面' },
      { id: 'beef-lasagna', restaurantId: 'italian', name: '焗烤牛肉千层面', note: '牛肉酱 · 奶油白酱 · 马苏里拉', price: 45, calories: 760, image: italianLasagna, category: '烤箱料理' },
      { id: 'tiramisu', restaurantId: 'italian', name: '可可提拉米苏', note: '马斯卡彭 · 咖啡 · 可可粉', price: 28, calories: 460, image: italianTiramisu, category: '甜点' },
    ],
  },
  {
    id: 'sushi', name: '一丁目寿司', tags: ['寿司', '日料', '刺身'], cuisine: '寿司 · 刺身 · 日式小食', rating: 4.8, reviews: 403,
    eta: '25–35 分钟', fee: '配送费 ¥3', distance: '1.5 km', image: sushi02,
    description: '当日备料，卷物接单后现做。酱油、芥末与姜片独立封装。',
    notice: '冷食与热食分袋包装',
    dishes: [
      { id: 'sushi-platter', restaurantId: 'sushi', name: '二十四贯缤纷寿司', note: '三文鱼、鳗鱼、熟虾与卷物', price: 68, calories: 820, image: sushi02, category: '组合', popular: true },
      { id: 'salmon-roll', restaurantId: 'sushi', name: '炙烧三文鱼卷', note: '8 枚 · 微炙三文鱼 · 蟹柳', price: 36, calories: 460, image: sushiRoll, category: '卷物' },
      { id: 'fried-roll', restaurantId: 'sushi', name: '酥脆热卷', note: '8 枚 · 外酥里软 · 甜辣酱', price: 32, calories: 540, image: sushi01, category: '热食' },
      { id: 'salmon-sashimi', restaurantId: 'sushi', name: '厚切三文鱼刺身', note: '6 片 · 当日三文鱼 · 山葵', price: 48, calories: 310, image: sushiSashimi, category: '刺身' },
      { id: 'fried-platter', restaurantId: 'sushi', name: '日式酥炸拼盘', note: '炸虾 · 炸蔬菜 · 天妇罗汁', price: 39, calories: 650, image: sushiTempura, category: '热食' },
    ],
  },
  {
    id: 'dessert', name: '半糖研究所', tags: ['奶茶', '甜品', '下午茶'], cuisine: '奶茶 · 蛋糕 · 下午茶', rating: 4.7, reviews: 629,
    eta: '18–28 分钟', fee: '免配送费', distance: '0.7 km', image: bubbleTeaHero,
    description: '茶底现萃，甜度与冰量都可选。蛋糕当天制作，售完即止。',
    notice: '奶茶默认三分糖 · 含吸管',
    dishes: [
      { id: 'boba-milk', restaurantId: 'dessert', name: '黑糖珍珠鲜奶', note: '黑糖珍珠 · 鲜奶 · 不含茶', price: 19, calories: 430, image: bobaBrown, category: '奶茶', popular: true },
      { id: 'jasmine-tea', restaurantId: 'dessert', name: '茉莉奶绿', note: '茉莉茶底 · 清爽奶香', price: 17, calories: 310, image: bubbleTea, category: '奶茶' },
      { id: 'berry-cake', restaurantId: 'dessert', name: '莓果奶油蛋糕', note: '6 英寸 · 覆盆子与黑莓', price: 58, calories: 1260, image: cake, category: '甜品' },
      { id: 'citrus-fruit-tea', restaurantId: 'dessert', name: '鲜橙茉莉果茶', note: '鲜橙 · 茉莉绿茶 · 青柠', price: 18, calories: 210, image: dessertFruitTea, category: '果茶' },
      { id: 'basque-cheesecake', restaurantId: 'dessert', name: '巴斯克芝士蛋糕', note: '焦香表层 · 浓郁芝士 · 单片装', price: 26, calories: 480, image: dessertCheesecake, category: '甜品' },
    ],
  },
  {
    id: 'rice', name: '灶台家常饭', tags: ['盖饭', '炒饭', '中式简餐'], cuisine: '盖饭 · 炒饭 · 家常小炒', rating: 4.8, reviews: 731,
    eta: '22–32 分钟', fee: '免配送费', distance: '1.0 km', image: ricePork,
    description: '米饭现蒸、小炒现做，酱汁单独控制，不让每一碗都变成同一种味道。',
    notice: '工作日午餐热销 · 米饭可免费加量',
    dishes: [
      { id: 'pork-egg-rice', restaurantId: 'rice', name: '滑蛋猪排盖饭', note: '嫩滑蛋汁 · 猪排 · 香葱', price: 29, calories: 720, image: ricePork, category: '招牌盖饭', popular: true },
      { id: 'egg-fried-rice', restaurantId: 'rice', name: '香葱煎蛋炒饭', note: '粒粒分明 · 煎蛋 · 时蔬', price: 24, calories: 610, image: riceEgg, category: '炒饭' },
      { id: 'spicy-chicken-rice', restaurantId: 'rice', name: '香辣鸡丁炒饭', note: '鸡丁 · 洋葱 · 青椒', price: 27, calories: 680, image: riceChicken, category: '炒饭' },
      { id: 'beef-rice', restaurantId: 'rice', name: '日式葱香牛肉饭', note: '慢煮牛肉 · 洋葱 · 香葱', price: 33, calories: 690, image: riceBeef, category: '招牌盖饭' },
      { id: 'pepper-beef-rice', restaurantId: 'rice', name: '彩椒黑椒牛肉饭', note: '牛肉片 · 彩椒 · 黑椒汁', price: 35, calories: 710, image: ricePepperBeef, category: '盖饭' },
    ],
  },
  {
    id: 'breakfast', name: '晨光粥点铺', tags: ['早餐', '粥', '包子', '点心'], cuisine: '粥 · 小笼包 · 中式早餐', rating: 4.7, reviews: 468,
    eta: '15–25 分钟', fee: '配送费 ¥2', distance: '0.6 km', image: congeeChicken,
    description: '粥底慢熬到绵滑，包点按批次现蒸。早起赶时间，也能认真吃一顿。',
    notice: '早晨 06:30 开档 · 粥点分开包装',
    dishes: [
      { id: 'chicken-congee', restaurantId: 'breakfast', name: '香菇鸡丝粥', note: '鸡丝 · 香菇 · 香葱', price: 16, calories: 330, image: congeeChicken, category: '暖胃粥', popular: true },
      { id: 'xiaolongbao', restaurantId: 'breakfast', name: '鲜肉小笼包', note: '4 只 · 鲜肉汤汁 · 姜醋', price: 18, calories: 420, image: dumplings, category: '蒸点' },
      { id: 'gua-bao', restaurantId: 'breakfast', name: '招牌卤肉刈包', note: '软蒸面皮 · 卤肉 · 酸菜', price: 15, calories: 390, image: baoVeg, category: '蒸点' },
      { id: 'shrimp-wonton', restaurantId: 'breakfast', name: '鲜虾云吞面', note: '鲜虾云吞 · 细面 · 青菜', price: 21, calories: 450, image: breakfastWonton, category: '汤面' },
      { id: 'egg-toast', restaurantId: 'breakfast', name: '流心蛋火腿吐司', note: '煎蛋 · 火腿 · 牛油果 · 生菜', price: 19, calories: 410, image: breakfastEggToast, category: '西式早餐' },
    ],
  },
  {
    id: 'bbq', name: '炭火串场', tags: ['烧烤', '烤串', '夜宵'], cuisine: '烤串 · 烤蔬菜 · 夜宵', rating: 4.9, reviews: 956,
    eta: '28–38 分钟', fee: '配送费 ¥3', distance: '1.7 km', image: bbqSkewers,
    description: '炭火现烤，出炉再撒孜然与辣椒。荤素分盒，避免烤串闷软串味。',
    notice: '营业至 02:00 · 默认孜然微辣',
    dishes: [
      { id: 'lamb-skewers', restaurantId: 'bbq', name: '孜然羊肉串', note: '6 串 · 肥瘦相间 · 炭火焦香', price: 32, calories: 560, image: bbqSkewers, category: '必点烤串', popular: true },
      { id: 'sauce-eggplant', restaurantId: 'bbq', name: '炭火酱烧茄子', note: '蒜香酱汁 · 香葱 · 微辣', price: 18, calories: 280, image: bbqEggplant, category: '烤蔬菜' },
      { id: 'butter-corn', restaurantId: 'bbq', name: '黄油烤玉米', note: '甜玉米 · 黄油 · 海盐', price: 16, calories: 310, image: bbqCorn, category: '烤蔬菜' },
      { id: 'bbq-ribs', restaurantId: 'bbq', name: '炭烤蜜汁排骨', note: '整切排骨 · 蜜汁刷酱 · 炭火焦香', price: 46, calories: 780, image: bbqWings, category: '炭烤肉食' },
      { id: 'bbq-mushroom', restaurantId: 'bbq', name: '香草炭烤口蘑', note: '鲜口蘑 · 香草黄油 · 海盐', price: 19, calories: 240, image: bbqMushroom, category: '烤蔬菜' },
    ],
  },
  {
    id: 'thai', name: '椰风泰食堂', tags: ['泰餐', '东南亚菜', '咖喱'], cuisine: '泰式炒粉 · 咖喱 · 甜品', rating: 4.8, reviews: 387,
    eta: '30–40 分钟', fee: '配送费 ¥3', distance: '2.0 km', image: thaiPad,
    description: '酸、辣、甜与香草气息平衡得刚好，咖喱和炒粉都接单后现做。',
    notice: '辣度可选 · 咖喱默认配泰香米',
    dishes: [
      { id: 'shrimp-pad-thai', restaurantId: 'thai', name: '鲜虾泰式炒河粉', note: '鲜虾 · 豆芽 · 花生碎 · 青柠', price: 38, calories: 690, image: thaiPad, category: '主食', popular: true },
      { id: 'green-curry', restaurantId: 'thai', name: '椰香青咖喱', note: '鸡肉 · 茄子 · 罗勒 · 泰香米', price: 42, calories: 760, image: thaiCurry, category: '咖喱' },
      { id: 'mango-sticky-rice', restaurantId: 'thai', name: '芒果糯米饭', note: '新鲜芒果 · 椰浆 · 糯米', price: 26, calories: 520, image: thaiMango, category: '甜品' },
      { id: 'tom-yum', restaurantId: 'thai', name: '冬阴功海鲜汤', note: '鲜虾 · 菌菇 · 香茅 · 青柠', price: 36, calories: 390, image: thaiTomyum, category: '汤品' },
      { id: 'pineapple-fried-rice', restaurantId: 'thai', name: '菠萝鲜虾炒饭', note: '鲜虾 · 菠萝 · 鸡蛋 · 腰果', price: 39, calories: 670, image: thaiPineapple, category: '主食' },
    ],
  },
  {
    id: 'icecream', name: '云朵冰室', tags: ['冰淇淋', '甜品', '冰品'], cuisine: '手作冰淇淋 · 圣代 · 冰甜品', rating: 4.8, reviews: 592,
    eta: '18–28 分钟', fee: '配送费 ¥2', distance: '0.8 km', image: gelatoWaffle,
    description: '小批量制作的奶香冰淇淋，接单后再装杯。保冷袋与冰袋独立打包，到手不易融化。',
    notice: '全程保冷配送 · 默认附小勺',
    dishes: [
      { id: 'vanilla-gelato', restaurantId: 'icecream', name: '海盐香草双球', note: '马达加斯加香草 · 海盐奶盖', price: 22, calories: 330, image: gelatoVanilla, category: '人气冰淇淋', popular: true },
      { id: 'waffle-gelato', restaurantId: 'icecream', name: '焦糖布朗尼窝夫杯', note: '香草冰淇淋 · 布朗尼 · 脆窝夫', price: 29, calories: 610, image: gelatoWaffle, category: '冰淇淋杯' },
      { id: 'milk-softserve', restaurantId: 'icecream', name: '北海道牛乳软冰', note: '浓醇牛乳 · 脆皮甜筒', price: 16, calories: 280, image: gelatoSoftserve, category: '甜筒' },
      { id: 'choco-gelato', restaurantId: 'icecream', name: '巧克力榛果双球', note: '黑巧克力 · 榛果碎 · 脆筒', price: 24, calories: 420, image: gelatoChocolate, category: '人气冰淇淋' },
    ],
  },
  {
    id: 'bakery', name: '麦香发酵所', tags: ['面包', '欧包', '烘焙', '甜品'], cuisine: '酸种欧包 · 可颂 · 每日烘焙', rating: 4.9, reviews: 764,
    eta: '20–30 分钟', fee: '免配送费', distance: '1.1 km', image: bakerySourdough,
    description: '使用天然酵种长时间发酵，每天分批出炉。面包切片和复烤方式都可按需选择。',
    notice: '每日 10:00 首炉 · 售完即止',
    dishes: [
      { id: 'country-sourdough', restaurantId: 'bakery', name: '乡村酸种欧包', note: '天然酵种 · 长时发酵 · 约 450g', price: 32, calories: 980, image: bakerySourdough, category: '酸种欧包', popular: true },
      { id: 'butter-croissant', restaurantId: 'bakery', name: '法式黄油可颂', note: '发酵黄油 · 现烤酥层 · 2 只', price: 19, calories: 520, image: bakeryCroissant, category: '可颂丹麦' },
      { id: 'almond-croissant', restaurantId: 'bakery', name: '杏仁奶油可颂', note: '杏仁奶油 · 杏仁片 · 糖粉', price: 16, calories: 430, image: bakeryAlmond, category: '可颂丹麦' },
      { id: 'sea-salt-rolls', restaurantId: 'bakery', name: '海盐黄油卷', note: '柔软面包体 · 海盐黄油 · 4 只', price: 24, calories: 680, image: bakeryRolls, category: '软面包' },
    ],
  },
  {
    id: 'coffee', name: '街角慢咖', tags: ['咖啡', '饮品', '下午茶', '甜品'], cuisine: '现磨咖啡 · 奶咖 · 咖啡甜点', rating: 4.8, reviews: 886,
    eta: '15–25 分钟', fee: '免配送费', distance: '0.5 km', image: coffeeFlatwhite,
    description: '咖啡豆按周烘焙，浓缩现萃。冷热、甜度和奶基底都能单独选择。',
    notice: '咖啡与冰块分装可选 · 无最低起送',
    dishes: [
      { id: 'oat-latte', restaurantId: 'coffee', name: '燕麦拿铁', note: '双份浓缩 · 燕麦奶 · 坚果尾韵', price: 22, calories: 190, image: coffeeLattePastry, category: '人气咖啡', popular: true },
      { id: 'flat-white', restaurantId: 'coffee', name: '馥芮白', note: '三份短萃 · 热鲜奶 · 绵密奶泡', price: 23, calories: 160, image: coffeeFlatwhite, category: '奶咖' },
      { id: 'dark-mocha', restaurantId: 'coffee', name: '黑巧摩卡', note: '黑巧克力 · 浓缩咖啡 · 鲜奶', price: 26, calories: 320, image: coffeeMocha, category: '风味咖啡' },
      { id: 'caramel-macchiato', restaurantId: 'coffee', name: '焦糖玛奇朵', note: '香草糖浆 · 鲜奶 · 焦糖酱', price: 25, calories: 290, image: coffeeCaramel, category: '风味咖啡' },
    ],
  },
  {
    id: 'braised', name: '老巷卤味铺', tags: ['卤味', '熟食', '小吃', '快餐小吃'], cuisine: '现切卤味 · 卤肉饭 · 熟食拼盘', rating: 4.7, reviews: 671,
    eta: '20–30 分钟', fee: '配送费 ¥2', distance: '1.3 km', image: braisedPork,
    description: '老卤每日续养，肉类慢火卤透后再按单现切。卤汁、辣油与主食分盒。',
    notice: '卤味现切称重 · 默认微辣',
    dishes: [
      { id: 'braised-pork-combo', restaurantId: 'braised', name: '招牌卤肉双拼', note: '卤五花 · 卤牛腱 · 时蔬', price: 38, calories: 720, image: braisedPork, category: '招牌卤味', popular: true },
      { id: 'lu-rou-fan', restaurantId: 'braised', name: '台式卤肉饭', note: '慢卤肉燥 · 卤蛋 · 青菜', price: 26, calories: 680, image: braisedRice, category: '卤味主食' },
      { id: 'braised-pork-belly', restaurantId: 'braised', name: '酱香卤五花', note: '肥瘦相间 · 老卤慢煨 · 200g', price: 32, calories: 760, image: braisedBelly, category: '现切熟食' },
      { id: 'braised-platter', restaurantId: 'braised', name: '四喜卤味拼盘', note: '卤牛肉 · 卤豆干 · 卤蛋 · 海带', price: 45, calories: 650, image: braisedPlatter, category: '招牌卤味' },
    ],
  },
  {
    id: 'sweet-soup', name: '南风糖水铺', tags: ['糖水', '甜品', '饮品', '港式甜品'], cuisine: '广式糖水 · 炖奶 · 手作甜品', rating: 4.8, reviews: 539,
    eta: '18–28 分钟', fee: '配送费 ¥2', distance: '0.9 km', image: sweetRedbean,
    description: '红豆、银耳与糖水每日慢熬，冷热分开制作。甜度可选，配料不使用罐头替代。',
    notice: '冷热可选 · 默认少甜',
    dishes: [
      { id: 'redbean-taro', restaurantId: 'sweet-soup', name: '红豆芋圆糖水', note: '绵密红豆 · 三色芋圆 · 桂花', price: 18, calories: 360, image: sweetRedbean, category: '经典糖水', popular: true },
      { id: 'sesame-tangyuan', restaurantId: 'sweet-soup', name: '桂花芝麻汤圆', note: '黑芝麻汤圆 · 桂花糖水 · 坚果碎', price: 20, calories: 420, image: sweetTangyuan, category: '暖甜汤' },
      { id: 'coconut-pandan', restaurantId: 'sweet-soup', name: '椰香斑斓糯米丸', note: '斑斓糯米丸 · 椰蓉 · 椰糖', price: 22, calories: 390, image: sweetCoconut, category: '椰香甜品' },
      { id: 'dessert-sampler', restaurantId: 'sweet-soup', name: '糖水双人分享盒', note: '炖奶 · 莓果蛋糕 · 时令水果', price: 42, calories: 780, image: sweetDessertTable, category: '分享甜品' },
    ],
  },
  {
    id: 'homecook', name: '小灶现炒馆', tags: ['炒菜', '家常菜', '中式简餐', '小炒'], cuisine: '家常小炒 · 米饭 · 下饭菜', rating: 4.8, reviews: 1026,
    eta: '25–35 分钟', fee: '免配送费', distance: '1.4 km', image: homeStirfryBeef,
    description: '不做预制大锅菜，每份小炒接单后下锅。荤素、米饭与汤分开打包。',
    notice: '小炒现点现做 · 米饭可免费加量',
    dishes: [
      { id: 'pepper-beef-stirfry', restaurantId: 'homecook', name: '彩椒小炒牛肉', note: '嫩牛肉 · 彩椒 · 洋葱 · 黑椒汁', price: 36, calories: 560, image: homeStirfryBeef, category: '人气小炒', popular: true },
      { id: 'garlic-pork-stirfry', restaurantId: 'homecook', name: '蒜苗回锅肉', note: '五花肉 · 蒜苗 · 豆瓣酱', price: 34, calories: 680, image: homeStirfryPork, category: '下饭荤菜' },
      { id: 'spicy-beef-stirfry', restaurantId: 'homecook', name: '香辣牛肉小炒', note: '牛肉片 · 青红椒 · 香菜', price: 38, calories: 590, image: homeStirfrySpicy, category: '下饭荤菜' },
      { id: 'seasonal-stirfry', restaurantId: 'homecook', name: '时令合炒', note: '当季蔬菜 · 瘦肉 · 木耳', price: 28, calories: 420, image: homeStirfrySkillet, category: '家常小炒' },
    ],
  },
  {
    id: 'sichuan', name: '椒香川菜馆', tags: ['川菜', '地方菜', '炒菜', '麻辣'], cuisine: '川菜 · 麻辣鲜香 · 下饭小炒', rating: 4.9, reviews: 1187,
    eta: '28–38 分钟', fee: '配送费 ¥3', distance: '1.6 km', image: sichuanMapo,
    description: '花椒、豆瓣与辣椒按菜品现炒，麻、辣、香层次分明，也支持少油少辣。',
    notice: '辣度可选 · 菜品与米饭分盒',
    dishes: [
      { id: 'mapo-tofu', restaurantId: 'sichuan', name: '麻婆豆腐', note: '嫩豆腐 · 牛肉末 · 郫县豆瓣', price: 26, calories: 480, image: sichuanMapo, category: '川味必点', popular: true },
      { id: 'szechuan-chicken', restaurantId: 'sichuan', name: '宫保鸡丁', note: '鸡腿肉 · 干辣椒 · 花生 · 葱段', price: 38, calories: 720, image: sichuanChicken, category: '经典川菜' },
      { id: 'fish-fragrant-pork', restaurantId: 'sichuan', name: '鱼香肉丝', note: '里脊丝 · 木耳 · 笋丝 · 泡椒', price: 32, calories: 520, image: sichuanChilli, category: '经典川菜' },
      { id: 'dan-dan-noodles', restaurantId: 'sichuan', name: '红油担担面', note: '细面 · 芽菜肉臊 · 花生碎 · 红油', price: 22, calories: 610, image: sichuanNoodles, category: '川味主食' },
    ],
  },
  {
    id: 'jiangxi', name: '赣味小馆', tags: ['江西菜', '赣菜', '地方菜', '炒菜', '小炒'], cuisine: '江西小炒 · 南昌拌粉 · 瓦罐汤', rating: 4.8, reviews: 448,
    eta: '26–36 分钟', fee: '配送费 ¥2', distance: '1.9 km', image: jiangxiPork,
    description: '主打鲜辣咸香的江西小炒，米粉当天备料，瓦罐汤按时慢炖。',
    notice: '鲜辣度可选 · 默认配一份米饭',
    dishes: [
      { id: 'jiangxi-stirfry-pork', restaurantId: 'jiangxi', name: '江西小炒肉', note: '本地辣椒 · 猪前腿肉 · 豆豉', price: 35, calories: 620, image: jiangxiPork, category: '赣味招牌', popular: true },
      { id: 'nanchang-mixed-noodles', restaurantId: 'jiangxi', name: '南昌拌粉', note: '爽滑米粉 · 萝卜干 · 花生米', price: 18, calories: 510, image: jiangxiNoodles, category: '米粉主食' },
      { id: 'claypot-pork-soup', restaurantId: 'jiangxi', name: '瓦罐肉饼汤', note: '手打肉饼 · 清炖汤底 · 香葱', price: 16, calories: 260, image: jiangxiSoup, category: '瓦罐汤' },
      { id: 'meatball-soup', restaurantId: 'jiangxi', name: '瓦罐肉丸汤', note: '鲜肉丸 · 时蔬 · 慢炖清汤', price: 19, calories: 330, image: jiangxiMeatball, category: '瓦罐汤' },
    ],
  },
]

export const findRestaurant = (id?: string) => restaurants.find((item) => item.id === id) || restaurants[0]
export const findDish = (restaurantId?: string, dishId?: string) => findRestaurant(restaurantId).dishes.find((item) => item.id === dishId) || findRestaurant(restaurantId).dishes[0]

export function dishOptions(dish: Dish): DishOptions {
  if (dish.id === 'cheese-tteok') return {
    sizeTitle: '份量', sizes: [{ label: '单人份' }, { label: '双人份', price: 12, calories: 360 }],
    flavorTitle: '辣度', flavors: [{ label: '韩式微辣' }, { label: '中辣' }, { label: '不辣', calories: -30 }],
    extrasTitle: '年糕加料', extras: [{ label: '芝士片', price: 3, calories: 80 }, { label: '鱼饼', price: 4, calories: 95 }, { label: '溏心蛋', price: 3, calories: 75 }],
  }
  if (dish.id === 'bibimbap') return {
    sizeTitle: '米饭份量', sizes: [{ label: '标准饭量' }, { label: '加饭', price: 2, calories: 150 }],
    flavorTitle: '拌饭酱', flavors: [{ label: '标准辣酱' }, { label: '少酱微辣', calories: -40 }, { label: '辣酱分装' }],
    extrasTitle: '韩式加点', extras: [{ label: '煎蛋', price: 3, calories: 90 }, { label: '烤牛肉', price: 8, calories: 120 }, { label: '泡菜', price: 3, calories: 25 }],
  }
  if (dish.id === 'spicy-noodles') return {
    sizeTitle: '面量', sizes: [{ label: '标准面量' }, { label: '加面', price: 4, calories: 180 }],
    flavorTitle: '酸辣度', flavors: [{ label: '微辣少酸' }, { label: '标准酸辣' }, { label: '重辣重酸' }],
    extrasTitle: '拌面加料', extras: [{ label: '卤牛肉', price: 8, calories: 130 }, { label: '溏心蛋', price: 3, calories: 75 }, { label: '青菜', price: 3, calories: 25 }],
  }
  if (dish.id === 'wonton-soup') return {
    sizeTitle: '云吞数量', sizes: [{ label: '8 只' }, { label: '12 只', price: 8, calories: 180 }],
    flavorTitle: '汤底', flavors: [{ label: '鲜香清汤' }, { label: '红油汤', calories: 45 }, { label: '汤底分装' }],
    extrasTitle: '汤品加点', extras: [{ label: '细面', price: 4, calories: 170 }, { label: '青菜', price: 3, calories: 25 }, { label: '鲜虾 3 只', price: 8, calories: 65 }],
  }
  if (dish.restaurantId === 'dessert' && dish.category === '奶茶') return {
    sizeTitle: '杯型', sizes: [{ label: '中杯' }, { label: '大杯', price: 3, calories: 90 }],
    flavorTitle: '糖度与冰量', flavors: [{ label: '三分糖 · 正常冰' }, { label: '无糖 · 少冰', calories: -70 }, { label: '五分糖 · 去冰', calories: 35 }],
    extrasTitle: '小料', extras: [{ label: '黑糖珍珠', price: 3, calories: 110 }, { label: '仙草冻', price: 2, calories: 45 }, { label: '燕麦奶', price: 4, calories: 35 }],
  }
  if (dish.id === 'berry-cake') return {
    sizeTitle: '尺寸', sizes: [{ label: '6 英寸' }, { label: '8 英寸', price: 38, calories: 680 }],
    flavorTitle: '餐具', flavors: [{ label: '附 4 人份餐具' }, { label: '无需餐具' }],
    extrasTitle: '生日附件', extras: [{ label: '蜡烛与蛋糕刀', price: 2 }, { label: '手写祝福卡', price: 3 }],
  }
  if (dish.id === 'citrus-fruit-tea') return {
    sizeTitle: '杯型', sizes: [{ label: '中杯' }, { label: '大杯', price: 3, calories: 55 }],
    flavorTitle: '糖度与冰量', flavors: [{ label: '三分糖 · 正常冰' }, { label: '无糖 · 少冰', calories: -65 }, { label: '五分糖 · 去冰', calories: 35 }],
    extrasTitle: '水果加料', extras: [{ label: '鲜橙片', price: 2, calories: 20 }, { label: '椰果', price: 2, calories: 55 }, { label: '寒天晶球', price: 3, calories: 45 }],
  }
  if (dish.id === 'basque-cheesecake') return {
    sizeTitle: '份数', sizes: [{ label: '单片' }, { label: '双片', price: 22, calories: 430 }],
    flavorTitle: '餐具', flavors: [{ label: '附餐具' }, { label: '无需餐具' }],
    extrasTitle: '甜点搭配', extras: [{ label: '莓果酱', price: 3, calories: 45 }, { label: '鲜奶油', price: 3, calories: 80 }, { label: '美式咖啡', price: 8, calories: 10 }],
  }
  if (dish.id === 'salmon-sashimi') return {
    sizeTitle: '份量', sizes: [{ label: '6 片' }, { label: '10 片', price: 26, calories: 190 }],
    flavorTitle: '佐料', flavors: [{ label: '酱油 · 山葵分装' }, { label: '减盐酱油 · 不要山葵' }],
    extrasTitle: '刺身搭配', extras: [{ label: '紫苏叶', price: 2, calories: 5 }, { label: '海草', price: 6, calories: 80 }, { label: '味噌汤', price: 7, calories: 65 }],
  }
  if (dish.id === 'fried-platter') return {
    sizeTitle: '份量', sizes: [{ label: '标准拼盘' }, { label: '分享拼盘', price: 16, calories: 320 }],
    flavorTitle: '蘸汁', flavors: [{ label: '天妇罗汁' }, { label: '甜辣酱' }, { label: '双拼蘸汁' }],
    extrasTitle: '热食加点', extras: [{ label: '炸虾 2 只', price: 10, calories: 150 }, { label: '炸蔬菜', price: 6, calories: 120 }, { label: '味噌汤', price: 7, calories: 65 }],
  }
  if (dish.restaurantId === 'sushi') return {
    sizeTitle: '份量', sizes: [{ label: dish.id === 'sushi-platter' ? '24 贯' : '8 枚' }, { label: dish.id === 'sushi-platter' ? '36 贯' : '12 枚', price: dish.id === 'sushi-platter' ? 28 : 12, calories: 280 }],
    flavorTitle: '酱料', flavors: [{ label: '标准酱油 · 芥末分装' }, { label: '减盐酱油 · 不要芥末' }],
    extrasTitle: '日式小食', extras: [{ label: '中华海草', price: 6, calories: 80 }, { label: '味噌汤', price: 7, calories: 65 }, { label: '姜片加量', price: 1, calories: 8 }],
  }
  if (dish.restaurantId === 'hotpot') return {
    sizeTitle: '锅底', sizes: [{ label: '牛骨麻辣汤' }, { label: '番茄汤', calories: -60 }, { label: '清汤', calories: -90 }],
    flavorTitle: '辣度', flavors: [{ label: '微辣' }, { label: '中辣' }, { label: '不辣' }],
    extrasTitle: '加菜', extras: [{ label: '牛肉卷 50g', price: 8, calories: 110 }, { label: '手工虾滑', price: 7, calories: 95 }, { label: '宽粉', price: 4, calories: 130 }],
  }
  if (dish.id === 'beef-lasagna') return {
    sizeTitle: '份量', sizes: [{ label: '单人份' }, { label: '分享份', price: 16, calories: 330 }],
    flavorTitle: '焗烤程度', flavors: [{ label: '标准焗烤' }, { label: '芝士焦香' }],
    extrasTitle: '意式加点', extras: [{ label: '马苏里拉芝士', price: 5, calories: 90 }, { label: '牛肉酱', price: 8, calories: 140 }, { label: '蒜香面包', price: 6, calories: 160 }],
  }
  if (dish.id === 'tiramisu') return {
    sizeTitle: '份数', sizes: [{ label: '单份' }, { label: '双份', price: 22, calories: 420 }],
    flavorTitle: '可可粉', flavors: [{ label: '标准可可' }, { label: '少可可粉' }],
    extrasTitle: '甜点搭配', extras: [{ label: '浓缩咖啡', price: 7, calories: 10 }, { label: '莓果', price: 4, calories: 35 }],
  }
  if (dish.restaurantId === 'italian') return {
    sizeTitle: dish.category === '披萨' ? '尺寸' : '面量',
    sizes: dish.category === '披萨' ? [{ label: '9 英寸' }, { label: '12 英寸', price: 18, calories: 340 }] : [{ label: '标准面量' }, { label: '加面', price: 6, calories: 190 }],
    flavorTitle: dish.category === '披萨' ? '切片' : '熟度',
    flavors: dish.category === '披萨' ? [{ label: '切 6 片' }, { label: '切 8 片' }] : [{ label: '意式偏硬' }, { label: '标准熟度' }],
    extrasTitle: '加料', extras: [{ label: '帕玛森芝士', price: 5, calories: 75 }, { label: '萨拉米', price: 8, calories: 130 }, { label: '烤蘑菇', price: 6, calories: 55 }],
  }
  if (dish.id === 'onion-rings') return {
    sizeTitle: '份量', sizes: [{ label: '标准份' }, { label: '分享份', price: 8, calories: 210 }],
    flavorTitle: '蘸酱', flavors: [{ label: '番茄酱' }, { label: '烟熏蛋黄酱', calories: 55 }, { label: '双拼蘸酱', calories: 30 }],
    extrasTitle: '小食搭配', extras: [{ label: '海盐脆薯', price: 8, calories: 220 }, { label: '冰可乐', price: 5, calories: 140 }],
  }
  if (dish.id === 'crispy-chicken-burger') return {
    sizeTitle: '套餐', sizes: [{ label: '单品' }, { label: '配薯条与可乐', price: 12, calories: 430 }],
    flavorTitle: '辣度', flavors: [{ label: '微辣' }, { label: '中辣' }, { label: '不辣' }],
    extrasTitle: '汉堡加料', extras: [{ label: '车打芝士', price: 4, calories: 85 }, { label: '培根', price: 6, calories: 120 }, { label: '鸡腿排', price: 10, calories: 230 }],
  }
  if (dish.restaurantId === 'burger') return {
    sizeTitle: '套餐', sizes: [{ label: '单品' }, { label: '配薯条与可乐', price: 12, calories: 430 }],
    flavorTitle: '牛肉熟度', flavors: [{ label: '全熟' }, { label: '七分熟' }],
    extrasTitle: '汉堡加料', extras: [{ label: '车打芝士', price: 4, calories: 85 }, { label: '培根', price: 6, calories: 120 }, { label: '牛肉饼', price: 12, calories: 260 }],
  }
  if (dish.id === 'shrimp-wonton') return {
    sizeTitle: '份量', sizes: [{ label: '标准碗' }, { label: '加面加云吞', price: 7, calories: 210 }],
    flavorTitle: '汤底', flavors: [{ label: '鲜香清汤' }, { label: '少盐清汤' }, { label: '红油汤', calories: 45 }],
    extrasTitle: '早餐搭配', extras: [{ label: '茶叶蛋', price: 3, calories: 75 }, { label: '青菜', price: 3, calories: 25 }, { label: '现磨豆浆', price: 6, calories: 120 }],
  }
  if (dish.id === 'egg-toast') return {
    sizeTitle: '套餐', sizes: [{ label: '吐司单品' }, { label: '配咖啡', price: 8, calories: 25 }],
    flavorTitle: '鸡蛋熟度', flavors: [{ label: '流心蛋' }, { label: '全熟蛋' }],
    extrasTitle: '吐司加料', extras: [{ label: '牛油果', price: 5, calories: 80 }, { label: '火腿', price: 4, calories: 65 }, { label: '芝士片', price: 3, calories: 80 }],
  }
  if (dish.restaurantId === 'rice') return {
    sizeTitle: '米饭份量', sizes: [{ label: '标准饭量' }, { label: '加饭', price: 2, calories: 150 }],
    flavorTitle: dish.id === 'pork-egg-rice' ? '蛋汁熟度' : dish.category === '炒饭' ? '炒饭口味' : '盖饭口味',
    flavors: dish.id === 'pork-egg-rice' ? [{ label: '嫩滑半熟' }, { label: '全熟蛋汁' }] : [{ label: '标准口味' }, { label: '少油少盐', calories: -45 }, { label: '加辣' }],
    extrasTitle: '家常加菜', extras: [{ label: '卤蛋', price: 3, calories: 75 }, { label: '清炒时蔬', price: 6, calories: 65 }, { label: '香煎鸡排', price: 10, calories: 230 }],
  }
  if (dish.restaurantId === 'breakfast') return {
    sizeTitle: dish.category === '暖胃粥' ? '粥量' : '份数',
    sizes: dish.category === '暖胃粥' ? [{ label: '标准碗' }, { label: '大碗', price: 4, calories: 110 }] : [{ label: '标准份' }, { label: '加 2 只', price: 7, calories: 180 }],
    flavorTitle: dish.category === '暖胃粥' ? '调味' : '蘸料',
    flavors: dish.category === '暖胃粥' ? [{ label: '标准咸度' }, { label: '少盐' }, { label: '不加葱' }] : [{ label: '姜醋分装' }, { label: '辣油醋分装' }, { label: '不需要蘸料' }],
    extrasTitle: '早餐搭配', extras: [{ label: '茶叶蛋', price: 3, calories: 75 }, { label: '现磨豆浆', price: 6, calories: 120 }, { label: '酥脆油条', price: 4, calories: 190 }],
  }
  if (dish.restaurantId === 'bbq') return {
    sizeTitle: dish.category === '必点烤串' ? '串数' : '份量',
    sizes: dish.category === '必点烤串' ? [{ label: '6 串' }, { label: '10 串', price: 18, calories: 360 }] : [{ label: '标准份' }, { label: '双人份', price: 10, calories: 210 }],
    flavorTitle: '烧烤口味', flavors: [{ label: '孜然微辣' }, { label: '孜然不辣' }, { label: '重辣多撒料' }],
    extrasTitle: '再来几串', extras: [{ label: '烤馒头片', price: 6, calories: 180 }, { label: '烤韭菜', price: 7, calories: 70 }, { label: '冰镇酸梅汤', price: 8, calories: 120 }],
  }
  if (dish.id === 'mango-sticky-rice') return {
    sizeTitle: '份量', sizes: [{ label: '标准份' }, { label: '双倍芒果', price: 8, calories: 130 }],
    flavorTitle: '椰浆', flavors: [{ label: '标准椰浆' }, { label: '少椰浆', calories: -60 }, { label: '椰浆分装' }],
    extrasTitle: '甜品加料', extras: [{ label: '椰子脆片', price: 3, calories: 65 }, { label: '榴莲果肉', price: 10, calories: 150 }],
  }
  if (dish.id === 'tom-yum') return {
    sizeTitle: '汤量', sizes: [{ label: '标准份' }, { label: '双人份', price: 16, calories: 190 }],
    flavorTitle: '酸辣度', flavors: [{ label: '标准酸辣' }, { label: '少辣' }, { label: '加辣' }],
    extrasTitle: '海鲜加点', extras: [{ label: '鲜虾 3 只', price: 9, calories: 70 }, { label: '菌菇', price: 4, calories: 35 }, { label: '泰香米', price: 5, calories: 170 }],
  }
  if (dish.id === 'pineapple-fried-rice') return {
    sizeTitle: '饭量', sizes: [{ label: '标准份' }, { label: '加饭', price: 5, calories: 170 }],
    flavorTitle: '口味', flavors: [{ label: '标准泰式' }, { label: '少油少盐', calories: -45 }, { label: '微辣' }],
    extrasTitle: '炒饭加点', extras: [{ label: '太阳蛋', price: 4, calories: 90 }, { label: '鲜虾 3 只', price: 9, calories: 70 }, { label: '腰果', price: 4, calories: 80 }],
  }
  if (dish.restaurantId === 'thai') return {
    sizeTitle: dish.category === '咖喱' ? '米饭份量' : '河粉份量',
    sizes: [{ label: '标准份' }, { label: '加主食', price: 5, calories: 170 }],
    flavorTitle: '辣度', flavors: [{ label: '泰式微辣' }, { label: '中辣' }, { label: '不辣' }],
    extrasTitle: '泰式加点', extras: [{ label: '太阳蛋', price: 4, calories: 90 }, { label: '鲜虾 3 只', price: 9, calories: 70 }, { label: '冬阴功小汤', price: 8, calories: 85 }],
  }
  if (dish.restaurantId === 'icecream') return {
    sizeTitle: '冰淇淋份量', sizes: [{ label: '标准份' }, { label: '加一球', price: 8, calories: 140 }],
    flavorTitle: '盛装方式', flavors: [{ label: '保冷杯装' }, { label: '脆皮甜筒', calories: 65 }, { label: '杯与甜筒分装', calories: 65 }],
    extrasTitle: '冰品加料', extras: [{ label: '烤杏仁碎', price: 3, calories: 55 }, { label: '黑巧脆片', price: 4, calories: 70 }, { label: '莓果酱', price: 3, calories: 45 }],
  }
  if (dish.restaurantId === 'bakery') return {
    sizeTitle: dish.category === '酸种欧包' ? '面包处理' : '份数',
    sizes: dish.category === '酸种欧包' ? [{ label: '整只不切' }, { label: '切 8 片' }] : [{ label: '标准份' }, { label: '双份装', price: 14, calories: 420 }],
    flavorTitle: '复烤方式', flavors: [{ label: '原样包装' }, { label: '轻复烤' }, { label: '酥脆复烤' }],
    extrasTitle: '烘焙搭配', extras: [{ label: '发酵黄油', price: 4, calories: 85 }, { label: '莓果果酱', price: 4, calories: 55 }, { label: '手冲咖啡', price: 10, calories: 10 }],
  }
  if (dish.restaurantId === 'coffee') return {
    sizeTitle: '杯型', sizes: [{ label: '标准杯' }, { label: '大杯', price: 4, calories: 55 }],
    flavorTitle: '温度与甜度', flavors: [{ label: '热饮 · 不另外加糖' }, { label: '少冰 · 三分糖', calories: 35 }, { label: '正常冰 · 无糖', calories: -25 }],
    extrasTitle: '咖啡调整', extras: [{ label: '加一份浓缩', price: 4, calories: 8 }, { label: '换燕麦奶', price: 4, calories: 25 }, { label: '香草糖浆', price: 3, calories: 45 }],
  }
  if (dish.restaurantId === 'braised') return {
    sizeTitle: dish.category === '卤味主食' ? '饭量' : '卤味份量',
    sizes: dish.category === '卤味主食' ? [{ label: '标准饭量' }, { label: '加饭', price: 2, calories: 150 }] : [{ label: '标准份' }, { label: '加量 100g', price: 12, calories: 230 }],
    flavorTitle: '卤味口味', flavors: [{ label: '原味老卤' }, { label: '香辣拌味', calories: 35 }, { label: '辣油分装' }],
    extrasTitle: '卤味加点', extras: [{ label: '卤蛋', price: 3, calories: 75 }, { label: '卤豆干', price: 5, calories: 95 }, { label: '酸辣海带', price: 5, calories: 55 }],
  }
  if (dish.restaurantId === 'sweet-soup') return {
    sizeTitle: '糖水份量', sizes: [{ label: '标准碗' }, { label: '分享碗', price: 8, calories: 180 }],
    flavorTitle: '温度与甜度', flavors: [{ label: '温热 · 少甜' }, { label: '冰镇 · 少甜' }, { label: '温热 · 正常甜', calories: 45 }],
    extrasTitle: '糖水加料', extras: [{ label: '手作芋圆', price: 4, calories: 95 }, { label: '椰奶冻', price: 4, calories: 80 }, { label: '桂花小丸子', price: 3, calories: 70 }],
  }
  if (dish.restaurantId === 'homecook') return {
    sizeTitle: '搭配主食', sizes: [{ label: '配一份米饭' }, { label: '配两份米饭', price: 3, calories: 230 }],
    flavorTitle: '小炒口味', flavors: [{ label: '标准家常味' }, { label: '少油少盐', calories: -55 }, { label: '加辣' }],
    extrasTitle: '家常加菜', extras: [{ label: '荷包蛋', price: 4, calories: 90 }, { label: '清炒时蔬', price: 7, calories: 65 }, { label: '紫菜蛋花汤', price: 6, calories: 75 }],
  }
  if (dish.restaurantId === 'sichuan') return {
    sizeTitle: dish.category === '川味主食' ? '面量' : '搭配米饭',
    sizes: dish.category === '川味主食' ? [{ label: '标准面量' }, { label: '加面', price: 4, calories: 180 }] : [{ label: '配一份米饭' }, { label: '配两份米饭', price: 3, calories: 230 }],
    flavorTitle: '麻辣度', flavors: [{ label: '微麻微辣' }, { label: '标准川味' }, { label: '重麻重辣' }],
    extrasTitle: '川味加点', extras: [{ label: '红糖冰粉', price: 7, calories: 160 }, { label: '凉拌木耳', price: 7, calories: 80 }, { label: '酸梅汤', price: 6, calories: 110 }],
  }
  if (dish.restaurantId === 'jiangxi') return {
    sizeTitle: dish.category === '米粉主食' ? '米粉份量' : dish.category === '瓦罐汤' ? '汤量' : '搭配主食',
    sizes: dish.category === '米粉主食' ? [{ label: '标准粉量' }, { label: '加粉', price: 3, calories: 160 }] : dish.category === '瓦罐汤' ? [{ label: '标准罐' }, { label: '大罐', price: 5, calories: 120 }] : [{ label: '配一份米饭' }, { label: '配两份米饭', price: 3, calories: 230 }],
    flavorTitle: '赣味辣度', flavors: [{ label: '微辣' }, { label: '江西鲜辣' }, { label: '不辣' }],
    extrasTitle: '赣味加点', extras: [{ label: '荷包蛋', price: 4, calories: 90 }, { label: '瓦罐肉饼汤', price: 8, calories: 130 }, { label: '酸萝卜', price: 3, calories: 25 }],
  }
  return {
    sizeTitle: '份量', sizes: [{ label: '标准份' }, { label: '加大份', price: 8, calories: 220 }],
    flavorTitle: '酱料', flavors: [{ label: '招牌酱' }, { label: '蒜香酱油' }, { label: '甜辣酱' }],
    extrasTitle: '加点小食', extras: [{ label: '腌萝卜', price: 3, calories: 30 }, { label: '芝士年糕', price: 6, calories: 160 }, { label: '薯角', price: 7, calories: 210 }],
  }
}
