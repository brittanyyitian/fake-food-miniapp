import { useState } from 'react'
import Taro, { useDidShow, useRouter } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import PageHeader from '../../../components/PageHeader'
import { findRestaurant } from '../../data/restaurants'
import { cartAmount, cartCount, getCart, getDishFavorites, getFavorites, toggleDishFavorite, toggleFavorite } from '../../../store'

export default function RestaurantPage() {
  const { params } = useRouter()
  const restaurant = findRestaurant(params.id)
  const [active, setActive] = useState('人气推荐')
  const [saved, setSaved] = useState(false)
  const [savedDishes, setSavedDishes] = useState<string[]>([])
  const [cart, setCart] = useState(getCart())
  useDidShow(() => { setSaved(getFavorites().includes(restaurant.id)); setSavedDishes(getDishFavorites()); setCart(getCart()) })
  const categories = Array.from(new Set(['人气推荐', ...restaurant.dishes.map((dish) => dish.category)]))
  const dishes = active === '人气推荐' ? restaurant.dishes : restaurant.dishes.filter((dish) => dish.category === active)
  const count = cartCount(cart)
  const openDish = (dishId: string) => Taro.navigateTo({ url: `/package-food/pages/customize/index?restaurantId=${restaurant.id}&dishId=${dishId}` })

  return <View className='page with-header'>
    <PageHeader title={restaurant.name} right={<View className='header-bag' onClick={() => Taro.navigateTo({ url: '/package-food/pages/cart/index' })}>🛍️{count > 0 && <Text className='badge'>{count}</Text>}</View>} />
    <ScrollView scrollY className={`page-scroll ${count ? 'has-fixed-footer' : ''}`} enhanced showScrollbar={false}>
      <Image className='restaurant-hero' src={restaurant.image} mode='aspectFill' />
      <View className='content-pad'>
        <View className='restaurant-heading'><View><Text className='h1'>{restaurant.name}</Text><Text className='muted'>{restaurant.cuisine}</Text></View><View className={`heart detail ${saved ? 'saved' : ''}`} onClick={() => { const next = toggleFavorite(restaurant.id); setSaved(next.includes(restaurant.id)) }}>{saved ? '♥' : '♡'}</View></View>
        <View className='metric-row'><Text>★ {restaurant.rating} ({restaurant.reviews})</Text><Text>{restaurant.eta}</Text><Text>{restaurant.fee}</Text></View>
        <Text className='body-copy'>{restaurant.description}</Text>
        <View className='store-note'><Text>🏪</Text><Text>{restaurant.notice}</Text><Text>›</Text></View>
      </View>
      <ScrollView scrollX className='menu-tabs' showScrollbar={false}><View className='tab-row'>{categories.map((item) => <Text key={item} className={active === item ? 'active' : ''} onClick={() => setActive(item)}>{item}</Text>)}</View></ScrollView>
      <View className='content-pad'><View className='section-title menu-title'><Text>{active}</Text><Text>{dishes.length} 道</Text></View>
        {dishes.map((dish) => <View className='dish-row' hoverClass='dish-row-pressed' hoverStayTime={80} key={dish.id} onClick={() => openDish(dish.id)}>
          <View className='dish-copy'><View><Text className='dish-name'>{dish.name}</Text>{dish.popular && <Text className='hot-tag'>热销</Text>}</View><Text className='muted clamp'>{dish.note}</Text><Text className='calorie'>约 {dish.calories} kcal</Text><Text className='price'>¥{dish.price}</Text></View>
          <View className='dish-image-wrap'><Image className='dish-image' src={dish.image} mode='aspectFill' /><Text className={`dish-heart ${savedDishes.includes(dish.id) ? 'saved' : ''}`} onClick={(event) => { event.stopPropagation(); setSavedDishes(toggleDishFavorite(dish)) }}>{savedDishes.includes(dish.id) ? '♥' : '♡'}</Text><View className='plus' onClick={(event) => { event.stopPropagation(); openDish(dish.id) }}><Text>＋</Text></View></View>
        </View>)}
      </View>
    </ScrollView>
    {count > 0 && <View className='fixed-footer transparent'><View className='cart-cta' onClick={() => Taro.navigateTo({ url: '/package-food/pages/cart/index' })}><View><Text className='bag-icon'>🛍️</Text><Text className='cart-count'>{count}</Text></View><Text>查看购物车</Text><Text>¥{cartAmount(cart)}</Text></View></View>}
  </View>
}
