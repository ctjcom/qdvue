import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Details from './views/Details.vue'
import Read from './views/Read.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {path:'/login',component:Login},
    {path:'/details/:id',name:'details',component:Details},
    {path:'/Read/:id',name:'read',component:Read},
  ]
})
