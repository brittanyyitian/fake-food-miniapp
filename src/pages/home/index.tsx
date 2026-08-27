import { useMemo, useState } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text, Image, Input, ScrollView } from '@tarojs/components'
import { restaurantCategories, restaurantSummaries } from '../../data/restaurantSummaries'
import { cartCount, getCart, getFavorites, toggleFavorite } from '../../store'
import BottomNav from '../../components/BottomNav'
import RootHeader from '../../components/RootHeader'
import { getRootLayout } from '../../utils/layout'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])
  const [count, setCount] = useState(0)
  const layout = getRootLayout()
  useDidShow(() => { setFavorites(getFavorites()); setCount(cartCount(getCart())) })

  const visible = useMemo(() => restaurantSummaries.filter((restaurant) => {
    const haystack = `${restaurant.name} ${restaurant.tags.join(' ')} ${restaurant.cuisine} ${restaurant.searchTerms.join(' ')}`
    const selectedCategory = restaurantCategories.find((item) => item.name === category)
    const matchesCategory = !selectedCategory || selectedCategory.keywords.some((keyword) => haystack.includes(keyword))
    return matchesCategory && (!query.trim() || haystack.toLowerCase().includes(query.trim().toLowerCase()))
  }), [query, category])

  return (
    <View className='page root-page'>
      <RootHeader right={<View className='round-action' onClick={() => Taro.navigateTo({ url: '/package-food/pages/cart/index' })}>🛍️{count > 0 && <Text className='badge'>{count}</Text>}</View>}>
        <View><Text className='muted tiny'>送达至</Text><Text className='address'>📍 被窝区 · 快乐路 88 号 ›</Text></View>
      </RootHeader>
      <ScrollView scrollY className='root-scroll' style={{ height: `${layout.scrollHeight}px` }} enhanced showScrollbar={false}>
        <View className='home-title'><Text className='h1'>今天想吃什么？</Text><Text className='subtle'>附近好店，马上开逛</Text></View>
        <View className='search-box'><Text>⌕</Text><Input value={query} onInput={(event) => setQuery(event.detail.value)} placeholder='搜索餐厅或菜品' confirmType='search' /></View>
        <ScrollView scrollX className='category-scroll' enhanced showScrollbar={false}>
          <View className='category-row'>{restaurantCategories.map((item) => <View key={item.name} className={`category ${category === item.name ? 'active' : ''}`} onClick={() => setCategory(category === item.name ? '' : item.name)}><Image src={item.image} mode='aspectFill' /><Text>{item.name}</Text></View>)}</View>
        </ScrollView>
        <View className='disclosure'><Text>今天也可以只逛不吃</Text><Text>模拟点餐体验 · 不会真实扣款</Text></View>
        <View className='section-title'><Text>{category || query ? `${category || '搜索结果'} · ${visible.length} 家` : `附近热门 · ${restaurantSummaries.length} 家`}</Text><Text onClick={() => { setQuery(''); setCategory('') }}>查看全部</Text></View>
        <View className='restaurant-list'>{visible.map((restaurant) => (
          <View className='restaurant-card' key={restaurant.id}>
            <View onClick={() => Taro.navigateTo({ url: `/package-food/pages/restaurant/index?id=${restaurant.id}` })}>
              <Image className='restaurant-cover' src={restaurant.image} mode='aspectFill' />
              {restaurant.fee === '免配送费' && <Text className='photo-tag'>免配送费</Text>}
              <View className='restaurant-copy'>
                <Text className='card-title'>{restaurant.name}</Text>
                <Text className='meta'>★ {restaurant.rating} · {restaurant.eta} · {restaurant.distance}</Text>
                <Text className='muted'>{restaurant.cuisine}</Text>
                <Text className='notice'>{restaurant.notice}</Text>
              </View>
            </View>
            <View className={`heart ${favorites.includes(restaurant.id) ? 'saved' : ''}`} onClick={() => setFavorites(toggleFavorite(restaurant.id))}>{favorites.includes(restaurant.id) ? '♥' : '♡'}</View>
          </View>
        ))}</View>
        <View className='list-tail'>已经到底啦</View>
      </ScrollView>
      <BottomNav active='home' />
    </View>
  )
}
