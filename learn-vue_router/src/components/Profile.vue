<template>
<div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
</div>
</template>

<script>

export default {
   name: "Profile",
  /*  created(){
      console.log('created');
      document.title = '档案'
   } */
   created(){
      console.log('Profile created');
   },
   /* destroyed：销毁 */
   destroyed(){
      console.log('Profile destroyed');
   },
}

</script>
<style  scoped>

</style>