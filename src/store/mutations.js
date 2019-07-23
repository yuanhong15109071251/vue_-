import {GET} from './mutations-types'
export default{
 [GET](state,a){
    // console.log('2')
    state.a=a
   
  },
  // get1(state,data){
  //   state.data=data
  // }
  getFound(state,found){
    state.found=found
  },
  getFound1(state,found1){
    state.found1=found1
  }

}