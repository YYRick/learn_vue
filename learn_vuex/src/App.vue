<template>
  <div id="app">
    <h2>-----------App内容：info对象的内容是否是响应式的------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改名字</button>

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
    <!--  -->

    <h2>---------------App内容：mutations相关信息---------------</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

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
         /* 通过commit可以使用veux中定义好的属性和方法 */
         this.$store.commit('increment');
       },
       subtraction(){
         this.$store.commit('decrement');
       },
       addCount(count){
         //这是一种mutations中的普通的提交风格
         /* this.$store.commit('incrementCount', count) */
         //使用对象方式的提交风格
         this.$store.commit({
            type: 'incrementCount',
            count
         })
       },
       addStudent(){
         const stu = {id: 114, name: 'alan', age: 35}
         this.$store.commit('addStudent', stu)
       },
       updateInfo(){
         this.$store
         .dispatch('aUpdateInfo', "我是携带的信息")
         .then(res => {
           console.log('里面完成了提交');
           console.log(res);
         });
       }
     }
   }
</script>

<style>

</style>
