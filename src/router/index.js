import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: require('@/pages/dashboard').default
    },
    {
      path: '/departList',
      name: 'departList',
      component: require('@/pages/departList').default
    },
    {
      path: '/driverList',
      name: 'DriverList',
      component: require('@/pages/driverList').default
    },
    {
      path: '/largeHandcart',
      name: 'LargeHandcart',
      component: require('@/pages/largeHandcart').default
    },
    {
      path: '/smallHandcart',
      name: 'SmallHandcart',
      component: require('@/pages/smallHandcart').default
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/pages/user/login').default
    }
  ]
})
