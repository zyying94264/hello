import {login,getUserInfo} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
    state:{
        username: '',
        userId: '',
        avatorImgPath: '',
        hasGetInfo:false,
        token: getToken(),
    },
    mutations: {
        setAvator (state, avatorPath) {
            state.avatorImgPath = avatorPath
        },
        setUserId (state, id) {
            state.userId = id
        },
        setUserName (state, name) {
            state.username = name
        },
        setHasGetInfo (state, status) {
            state.hasGetInfo = status
        },
        setToken (state, token) {
            state.token = token
            setToken(token)
        },
    },
    actions:{
        // handleLogin ({ commit }, {username, password}) {
        //     // username = username.trim()
        //     return new Promise((resolve, reject) => {
        //       login({
        //         username,
        //         password
        //       }).then(res => {
        //         const data = res.data
        //         commit('setToken', data.token)
        //         resolve()
        //       }).catch(err => {
        //         reject(err)
        //       })
        //     })
        //   },
        handleLogOut ({ state, commit }) {
            return new Promise((resolve, reject) => {
              logout(state.token).then(() => {
                commit('setToken', '')
                resolve()
              }).catch(err => {
                reject(err)
              })
            })
          },
        // getUserInfo ({ state, commit }) {
        //     return new Promise((resolve, reject) => {
        //       try {
        //         getUserInfo(state.token).then(res => {
        //           const data = res.data
        //           commit('setAvator', data.avator)
        //           commit('setUserName', data.name)
        //           commit('setUserId', data.user_id)
        //           commit('setHasGetInfo', true)
        //           resolve(data)
        //         }).catch(err => {
        //           reject(err)
        //         })
        //       } catch (error) {
        //         reject(error)
        //       }
        //     })
        //   },

    },
}