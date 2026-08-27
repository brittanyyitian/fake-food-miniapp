import { View, Text } from '@tarojs/components'
import { getRootLayout } from '../utils/layout'

export default function RootHeader({ title, children, right }: { title?: string; children?: React.ReactNode; right?: React.ReactNode }) {
  const layout = getRootLayout()
  return <View className='root-header' style={{ paddingTop: `${layout.statusBarHeight}px` }}>
    <View className='root-header-inner' style={{ height: `${layout.navBarHeight}px`, paddingRight: `${layout.rightInset}px` }}>
      <View className='root-header-main'>{children || <Text className='root-header-title'>{title}</Text>}</View>
      {right && <View className='root-header-action'>{right}</View>}
    </View>
  </View>
}
