import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import homeDefault from '../assets/icons/tab-home-default.svg'
import homeActive from '../assets/icons/tab-home-active.svg'
import ordersDefault from '../assets/icons/tab-orders-default.svg'
import ordersActive from '../assets/icons/tab-orders-active.svg'
import favoritesDefault from '../assets/icons/tab-favorites-default.svg'
import favoritesActive from '../assets/icons/tab-favorites-active.svg'
import profileDefault from '../assets/icons/tab-profile-default.svg'
import profileActive from '../assets/icons/tab-profile-active.svg'

const tabs = [
  { key: 'home', label: '首页', icon: homeDefault, activeIcon: homeActive, url: '/pages/home/index' },
  { key: 'orders', label: '订单', icon: ordersDefault, activeIcon: ordersActive, url: '/pages/orders/index' },
  { key: 'favorites', label: '收藏', icon: favoritesDefault, activeIcon: favoritesActive, url: '/pages/favorites/index' },
  { key: 'profile', label: '我的', icon: profileDefault, activeIcon: profileActive, url: '/pages/profile/index' },
]

export default function BottomNav({ active }: { active: string }) {
  return <View className='bottom-nav'>{tabs.map((tab) => (
    <View className={`nav-item ${active === tab.key ? 'active' : ''}`} key={tab.key} onClick={() => active !== tab.key && Taro.redirectTo({ url: tab.url })}>
      <Image className='nav-icon-image' src={active === tab.key ? tab.activeIcon : tab.icon} mode='aspectFit' /><Text>{tab.label}</Text>
    </View>
  ))}</View>
}
