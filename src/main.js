import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false
export const eventBus = new Vue();
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
