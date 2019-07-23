import ajax from './ajax'
export const  reqHome =()=>ajax('/home')
export const reqCateList=()=>ajax('/cateList')
// export const reqFound=()=>ajax('/found')
export const reqSearch=()=>ajax('/cnm/xhr/search/init.json')
export const reqSearch1=(keywordPrefix)=>ajax.post('/cnm/xhr/search/searchAutoComplete.json',{keywordPrefix}) 
export const reqFound=()=>ajax('/cnm/topic/v1/find/getTabs.json')
export const reqFound1=()=>ajax('/cnm/topic/v1/find/recManual.json')
