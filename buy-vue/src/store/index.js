import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function getCity(){
  let defaultCity="武汉";
  if(localStorage.getItem('city')){
    defaultCity=localStorage.getItem("city")
  }
  return defaultCity;
}
export default new Vuex.Store({
  state: {
    isLoading:true,
    city:getCity()
  },
  mutations: {
    changeCity(state,city){
      state.city=city
    }
  },
  actions: {
    changeCity(ctx,city){
      ctx.commit("changeCity",city)
    }
  },
  modules: {
  }
})
