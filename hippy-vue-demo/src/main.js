import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './routes';
import axios from 'axios'
Vue.config.productionTip = false;
Vue.prototype.axios=axios
Vue.use(VueRouter);
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)
const router = new VueRouter(routes);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
