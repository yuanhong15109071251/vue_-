import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import DiscoverHeader from './components/DiscoverHeader/DiscoverHeader.vue'
import  './mock/mock-server'
import VeeValidate from 'vee-validate'
Vue.config.productionTip = false
Vue.component('DiscoverHeader',DiscoverHeader)
Vue.use(VeeValidate,{
  local:'zh_CN',
  delay:'1000',
  events:'blur'
})
new Vue({
  el:'#app',
  render: h => h(App),
  router ,//配置路由器 路由才能使用
  DiscoverHeader,
  store
})
