import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: require('@/pages/dashboard').default,
      meta: {
        roles: ['admin', 'user']
      }
    },
    {
      path: '/departList',
      name: 'departList',
      component: require('@/pages/departList').default,
      meta: {
        roles: ['admin', 'user']
      }
    },
    {
      path: '/driverList',
      name: 'DriverList',
      component: require('@/pages/driverList').default,
      meta: {
        roles: ['admin', 'user']
      }
    },
    {
      path: '/largeHandcart',
      name: 'LargeHandcart',
      component: require('@/pages/largeHandcart').default,
      meta: {
        roles: ['admin']
      }
    },
    {
      path: '/smallHandcart',
      name: 'SmallHandcart',
      component: require('@/pages/smallHandcart').default,
      meta: {
        roles: ['admin']
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/pages/user/login').default
    }
  ]
})
