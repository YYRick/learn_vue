<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- router-link默认渲染成a标签
          + to：用于指定要跳转的路径
          + tag：指定router-link要渲染成什么标签
          + replace：改成replaceState模式
     -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!-- 动态绑路由 -->
    <!-- <router-link :to="'/user/'+userid" tag="button" replace>用户界面</router-link> -->
    <!-- 路由传参 -->
<!--     <router-link :to="{path: '/profile', query:{name: 'coderwhy', age: '18', height: 1.88}}" 
                 tag="button" replace>档案</router-link> -->
   <!--  <button @click="homeClick">首页</button>
    <button @click='aboutClick'>关于</button> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile">
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
     return {
        userid: 'zhangsan'
     }
  },
  /* 通过代码的方式实现路由跳转 */
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    userClick(){
      this.$router.push('/user/'+ this.userid).catch(err => err)
    },
    profileClick(){
      this.$router.push({
         path: '/profile',
         query: {
           name: 'coderwhy',
           age: 18,
           height: 1.88
         }
      }).catch(err => err)
    }
  }
}
</script>

<style>
  .router-link-active{
    color: red;
  }
</style>
