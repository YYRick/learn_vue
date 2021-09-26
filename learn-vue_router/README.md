### learn-vue_router
- 页面改变但是不刷新
  + location.hash
我们设置一个前端路由，当页面的URL改变的时候，他不会进行刷新，它里面有一个路由的映射，然后
它从路由的映射里面来找当前的URL所对应的组件，
它会把这个组件取出来并且放到整个网页上面进行渲染
  + history.pushState() 
  + history.replaceState()：是替换之前的URL，没有返回按钮


### vue-router
  + 路由覆盖产生的问题：