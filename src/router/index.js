import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Blog from '@/components/blog/Blog'
import FourZeroFour from '@/components/FourZeroFour'
import Contact from '@/components/Contact'
import CV from '@/components/CV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '*',
      name: 'FourZeroFour',
      component: FourZeroFour
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
