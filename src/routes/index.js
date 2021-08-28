import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '@/routes/First'
import Second from '@/routes/Second'
import NotFound from '@/routes/NotFound'
import Home from '@/routes/Home'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior() {
    return {
      x: 0, 
      y: 0
    }
  },
  routes: [
    { path: '/', 
      component: Home
    },
    {
      path: '/first',
      component: First
    }, 
    {
      path: '/second',
      component: Second
    }, 
    {
      path: '*',
      component: NotFound
    }
  ]
})