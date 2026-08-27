import { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Input, ScrollView } from '@tarojs/components'
import PageHeader from '../../../components/PageHeader'
import { findRestaurant } from '../../data/restaurants'
import { cartAmount, cartCalories, cartCount, clearCart, createOrder, getCart, getMode, saveMode } from '../../../store'
import type { RiderMode } from '../../../types'
import rabbit from '../../assets/food/rabbit.svg'
import turtle from '../../assets/food/turtle.svg'

export default function CheckoutPage() {
  const cart = getCart()
  const restaurant = findRestaurant(cart.length ? cart[0].restaurantId : undefined)
  const [address, setAddress] = useState('被窝区 快乐路 88 号')
  const [note, setNote] = useState('请放门口，不用敲门')
  const [mode, setMode] = useState<RiderMode>(getMode())
  const [submitting, setSubmitting] = useState(false)
  const submitGuard = useRef(false)
  const choose = (next: RiderMode) => { setMode(next); saveMode(next) }
  if (!cart.length) return <View className='page with-header'><PageHeader title='确认订单' /><View className='empty-state'><Text className='empty-icon'>🛍️</Text><Text className='empty-title'>还没有可结算的商品</Text><View className='secondary-button' onClick={() => Taro.reLaunch({ url: '/pages/home/index' })}>去逛餐厅</View></View></View>
  const submit = async () => {
    if (!address.trim()) return Taro.showToast({ title: '请填写送达地址', icon: 'none' })
    if (submitGuard.current) return
    submitGuard.current = true
    setSubmitting(true)
    const order = createOrder({ restaurantId: restaurant.id, items: cart, mode, address, note })
    clearCart()
    try {
      await Taro.redirectTo({ url: `/package-food/pages/delivery/index?orderId=${order.id}` })
    } catch (_error) {
      await Taro.reLaunch({ url: '/pages/orders/index' })
    }
  }
  return <View className='page with-header'>
    <PageHeader title='确认订单' />
    <ScrollView scrollY className='page-scroll checkout-scroll' enhanced showScrollbar={false}>
      <View className='checkout-card'><Text className='block-title'>送达信息</Text><View className='input-row'><Text>📍</Text><Input value={address} onInput={(event) => setAddress(event.detail.value)} placeholder='请输入送达地址' /></View><View className='input-row'><Text>💬</Text><Input value={note} onInput={(event) => setNote(event.detail.value)} placeholder='添加订单备注' /></View><Text className='fine'>内容仅保留在本次体验中</Text></View>
      <View className='order-brief'><Image src={restaurant.image} mode='aspectFill' /><View><Text>{restaurant.name}</Text><Text>{cartCount(cart)} 件商品 · 约 {cartCalories(cart).toLocaleString()} kcal</Text></View><Text>¥{cartAmount(cart)}</Text></View>
      <View className='checkout-card'><Text className='block-title'>选择配送节奏</Text>
        <View className={`delivery-choice ${mode === 'rabbit' ? 'selected' : ''}`} onClick={() => choose('rabbit')}><Image src={rabbit} /><View><Text>兔兔</Text><Text>约 30 秒 · 快速推进配送状态</Text></View><Text>{mode === 'rabbit' ? '✓' : ''}</Text></View>
        <View className={`delivery-choice ${mode === 'turtle' ? 'selected' : ''}`} onClick={() => choose('turtle')}><Image src={turtle} /><View><Text>龟龟</Text><Text>约 90 秒 · 多享受一会儿等待</Text></View><Text>{mode === 'turtle' ? '✓' : ''}</Text></View>
      </View>
      <View className='checkout-card compact'><View><Text>商品小计</Text><Text>¥{cartAmount(cart)}</Text></View><View><Text>配送费</Text><Text>¥0</Text></View><View className='pay-total'><Text>模拟支付</Text><Text>¥0</Text></View></View>
      <View className={`primary-button ${submitting ? 'disabled' : ''}`} onClick={submit}>{submitting ? '订单创建中…' : '模拟下单 · 实付 ¥0'}</View>
      <Text className='checkout-note'>不会真实扣款、制作或配送</Text>
    </ScrollView>
  </View>
}
