import { useEffect, useMemo, useState } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { View, Text, Image, Map } from '@tarojs/components'
import PageHeader from '../../../components/PageHeader'
import { findRestaurant } from '../../data/restaurants'
import { getOrder } from '../../../store'
import rabbit from '../../assets/food/rabbit.svg'
import turtle from '../../assets/food/turtle.svg'
import rabbitMap from '../../assets/food/rabbit-map.png'
import turtleMap from '../../assets/food/turtle-map.png'
import storeMarker from '../../assets/food/store-marker.png'
import homeMarker from '../../assets/food/home-marker.png'

type Point = { latitude: number; longitude: number }
const ROUTE: Point[] = [
  { latitude: 31.228200, longitude: 121.475400 },
  { latitude: 31.228094, longitude: 121.475472 },
  { latitude: 31.227839, longitude: 121.475635 },
  { latitude: 31.227548, longitude: 121.475775 },
  { latitude: 31.227604, longitude: 121.475911 },
  { latitude: 31.228022, longitude: 121.476927 },
  { latitude: 31.228159, longitude: 121.477259 },
  { latitude: 31.228486, longitude: 121.478054 },
  { latitude: 31.228741, longitude: 121.478673 },
  { latitude: 31.228634, longitude: 121.478766 },
  { latitude: 31.228533, longitude: 121.478832 },
  { latitude: 31.228370, longitude: 121.478915 },
  { latitude: 31.228163, longitude: 121.478773 },
  { latitude: 31.228060, longitude: 121.479041 },
  { latitude: 31.227935, longitude: 121.479159 },
  { latitude: 31.228032, longitude: 121.479232 },
]

// Invisible boundary points keep both pins and their callouts away from the
// native map's clipped edges. The visible polyline still uses ROUTE only.
const VIEW_POINTS: Point[] = [
  ...ROUTE,
  { latitude: 31.229190, longitude: 121.474850 },
  { latitude: 31.227100, longitude: 121.479780 },
]

function segmentLength(start: Point, end: Point) {
  const latitudeMeters = (end.latitude - start.latitude) * 111320
  const longitudeMeters = (end.longitude - start.longitude) * 111320 * Math.cos(start.latitude * Math.PI / 180)
  return Math.hypot(latitudeMeters, longitudeMeters)
}

function pointAt(progress: number): Point {
  const lengths = ROUTE.slice(1).map((point, index) => segmentLength(ROUTE[index], point))
  let remaining = lengths.reduce((sum, item) => sum + item, 0) * Math.max(0, Math.min(1, progress))
  for (let index = 0; index < lengths.length; index += 1) {
    if (remaining <= lengths[index]) {
      const ratio = remaining / lengths[index]
      return {
        latitude: ROUTE[index].latitude + (ROUTE[index + 1].latitude - ROUTE[index].latitude) * ratio,
        longitude: ROUTE[index].longitude + (ROUTE[index + 1].longitude - ROUTE[index].longitude) * ratio,
      }
    }
    remaining -= lengths[index]
  }
  return ROUTE[ROUTE.length - 1]
}

const STAGES = ['confirmed', 'preparing', 'pickup', 'delivering', 'arrived'] as const

