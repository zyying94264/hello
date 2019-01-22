import axios from '@/libs/api.table'
export const tableInfo = () =>{
    return axios.request({
      url: 'mock',
      method: 'get'
    })
}
export const removeData = () =>{
  return axios.request({
    url: 'mock',
    method: 'get'
  })
}