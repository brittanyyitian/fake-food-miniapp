import Taro from '@tarojs/taro'
import type { CartItem, Dish, RiderMode, StoredOrder } from '../types'

const KEYS = {
  cart: 'fake-food-cart-v1',
  favorites: 'fake-food-favorites-v1',
  dishFavorites: 'fake-food-dish-favorites-v1',
  dishFavoriteItems: 'fake-food-dish-favorite-items-v1',
  orders: 'fake-food-orders-v1',
  mode: 'fake-food-mode-v1',
}

const normalizeLegacyImage = (image: string) => image
  .replace(/^\/?assets\/food\//, '/package-food/assets/food/')
  .replace(/\.webp$/, '.jpg')
const normalizeDish = <T extends Dish>(item: T): T => ({ ...item, image: normalizeLegacyImage(item.image) })

export const getCart = (): CartItem[] => (Taro.getStorageSync(KEYS.cart) || []).map(normalizeDish)
export const saveCart = (items: CartItem[]) => Taro.setStorageSync(KEYS.cart, items)
export const clearCart = () => Taro.removeStorageSync(KEYS.cart)
export const cartCount = (items = getCart()) => items.reduce((sum, item) => sum + item.quantity, 0)
export const cartAmount = (items = getCart()) => items.reduce((sum, item) => sum + item.price * item.quantity, 0)
export const cartCalories = (items = getCart()) => items.reduce((sum, item) => sum + item.calories * item.quantity, 0)

export const getFavorites = (): string[] => Taro.getStorageSync(KEYS.favorites) || []
export function toggleFavorite(id: string) {
  const current = getFavorites()
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  Taro.setStorageSync(KEYS.favorites, next)
  return next
}

export const getDishFavorites = (): string[] => Taro.getStorageSync(KEYS.dishFavorites) || []
export const getDishFavoriteItems = (): Dish[] => (Taro.getStorageSync(KEYS.dishFavoriteItems) || []).map(normalizeDish)
export function toggleDishFavorite(input: string | Dish) {
  const id = typeof input === 'string' ? input : input.id
  const current = getDishFavorites()
  const removing = current.includes(id)
  const next = removing ? current.filter((item) => item !== id) : [...current, id]
  const savedItems = getDishFavoriteItems()
  const nextItems = removing
    ? savedItems.filter((item) => item.id !== id)
    : typeof input === 'string' || savedItems.some((item) => item.id === id) ? savedItems : [...savedItems, input]
  Taro.setStorageSync(KEYS.dishFavorites, next)
  Taro.setStorageSync(KEYS.dishFavoriteItems, nextItems)
  return next
}

export const getMode = (): RiderMode => Taro.getStorageSync(KEYS.mode) || 'rabbit'
export const saveMode = (mode: RiderMode) => Taro.setStorageSync(KEYS.mode, mode)

const readOrders = (): StoredOrder[] => (Taro.getStorageSync(KEYS.orders) || []).map((order: StoredOrder) => ({
  ...order,
  items: order.items.map(normalizeDish),
}))

function expectedCompletedAt(order: StoredOrder) {
  return order.createdAt + (order.mode === 'rabbit' ? 30 : 90) * 1000
}

function orderSignature(order: Pick<StoredOrder, 'restaurantId' | 'items' | 'mode' | 'address' | 'note'>) {
  const items = order.items.map((item) => `${item.lineId}:${item.quantity}:${item.price}:${item.calories}`).sort().join('|')
  return `${order.restaurantId}::${order.mode}::${order.address}::${order.note}::${items}`
}

export function getOrders(): StoredOrder[] {
  const stored = readOrders()
  const now = Date.now()
  let changed = false
  const deduplicated: StoredOrder[] = []
  stored.forEach((order) => {
    const duplicate = deduplicated.some((candidate) => Math.abs(candidate.createdAt - order.createdAt) <= 3000 && orderSignature(candidate) === orderSignature(order))
    if (duplicate) changed = true
    else deduplicated.push(order)
  })
  const normalized = deduplicated.map((order) => {
    if (order.completedAt || now < expectedCompletedAt(order)) return order
    changed = true
    return { ...order, completedAt: expectedCompletedAt(order) }
  })
  if (changed) Taro.setStorageSync(KEYS.orders, normalized)
  return normalized
}

export function createOrder(input: Omit<StoredOrder, 'id' | 'createdAt' | 'completedAt'>) {
  const now = Date.now()
  const orders = getOrders()
  const duplicate = orders.find((order) => now - order.createdAt >= 0 && now - order.createdAt <= 3000 && orderSignature(order) === orderSignature(input))
  if (duplicate) return duplicate
  const order: StoredOrder = { ...input, id: `order-${now}`, createdAt: now }
  Taro.setStorageSync(KEYS.orders, [order, ...orders])
  return order
}
export const getOrder = (id?: string) => getOrders().find((item) => item.id === id)
export function completeOrder(id: string) {
  const next = getOrders().map((item) => item.id === id ? { ...item, completedAt: item.completedAt || Date.now() } : item)
  Taro.setStorageSync(KEYS.orders, next)
}
