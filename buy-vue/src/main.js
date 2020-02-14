import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "amfe-flexible/index.js"
import Item from './components/Item.vue'
import FilmItem from './components/FilmItem.vue'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
import { IndexBar, IndexAnchor } from 'vant';
import Vant from 'vant';
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false
Vue.prototype.axios=axios
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.state.isLoading = true;
  return config;
});
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.state.isLoading = false;
  return response;  
});
import { Loading } from 'vant';
Vue.use(Vant);
Vue.use(Loading);
Vue.component('Item',Item)
Vue.component('FilmItem',FilmItem)
Vue.filter('format',function(v){
  if(v.length>10){
    return v.slice(0,55)+"..."
  }
  return v
})
  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
