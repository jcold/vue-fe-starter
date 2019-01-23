import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import http from '@/base/http'
Vue.prototype.$http = http
Vue.prototype.$global_router = router
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
