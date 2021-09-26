<template>
<div>
    <h2>我是用户界面</h2>
    <p>我是用户界面，嘿嘿嘿</p>
    <p>{{userId}}</p>
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
</div>
</template>

<script>

export default {
   name: "User",
   computed: {
      userId(){
         return this.$route.params.userId
      }
   },
   methods: {
      btnClick(){
         /*这里的$router就是main.js中的router，
           也就是index.js里面定义的VueRouter对象
         */
         console.log(this.$router);
         /* 这里的$route就是你在index.js中配置的user路由 */
         console.log(this.$route);
      }
   },
  /*  created(){
      console.log('created');
      document.title = '用户'
   } */
}

</script>
<style  scoped>

</style>