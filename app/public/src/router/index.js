import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Index'
import Login from '@/components/login'
import Register from '@/components/Register'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/article',
      name: 'register',
      component: Article
    }
  ]
})
