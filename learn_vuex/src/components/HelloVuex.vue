<template>
   <div>
      <h2>{{$store.state.counter}}</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
   </div>
</template>

<script>
export default {
  name: "HelloVuex",
  //父传子传递数据
  props: {
     counter: Number
  }
}
</script>

<style>

</style>