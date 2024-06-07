// Utilities
import { defineStore } from 'pinia'

export const  useCommonStore = defineStore('commonStore', {
  state: () => ({
    showHome:true
  }),
  getters:{
    getShowHome(state){
      return state.showHome
    }
  },
  actions: {
    changeShowHome(){
      this.showHome  = !this.showHome
    }
  }
})
