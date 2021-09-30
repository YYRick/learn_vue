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
    ],
    /* 验证数据响应式所遵循的规则 */
    info: {
      name: 'coderwhy',
      age: 22,
      height: 1.88
    }
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
    /* incrementCount(state, count){
       state.counter += count
    } */
    incrementCount(state, payload){
       state.counter += payload.count
    },
    addStudent(state, stu){
       state.students.push(stu)
    },
    updateInfo(state){
       state.info.name = 'YYRick';


      //使用setTimeout模拟异步操作
      //不要在mutations进行异步操作，devtool监测不到
      /* setTimeout(()=>{
        state.info.name = 'YYRick';
      }, 1000) */

      //假如我们不是要修改已有的属性而是添加呢？
      // state.info['address'] = '北京',
      //Vue.set：响应式的增加数据
      // Vue.set(state.info, 'address', 'YYRick');
      // delete state.info.age;
      //Vue.delete：响应式的删除数据
      // Vue.delete(state.info, 'age')
      // console.log(state.info);
    }
  },
  //异步操作要经过actions修改
  actions: {
     //异步操作写在这里面
     //默认参数是context
     aUpdateInfo(context, payload){
       return new Promise((resolve, reject) =>{
        setTimeout(()=>{
          context.commit('updateInfo');
          console.log(payload);
          resolve('哈哈哈哈');
        }, 1000)
       })
     }
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
