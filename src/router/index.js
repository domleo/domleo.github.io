import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Blog from '@/components/blog/Blog'
import FourZeroFour from '@/components/FourZeroFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '*',
      name: 'FourZeroFour',
      component: FourZeroFour
    }
  ]
})
