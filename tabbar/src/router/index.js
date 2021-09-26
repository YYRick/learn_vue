import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载导入
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

//抽离路由配置
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
  
]

//2.创建VueRouter对象
const router = new VueRouter({
    //配置路由和组件之间的映射关系
    routes,
    /* 
      默认是hash模式，但是感觉不好看：前面有个#符号
      改成history模式，它使用的是history中的pushState
    */
    mode: 'history'
})

//导出router
export default router
