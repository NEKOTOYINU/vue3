// 这是Vue Router的路由配置文件index.js

// 导入Vue Router核心API和路由配置模式
import { createRouter, createWebHashHistory } from 'vue-router'

// 按需导入页面组件
import Layout from '../views/Main.vue'    // 主布局组件
import Login from '../views/login/login.vue' // 登录页组件

// 定义路由规则：路径与组件的映射关系
const routes = [
  {
    path: '/', 
    component: Layout
  },
  {
    path: '/login',
    component: Login
  }
]

// 创建路由实例
const router = createRouter({
  // 路由数据源
  routes,
  // 路由配置模式（三种模式）：
  // 1. createWebHistory(): HTML5 History API（需服务器支持）
  // 2. createWebHashHistory(): URL Hash模式（默认兼容性最佳）
  // 3. createMemoryHistory(): 内存模式（无浏览器URL操作）
  history: createWebHashHistory()
})

// 导出路由实例供外部使用
export default router