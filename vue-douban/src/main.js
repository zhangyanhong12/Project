import Vue from 'vue'
import App from './App.vue'
import wangyiyuan from './wangyiyuan.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
new Vue({
  render:h =>h(wangyiyuan),
}).$mount('#wangyiyuan')