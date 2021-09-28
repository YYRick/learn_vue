<template>
  <div id="app">
    <h2>-------------APP内容--------------</h2>
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>----------------App内容：getters相关信息---------------</h2>
    <h2>平方：{{$store.getters.powerCounter}}</h2>
    <h2>年龄大于二十岁的有：{{$store.getters.more20stu}}</h2>
    <h2>年龄大于二十岁的人数：{{$store.getters.more20stuLength}}个人</h2>
    <h2>{{$store.getters.moreAgeStu(24)}}</h2>
    <!-- 接收传递的数据 -->
    <hello-vuex :counter="counter"></hello-vuex>
  </div>
</template>

<script>
   import HelloVuex from './components/HelloVuex.vue'
   export default {
     name: 'App',
     components:{
       HelloVuex
     },
     data(){
       return {
          message: '我是App组件',
          counter: 0
       }
     },
     /* computed: {
        more20stu(){
           return this.$store.state.students.filter(s => s.age >= 20)
        }
     }, */
     methods:{
       addition(){
         this.$store.commit('increment');
       },
       subtraction(){
         this.$store.commit('decrement');
       }
     }
   }
</script>

<style>

</style>