export default function DeliveryPage() {
  const { params } = useRouter()
  const order = getOrder(params.orderId)
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const timer = setInterval(() => setNow(Date.now()), 500); return () => clearInterval(timer) }, [])
  if (!order) return <View className='page'><View className='empty-state'><Text className='empty-title'>没有找到这笔订单</Text></View></View>
  const restaurant = findRestaurant(order.restaurantId)
  const totalSeconds = order.mode === 'rabbit' ? 30 : 90
  const elapsed = Math.max(0, (now - order.createdAt) / 1000)
  const stageIndex = Math.min(4, Math.floor(elapsed / (totalSeconds / 4)))
  const stage = STAGES[stageIndex]
  const routeProgress = stage === 'pickup' ? 0 : stage === 'delivering' ? Math.min(1, (elapsed - totalSeconds * .75) / (totalSeconds * .25)) : stage === 'arrived' ? 1 : 0
  const riderPoint = pointAt(routeProgress)
  const remaining = Math.max(0, Math.ceil(totalSeconds - elapsed))
  const riderName = order.mode === 'rabbit' ? '兔兔' : '龟龟'
  const copy = {
    confirmed: ['商家已接单', '正在确认订单与备料'],
    preparing: ['商家正在制作', '后厨制作与打包中'],
    pickup: [`${riderName}已到店`, '正在核对订单并取餐'],
    delivering: [`${riderName}正在送来`, '已取餐 · 沿路线配送中'],
    arrived: ['订单已送达', '这次只送达了满足感'],
  }[stage]
  const markers = useMemo<any[]>(() => {
    const base = [
      { id: 1, ...ROUTE[0], iconPath: storeMarker, width: 42, height: 49, anchor: { x: .5, y: .98 }, callout: { content: restaurant.name, display: 'ALWAYS' as const, padding: 8, borderRadius: 8, color: '#20221f', fontSize: 12, bgColor: '#ffffff' } },
      { id: 2, ...ROUTE[ROUTE.length - 1], iconPath: homeMarker, width: 42, height: 49, anchor: { x: .5, y: .98 }, callout: { content: '送达地址', display: 'ALWAYS' as const, padding: 8, borderRadius: 8, color: '#20221f', fontSize: 12, bgColor: '#ffffff' } },
    ]
    return stageIndex >= 2 ? [...base, { id: 3, ...riderPoint, iconPath: order.mode === 'rabbit' ? rabbitMap : turtleMap, width: 54, height: 54 }] : base
  }, [order.mode, restaurant.name, riderPoint.latitude, riderPoint.longitude, stageIndex])
  return <View className='page delivery-page'>
    <PageHeader title='配送进度' />
    <Map className='delivery-map' latitude={31.22810} longitude={121.47730} scale={16} markers={markers} polyline={[{ points: ROUTE, color: '#146B55', width: 7, borderColor: '#ffffff', borderWidth: 3 }]} includePoints={VIEW_POINTS} showLocation={false} enableRotate={false} enableScroll={false} enableZoom={false} onError={() => {}} />
    <View className='tracking-card'>
      <View className='tracking-handle' />
      <View className='tracking-title'><View><Text>{copy[1]}</Text><Text>{copy[0]}</Text></View>{stageIndex >= 2 && <Image src={order.mode === 'rabbit' ? rabbit : turtle} />}</View>
      <View className='timeline'>{['商家接单', '商家制作', '骑手取餐', '配送中', '已送达'].map((label, index) => <View className={`${index < stageIndex ? 'done' : ''} ${index === stageIndex ? 'current' : ''}`} key={label}><Text>{index < stageIndex ? '✓' : index === stageIndex ? '●' : ''}</Text><Text>{label}</Text></View>)}</View>
      {stageIndex < 2 ? <View className='party-card'><Image src={restaurant.image} mode='aspectFill' /><View><Text>商家</Text><Text>{restaurant.name}</Text><Text>{stage === 'confirmed' ? '已接单 · 即将开始制作' : '制作中 · 正在打包餐品'}</Text></View><Text>🏪</Text></View> : <View className='party-card'><Image src={order.mode === 'rabbit' ? rabbit : turtle} /><View><Text>配送员</Text><Text>{riderName}</Text><Text>{stage === 'pickup' ? '已到店 · 正在取餐' : stage === 'delivering' ? '已取餐 · 沿路线配送中' : '已抵达送达地址'}</Text></View><Text>💬</Text></View>}
      <View className='tracking-meta'><Text>⏱️ {stage === 'arrived' ? '已到达' : `模拟剩余约 ${remaining} 秒`}</Text><Text>🧭 {restaurant.distance}</Text></View>
      {stage === 'arrived' ? <View className='primary-button' onClick={() => Taro.redirectTo({ url: `/package-food/pages/result/index?orderId=${order.id}` })}>查看本次节省</View> : <Text className='tracking-note'>状态会自动更新 · 总流程约 {totalSeconds} 秒</Text>}
    </View>
  </View>
}
