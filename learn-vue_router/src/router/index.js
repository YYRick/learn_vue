//配置路由相关的信息
//导入路由
import VueRouter from "vue-router";
import Vue from "vue";

import Home from '../components/Home.vue'
import About from '../components/About.vue'

//1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

//抽离映射关系
const routes = [
    //一个映射关系就是一个对象
    //设置路由默认值
    {
       path: '',
       redirect: '/home'
    },
    {
       path: "/home",
       component: Home
    },
    {
       path: "/about",
       component: About
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

//3.将router对象传入到vue实例中
//导出router
export default router