import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import DiscoverHeader from './components/DiscoverHeader/DiscoverHeader.vue'
import {} from './mock/mock-server'
Vue.config.productionTip = false
Vue.component('DiscoverHeader',DiscoverHeader)
new Vue({
  el:'#app',
  render: h => h(App),
  router ,//配置路由器 路由才能使用
  DiscoverHeader,
  store
})
