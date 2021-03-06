import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register';
import Login from '@/components/Login';
import Me from '@/components/Me';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
