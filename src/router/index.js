import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Blog from '@/components/blog/Blog'
import FourZeroFour from '@/components/FourZeroFour'
import Contact from '@/components/Contact'
import AboutMe from '@/components/AboutMe'

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
      path: '/aboutme',
      name: 'About Me',
      component: AboutMe
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
