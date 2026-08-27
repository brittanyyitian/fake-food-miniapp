import { useMemo, useState } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import PageHeader from '../../../components/PageHeader'
import { dishOptions, findDish, findRestaurant } from '../../data/restaurants'
import { getCart, saveCart } from '../../../store'

export default function CustomizePage() {
  const { params } = useRouter()
  const dish = findDish(params.restaurantId, params.dishId)
  const config = dishOptions(dish)
  const [size, setSize] = useState(config.sizes[0].label)
  const [flavor, setFlavor] = useState(config.flavors[0].label)
  const [extras, setExtras] = useState<string[]>([])
  const totals = useMemo(() => {
    const choices = [config.sizes.find((item) => item.label === size), config.flavors.find((item) => item.label === flavor), ...config.extras.filter((item) => extras.includes(item.label))]
    return { price: dish.price + choices.reduce((sum, item) => sum + (item ? item.price || 0 : 0), 0), calories: Math.max(0, dish.calories + choices.reduce((sum, item) => sum + (item ? item.calories || 0 : 0), 0)) }
  }, [config, dish, extras, flavor, size])
  const toggleExtra = (label: string) => setExtras((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label])
  const add = async () => {
    const options = [size, flavor, ...extras].join(' · ')
    const lineId = `${dish.id}-${options}`
    const cart = getCart()
    let baseCart = cart
    if (cart.length && cart[0].restaurantId !== dish.restaurantId) {
      const currentStore = findRestaurant(cart[0].restaurantId)
      const result = await Taro.showModal({
        title: '更换餐厅？',
        content: `购物车里已有「${currentStore.name}」的商品。清空后再加入这家餐厅吗？`,
        confirmText: '清空加入',
        cancelText: '先不添加',
      })
      if (!result.confirm) return
      baseCart = []
    }
    const next = baseCart.some((item) => item.lineId === lineId)
      ? baseCart.map((item) => item.lineId === lineId ? { ...item, quantity: item.quantity + 1 } : item)
      : [...baseCart, { ...dish, lineId, options, price: totals.price, calories: totals.calories, quantity: 1 }]
    saveCart(next)
    Taro.showToast({ title: '已加入购物车', icon: 'success', duration: 900 })
    setTimeout(() => Taro.navigateBack(), 450)
  }
  const group = (title: string, items: typeof config.sizes, selected: string | string[], onSelect: (label: string) => void, square = false) => <View className='option-group'><View className='option-title'><Text>{title}</Text><Text>{square ? '可多选' : '必选'}</Text></View>{items.map((item) => { const checked = Array.isArray(selected) ? selected.includes(item.label) : selected === item.label; return <View className='choice-row' key={item.label} onClick={() => onSelect(item.label)}><Text className={`${square ? 'checkbox' : 'radio'} ${checked ? 'checked' : ''}`}>{checked ? '✓' : ''}</Text><Text className='choice-label'>{item.label}</Text><Text className='choice-detail'>{item.price ? `+¥${item.price}` : ''}{item.calories ? ` · ${item.calories > 0 ? '+' : ''}${item.calories} kcal` : ''}</Text></View> })}</View>
  return <View className='page with-header'>
    <PageHeader title='选择规格' />
    <ScrollView scrollY className='page-scroll customize-scroll' enhanced showScrollbar={false}>
      <Image className='customize-image' src={dish.image} mode='aspectFill' />
      <View className='customize-title'><Text className='h1'>{dish.name}</Text><Text className='body-copy'>{dish.note}</Text><View><Text className='price large'>¥{dish.price}</Text><Text className='calorie'>当前约 {totals.calories} kcal</Text></View></View>
      {group(config.sizeTitle, config.sizes, size, setSize)}
      {group(config.flavorTitle, config.flavors, flavor, setFlavor)}
      {group(config.extrasTitle, config.extras, extras, toggleExtra, true)}
    </ScrollView>
    <View className='fixed-footer white'><View className='primary-button split' onClick={add}><Text>加入购物车</Text><Text>¥{totals.price} · {totals.calories} kcal</Text></View></View>
  </View>
}
