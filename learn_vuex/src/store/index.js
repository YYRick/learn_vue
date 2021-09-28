import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象并导出store
export default new Vuex.Store({
  //保存状态
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'coderwhy', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10}
    ]
  },
  //同步操作至少要经过mutations进行修改
  mutations: {
    //写方法
    //state：vuex自动设置的参数，代表当前的状态
    increment(state){
       state.counter++;
    },
    decrement(state){
       state.counter--;
    },
    incrementCount(state, count){
       state.counter += count
    },
    addStudent(state, stu){
       state.students.push(stu)
    }
  },
  //异步操作要经过actions修改
  actions: {
  },
  //类似于计算属性
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength(state, getters){
       return getters.more20stu.length;
    },
    moreAgeStu(state){
       return age => state.students.filter(s => s.age > age)
    }
  },
  modules: {
  }
})
