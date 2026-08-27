export default defineAppConfig({
  lazyCodeLoading: 'requiredComponents',
  pages: [
    'pages/home/index',
    'pages/orders/index',
    'pages/favorites/index',
    'pages/profile/index'
  ],
  subpackages: [
    {
      root: 'package-food',
      pages: [
        'pages/restaurant/index',
        'pages/customize/index',
        'pages/cart/index',
        'pages/checkout/index',
        'pages/delivery/index',
        'pages/result/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationStyle: 'custom',
    backgroundColor: '#ffffff',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '今晚吃点什么',
    navigationBarTextStyle: 'black'
  }
})
