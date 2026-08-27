import { useEffect, useState } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import BottomNav from '../../components/BottomNav'
import RootHeader from '../../components/RootHeader'
import { findRestaurantSummary } from '../../data/restaurantSummaries'
import { cartAmount, cartCalories, cartCount, getOrders } from '../../store'
import type { StoredOrder } from '../../types'
import { getRootLayout } from '../../utils/layout'

export default function OrdersPage() {
  const [orders, setOrders] = useState<StoredOrder[]>([])
  const layout = getRootLayout()
  useDidShow(() => setOrders(getOrders()))
  useEffect(() => {
    const timer = setInterval(() => setOrders(getOrders()), 1000)
    return () => clearInterval(timer)
  }, [])
  const active = orders.filter((item) => !item.completedAt)
  const completed = orders.filter((item) => item.completedAt)
  const open = (order: StoredOrder) => Taro.navigateTo({ url: order.completedAt ? `/package-food/pages/result/index?orderId=${order.id}` : `/package-food/pages/delivery/index?orderId=${order.id}` })
  return <View className='page root-page'><RootHeader title='订单' /><ScrollView scrollY className='root-scroll' style={{ height: `${layout.scrollHeight}px` }} enhanced showScrollbar={false}>
    <View className='root-intro'><Text className='subtle'>回顾每一次被接住的点餐冲动</Text></View>
    {active.length > 0 && <><View className='section-title'><Text>进行中</Text><Text>{active.length} 单</Text></View>{active.map((order) => { const store = findRestaurantSummary(order.restaurantId); return <View className='active-order' key={order.id} onClick={() => open(order)}><View><Text className='status-green'>进行中</Text><Text className='card-title'>{store.name}</Text><Text className='muted'>{cartCount(order.items)} 件 · ¥{cartAmount(order.items)} · 约 {cartCalories(order.items)} kcal</Text></View><Text>›</Text></View> })}</>}
    <View className='section-title'><Text>历史模拟订单</Text><Text>{completed.length} 单</Text></View>
    {completed.length === 0 ? <View className='empty-state compact-empty'><Text className='empty-icon'>▤</Text><Text className='empty-title'>还没有历史订单</Text><Text className='muted'>完成一次模拟配送后会显示在这里</Text></View> : completed.map((order) => { const store = findRestaurantSummary(order.restaurantId); return <View className='history-order' key={order.id} onClick={() => open(order)}><Image src={store.image} mode='aspectFill' /><View><Text>{store.name}</Text><Text>{new Date(order.completedAt!).toLocaleDateString()} · 已送达</Text><Text>省下 ¥{cartAmount(order.items)} · 约 {cartCalories(order.items).toLocaleString()} kcal</Text></View><Text>›</Text></View> })}
    <View className='list-tail'>所有订单都只存在于想象中</View>
  </ScrollView><BottomNav active='orders' /></View>
}
