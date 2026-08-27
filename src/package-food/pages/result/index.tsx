import { useEffect } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { cartAmount, cartCalories, completeOrder, getOrder } from '../../../store'

export default function ResultPage() {
  const { params } = useRouter()
  const order = getOrder(params.orderId)
  useEffect(() => { if (order) completeOrder(order.id) }, [order ? order.id : undefined])
  const amount = order ? cartAmount(order.items) : 0
  const calories = order ? cartCalories(order.items) : 0
  return <View className='page result-page'><View className='result-hero'><View className='success-orbit'>✓</View><Text className='eyebrow'>订单已送达</Text><Text className='result-title'>嘴馋被接住了，{`\n`}食物留在想象里。</Text><Text>这是一笔模拟订单，没有真实扣款、制作或配送。</Text></View>
    <View className='result-stats'><View><Text>本次省下</Text><Text>¥{amount}</Text></View><View><Text>少摄入约</Text><Text>{calories.toLocaleString()} kcal</Text></View></View>
    <View className='streak-card'><Text>这一次，你给冲动留了 {order && order.mode === 'turtle' ? 90 : 30} 秒</Text><Text>可以继续逛，也可以把手机放下。</Text></View>
    <View className='primary-button result-button' onClick={() => Taro.reLaunch({ url: '/pages/home/index' })}>回到首页</View>
    <Text className='fine center'>热量为估算值，仅用于趣味体验</Text>
  </View>
}
