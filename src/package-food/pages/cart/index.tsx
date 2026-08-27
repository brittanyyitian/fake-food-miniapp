import { useState } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import PageHeader from '../../../components/PageHeader'
import { findRestaurant } from '../../data/restaurants'
import { cartAmount, cartCalories, getCart, saveCart } from '../../../store'
import type { CartItem } from '../../../types'

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(getCart())
  useDidShow(() => setCart(getCart()))
  const restaurant = findRestaurant(cart.length ? cart[0].restaurantId : undefined)
  const changeQty = (lineId: string, delta: number) => {
    const next = cart.map((item) => item.lineId === lineId ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0)
    setCart(next); saveCart(next)
  }
  return <View className='page with-header'>
    <PageHeader title='购物车' />
    <ScrollView scrollY className='page-scroll cart-scroll' enhanced showScrollbar={false}>
      {cart.length === 0 ? <View className='empty-state'><Text className='empty-icon'>🛍️</Text><Text className='empty-title'>购物车还是空的</Text><Text className='muted'>先去挑点想吃的吧</Text><View className='secondary-button' onClick={() => Taro.redirectTo({ url: '/pages/home/index' })}>去逛餐厅</View></View> : <>
        <View className='cart-store'><Image src={restaurant.image} mode='aspectFill' /><View><Text>{restaurant.name}</Text><Text>{restaurant.eta} · {restaurant.fee}</Text></View><Text>›</Text></View>
        {cart.map((item) => <View className='cart-item' key={item.lineId}><Image src={item.image} mode='aspectFill' /><View className='cart-item-copy'><Text className='dish-name'>{item.name}</Text><Text className='muted clamp'>{item.options}</Text><Text className='calorie'>约 {item.calories} kcal</Text><Text className='price'>¥{item.price}</Text></View><View className='qty'><Text onClick={() => changeQty(item.lineId, -1)}>−</Text><Text>{item.quantity}</Text><Text onClick={() => changeQty(item.lineId, 1)}>＋</Text></View></View>)}
        <View className='impact-card'><Text>这袋食物预计包含</Text><Text>{cartCalories(cart).toLocaleString()} kcal</Text><Text>约等于快走 {Math.max(30, Math.round(cartCalories(cart) / 8))} 分钟</Text></View>
        <View className='total-row'><Text>商品小计</Text><Text>¥{cartAmount(cart)}</Text></View>
      </>}
    </ScrollView>
    {cart.length > 0 && <View className='fixed-footer white'><View className='primary-button split' onClick={() => Taro.navigateTo({ url: '/package-food/pages/checkout/index' })}><Text>去结算</Text><Text>¥{cartAmount(cart)}</Text></View></View>}
  </View>
}
