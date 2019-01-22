import axios from 'axios'
import store from '@/store'
import { baseURL }  from '@/libs/config'
import { Message } from 'iview'

// axios.defaults.baseURL = baseUrl
// axios.defaults.baseURL = "https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/"
axios.defaults.baseURL = "http://192.168.4.223:8080/"


export function get(url,prarms){
  return new Promise((resolve,reject) => {
    axios.get(url,{prarms})
    .then(res => {
      resolve(res)
    })
    .catch(err =>{

    })
  })
}
export function post(url,prarms){
  return new Promise((resolve,reject) => {
    axios.post(url,prarms,{
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res => resolve(res))
    .catch(err =>{
        Message.info({
        content: '信息错误',
        // duration: 10,
        // closable: true
    });
    })
  })
}

// const addErrorLog = errorInfo => {
//   const { statusText, status, request: { responseURL } } = errorInfo
//   let info = {
//     type: 'ajax',
//     code: status,
//     mes: statusText,
//     url: responseURL
//   }
//   if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
// }

// class HttpRequest {
  // constructor (baseUrl = baseURL) {
  //   this.baseUrl = baseUrl
  //   this.queue = {}
  // }
  // getInsideConfig () {
  //   const config = {
  //     baseURL: this.baseUrl,
  //     headers: {
  //       //
  //     }
  //   }
  //   return config
  // }
  // destroy (url) {
  //   delete this.queue[url]
  //   if (!Object.keys(this.queue).length) {
  //     // Spin.hide()
  //   }
  // }
  // interceptors (instance, url) {
  //   // 请求拦截
  //   instance.interceptors.request.use(config => {
  //     // 添加全局的loading...
  //     if (!Object.keys(this.queue).length) {
  //       // Spin.show() // 不建议开启，因为界面不友好
  //     }
  //     this.queue[url] = true
  //     return config
  //   }, error => {
  //     return Promise.reject(error)
  //   })
  //   // 响应拦截
  //   instance.interceptors.response.use(res => {
  //     this.destroy(url)
  //     const { data, status} = res
  //     return { data, status }
  //   }, error => {
  //     this.destroy(url)
  //     let errorInfo = error.response
  //     if (!errorInfo) {
  //       const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
  //       errorInfo = {
  //         statusText,
  //         status,
  //         request: { responseURL: config.url }
  //       }
  //     }
  //     addErrorLog(errorInfo)
  //     return Promise.reject(error)
  //   })
  // }
  // request (options) {
  //   const instance = axios.create()
  //   options = Object.assign(this.getInsideConfig(), options)
  //   this.interceptors(instance, options.url)
  //   return instance(options)
  // }
// }
// export default HttpRequest