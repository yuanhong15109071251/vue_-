  //引入vue
import Vue from 'vue'
  //引入vuex
 import Vuex from 'vuex' 

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import home from './modules/home'
import found from './modules/found'
import cateList from './modules/cateList'
 //声明使用插件

 Vue.use(Vuex)
//配置


 export default new Vuex.Store({
   state,//放date中的数据
   mutations,//作用：用来直接修改state中的状态数据的，包含多个方法的对象
   actions,//用来间接修改状态数据的   包含多个方法的对象
   getters, //用来获取状态数据的getter方法  计算属性中所有的get方法computed  是个对象
   modules:{
     home:home,
     found:found,
     cateList:cateList
   }
 })
