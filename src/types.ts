export type RiderMode = 'rabbit' | 'turtle'

export type Dish = {
  id: string
  restaurantId: string
  name: string
  note: string
  price: number
  calories: number
  image: string
  category: string
  popular?: boolean
}

export type Restaurant = {
  id: string
  name: string
  tags: string[]
  cuisine: string
  rating: number
  reviews: number
  eta: string
  fee: string
  distance: string
  image: string
  description: string
  notice: string
  dishes: Dish[]
}

export type OptionChoice = { label: string; price?: number; calories?: number }
export type DishOptions = {
  sizeTitle: string
  sizes: OptionChoice[]
  flavorTitle: string
  flavors: OptionChoice[]
  extrasTitle: string
  extras: OptionChoice[]
}

export type CartItem = Dish & {
  lineId: string
  quantity: number
  options: string
}

export type StoredOrder = {
  id: string
  restaurantId: string
  items: CartItem[]
  mode: RiderMode
  address: string
  note: string
  createdAt: number
  completedAt?: number
}
