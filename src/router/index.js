/**路由器对象模块 */
//引入Vue
import Vue from 'vue'
//引入路由器
import VueRouter from 'vue-router'

//引入路由
import CateList from '../pages/CateList/CateList.vue'
import Login from '../pages/Login/Login.vue'
import Discover from '../pages/Discover/discover.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Home from '../pages/Home/Home.vue'
//声明使用路由器
Vue.use(VueRouter)
//new出来一个路由器对象   传递一个对象 配置对象
export default  new VueRouter({
  mode:'history',
//配置应用中所有路由
routes:[
  {
    path:'/cateList',
    component:CateList
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/discover',
    component:Discover
  },
  {
    path:'/shoppingCart',
    component:ShoppingCart
  },
  {
    path:'/home',
    component:Home
  },
  {
    path: '/', // 项目根路径
    redirect: '/home'
  }
]
//
})
