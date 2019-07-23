import {reqSearch,reqSearch1,reqFound,reqFound1} from '../api'

export default {

  //搜索的异步处理
 async getSearch({commit}){
    const result=  await reqSearch()
    // console.log(result);
    
    if(result.status===200){
      console.log('进来了');
      commit('get',result.data)
      
    }
  },
  // async getSearch1({commit}){
  //   const result=  await reqSearch1()
  //   // console.log(result)
  //   if(result.status===200){
  //     commit('get1',result.data)
  //     // console.log(result.data);
  //   }
  // }
  async getFound({commit}){
    const result=  await reqFound()
    // console.log(result.data);
    
    if(result.status===200){
      // console.log(2);
      commit('getFound',result.data)
      
    }
  },
  async getFound1({commit}){
    const result=  await reqFound1()
    console.log('下面',result.data.data);
    
    if(result.status===200){
      console.log(2);
      commit('getFound1',result.data.data)
      
    }
  },
  
}