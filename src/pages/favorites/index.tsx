import { useState } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import BottomNav from '../../components/BottomNav'
import RootHeader from '../../components/RootHeader'
import { findRestaurantSummary, restaurantSummaries } from '../../data/restaurantSummaries'
import { getDishFavoriteItems, getFavorites, toggleDishFavorite, toggleFavorite } from '../../store'
import type { Dish } from '../../types'
import { getRootLayout } from '../../utils/layout'

export default function FavoritesPage() {
  const [ids, setIds] = useState<string[]>([])
  const [savedDishes, setSavedDishes] = useState<Dish[]>([])
  const layout = getRootLayout()
  useDidShow(() => { setIds(getFavorites()); setSavedDishes(getDishFavoriteItems()) })
  const saved = restaurantSummaries.filter((item) => ids.includes(item.id))
  return <View className='page root-page'><RootHeader title='收藏' /><ScrollView scrollY className='root-scroll' style={{ height: `${layout.scrollHeight}px` }} enhanced showScrollbar={false}>
    <View className='root-intro'><Text className='subtle'>想吃的时候，先来这里逛一圈</Text></View>
    {saved.length === 0 && savedDishes.length === 0 ? <View className='empty-state'><Text className='empty-icon'>♡</Text><Text className='empty-title'>还没有收藏</Text><Text className='muted'>在餐厅或菜品旁点爱心即可保存</Text><View className='secondary-button' onClick={() => Taro.redirectTo({ url: '/pages/home/index' })}>去逛餐厅</View></View> : <>
      <View className='section-title'><Text>收藏的餐厅</Text><Text>{saved.length} 家</Text></View>
      {saved.length === 0 ? <View className='inline-empty'>还没有收藏餐厅</View> : saved.map((restaurant) => <View className='saved-row' key={restaurant.id}><View className='saved-main' onClick={() => Taro.navigateTo({ url: `/package-food/pages/restaurant/index?id=${restaurant.id}` })}><Image src={restaurant.image} mode='aspectFill' /><View><Text>{restaurant.name}</Text><Text>{restaurant.cuisine}</Text><Text>★ {restaurant.rating} · {restaurant.eta}</Text></View></View><Text className='saved-heart' onClick={() => setIds(toggleFavorite(restaurant.id))}>♥</Text></View>)}
      <View className='section-title'><Text>收藏的菜品</Text><Text>{savedDishes.length} 道</Text></View>
      {savedDishes.length === 0 ? <View className='inline-empty'>还没有收藏菜品</View> : savedDishes.map((dish) => { const store = findRestaurantSummary(dish.restaurantId); return <View className='saved-row' key={dish.id}><View className='saved-main' onClick={() => Taro.navigateTo({ url: `/package-food/pages/customize/index?restaurantId=${dish.restaurantId}&dishId=${dish.id}` })}><Image src={store.image} mode='aspectFill' /><View><Text>{dish.name}</Text><Text>{dish.note}</Text><Text>¥{dish.price} · 约 {dish.calories} kcal</Text><Text>{store.name}</Text></View></View><Text className='saved-heart' onClick={() => { toggleDishFavorite(dish.id); setSavedDishes(getDishFavoriteItems()) }}>♥</Text></View> })}
    </>}
    <View className='list-tail'>收藏状态会自动保存在本机</View>
  </ScrollView><BottomNav active='favorites' /></View>
}
