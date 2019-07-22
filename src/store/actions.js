import {reqHome} from '../api'

export default{
  
 async getHom({commit}){
   const result = await reqHome()
   
   if(result.status===200){
     commit('getHome', result.data.data)
     console.log(result.data.data)
   }

  }

}

