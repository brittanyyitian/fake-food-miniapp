# 想象外卖 · 微信小程序

这是从 `fake-food-miniapp-prototype` 迁移出的 Taro 4 + React + TypeScript 微信小程序。它不是 WebView 包壳：页面路由、输入、缓存、原生地图、标记和路线都使用小程序能力。

## 已实现

- 10 家虚拟餐厅、50 道独立菜品和真实食物照片
- 搜索、分类、餐厅与菜品收藏、本地持久化
- 不同菜系的规格、口味、加料、动态金额与热量
- 购物车数量联动、地址和备注、模拟支付 ¥0
- 兔兔 30 秒 / 龟龟 90 秒两种配送节奏
- 商家接单、制作、取餐、路线配送、送达和节省结果
- 订单、收藏、我的四个可用主页面

## 在微信开发者工具中运行

1. 安装依赖：`npm install`
2. 开发构建：`npm run dev:weapp`
3. 在微信开发者工具中导入本目录 `/Users/edy/fake-food-miniapp`
4. 开发者工具会读取 `project.config.json`，小程序目录是 `dist`

当前 `appid` 是 `touristappid`，可直接本地预览。准备真机预览或发布时，把 `project.config.json` 的 `appid` 替换为你在微信公众平台注册的小程序 AppID。

## 验证

```bash
npm run check:runtime
npm run build:weapp
```

小程序主包构建后约 1.8 MB。配送路线使用固定虚拟坐标，不申请用户真实定位权限，也不会产生真实订单、支付或配送。
