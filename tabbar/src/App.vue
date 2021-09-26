<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
         <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
         <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
         <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
         <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
         <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
         <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
         <img slot="item-icon" src="./assets/img/tabbar/cart.svg" alt="">
         <img slot="item-icon-active" src="./assets/img/tabbar/cart_active.svg" alt="">
         <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="pink">
         <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
         <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
         <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
   import TabBar from './components/tabbar/TabBar.vue'
   import TabBarItem from './components/tabbar/TabBarItem.vue'

   export default {
     /* 要挂载的对象 */
     name: 'App',
     /* 注册局部组件 */
     components: {
       TabBar,
       TabBarItem
     }
   }
</script>

<style>
  @import './assets/css/base.css'
</style>
