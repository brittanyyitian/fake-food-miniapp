import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import backIcon from '../assets/icons/arrow-back-rounded.svg'

export default function PageHeader({ title, right }: { title: string; right?: React.ReactNode }) {
  const system = Taro.getSystemInfoSync()
  const statusBarHeight = system.statusBarHeight || 20
  const menuButton = typeof Taro.getMenuButtonBoundingClientRect === 'function' ? Taro.getMenuButtonBoundingClientRect() : undefined
  const hasMenuButton = Boolean(menuButton && menuButton.top && menuButton.height && menuButton.left)
  const barHeight = hasMenuButton && menuButton ? (menuButton.top - statusBarHeight) * 2 + menuButton.height : 48
  const rightInset = hasMenuButton && menuButton ? system.windowWidth - menuButton.left + 8 : 0
  return (
    <View className='page-header' style={{ paddingTop: `${statusBarHeight}px` }}>
      <View className='header-inner' style={{ height: `${barHeight}px` }}>
        <View className='back-hit' onClick={() => Taro.navigateBack()}><Image className='back-icon-image' src={backIcon} /></View>
        <Text className='header-title'>{title}</Text>
        <View className='header-right' style={right ? { marginRight: `${rightInset}px` } : undefined}>{right}</View>
      </View>
    </View>
  )
}
