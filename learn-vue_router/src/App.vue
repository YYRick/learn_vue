<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- router-link默认渲染成a标签
          + to：用于指定要跳转的路径
          + tag：指定router-link要渲染成什么标签
          + replace：改成replaceState模式
     -->
   <!--  <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click='aboutClick'>关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  /* 通过代码的方式实现路由跳转 */
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
  .router-link-active{
    color: red;
  }
</style>
