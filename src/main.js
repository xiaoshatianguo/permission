// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './assets/axios'
import storage from './assets/utils/storage'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$storage = storage

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
