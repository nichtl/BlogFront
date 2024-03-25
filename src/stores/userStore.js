// Utilities
import { defineStore } from 'pinia'

export const  useUserStore = defineStore('userStore', {
  state: () => ({
    token:'',
    loginState:false,
    userInfo:{},
  }),
  getters:{
    getUserInfo(state){
      return state.userInfo;
    },
    getToken(state){
      return state.token;
    },
    getLoginState(state){
      return state.loginState;
    }
  },
  actions: {
      setToken(token){
         this.token = token
      },
      setLoginState(state){
         this.loginState = state
      },
      setUserInfo(userInfo){
        this.userInfo = userInfo
      }
  }
})
