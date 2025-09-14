// vue的入口文件main.js

// 导入Vue核心API
import { createApp } from 'vue'
// 导入全局样式
import './style.css'
// 导入根组件
import App from './App.vue'
// 导入路由实例
import router from './router'
// 导入组件库实例
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// 创建Vue应用实例
// createApp(App).mount('#app')

// 一分为二
const app = createApp(App)
// 注册路由插件：将路由能力注入Vue实例
app.use(router)
// 注册组件库：将路由能力注入Vue实例
app.use(ElementPlus)
// 挂载应用到DOM
app.mount('#app')

