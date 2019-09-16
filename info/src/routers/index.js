import Vue from 'vue'
import Router from 'vue-router'
import loginRouter from './Login'
import homeRouter from './Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    loginRouter,
    homeRouter,
    {
      path : '/*',
      redirect : '/home'
    }
  ]
})
