import { useState } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { useDidShow } from '@tarojs/taro'
import BottomNav from '../../components/BottomNav'
import RootHeader from '../../components/RootHeader'
import { cartAmount, cartCalories, getMode, getOrders, saveMode } from '../../store'
import type { RiderMode } from '../../types'
import { getRootLayout } from '../../utils/layout'

export default function ProfilePage() {
  const [mode, setMode] = useState<RiderMode>('rabbit')
  const [showCalories, setShowCalories] = useState(true)
  const [about, setAbout] = useState(false)
  const layout = getRootLayout()
  const orders = getOrders().filter((item) => item.completedAt)
  useDidShow(() => setMode(getMode()))
  const amount = orders.reduce((sum, order) => sum + cartAmount(order.items), 0)
  const calories = orders.reduce((sum, order) => sum + cartCalories(order.items), 0)
  const changeMode = () => { const next = mode === 'rabbit' ? 'turtle' : 'rabbit'; setMode(next); saveMode(next) }
  return <View className='page root-page'><RootHeader title='我的' /><ScrollView scrollY className='root-scroll' style={{ height: `${layout.scrollHeight}px` }} enhanced showScrollbar={false}>
    <View className='profile-header'><View className='profile-avatar'>●</View><View><Text className='h1'>今晚也不急着下单</Text><Text className='subtle'>连续 {orders.length} 次接住点餐冲动</Text></View></View>
    <View className='profile-stats'><View><Text>¥{amount}</Text><Text>累计省下</Text></View><View><Text>{calories.toLocaleString()}</Text><Text>少摄入 kcal</Text></View><View><Text>{orders.length}</Text><Text>完成体验</Text></View></View>
    <View className='section-title'><Text>体验设置</Text></View>
    <View className='setting-row' onClick={changeMode}><Text className='setting-icon'>⏱</Text><View><Text>默认配送节奏</Text><Text>{mode === 'rabbit' ? '兔兔 · 快速' : '龟龟 · 慢慢等'}</Text></View><Text>{mode === 'rabbit' ? '兔兔' : '龟龟'} ›</Text></View>
    <View className='setting-row' onClick={() => setShowCalories(!showCalories)}><Text className='setting-icon'>◉</Text><View><Text>热量显示</Text><Text>{showCalories ? '展示估算热量与步行时间' : '已隐藏热量提示'}</Text></View><View className={`switch ${showCalories ? 'on' : ''}`}><Text /></View></View>
    <View className='setting-row' onClick={() => setAbout(!about)}><Text className='setting-icon'>i</Text><View><Text>关于这次体验</Text><Text>所有订单均不会真实送达</Text></View><Text>›</Text></View>
    {about && <View className='about-panel'>这是一个模拟点餐体验：不会真实扣款、制作或配送。热量为估算值，只帮助你感受一次“没有吃下去”的选择。</View>}
  </ScrollView><BottomNav active='profile' /></View>
}
