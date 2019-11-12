import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import RegistrationPage from './views/RegistrationPage.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationPage
    },

    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
