### learn-vue_router
- 页面改变但是不刷新
  + location.hash
我们设置一个前端路由，当页面的URL改变的时候，他不会进行刷新，它里面有一个路由的映射，然后
它从路由的映射里面来找当前的URL所对应的组件，
它会把这个组件取出来并且放到整个网页上面进行渲染
  + history.pushState() 
  + history.replaceState()：是替换之前的URL，没有返回按钮


### vue-router
  + 路由覆盖产生的问题

### keep-alive
场景如下：我们点击首页并且查看下面的信息，然后点击了用户界面，然后点击返回首页，发现显示的并不是我们之前看到首页信息界面，这是因为每次点击切换组件时他都是重新创建/销毁新的组件；通过keep-alive包裹的组件会缓存

- 复习生命周期函数
  + 创建前后：beforecreate/created
  + 挂载前后：beforeMount/mounted
  + 更新前后：beforeUpdate/updated
  + 销毁前后：beforeDestory/destroyed