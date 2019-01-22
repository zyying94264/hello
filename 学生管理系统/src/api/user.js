import { post,get } from '@/libs/axios'
export const login = (params) => {
    return post('/login',params)
}
export const register = (params) => {
    return post('/user/addUser',params)
}
// export const getUserInfo = (token) => {
//     return axios.request({
//       url: 'get_info',
//       params: {
//         token
//       },
//       method: 'get'
//     })
// }
// export const logout = (params) => {
//     return post('logout',params)   
// }