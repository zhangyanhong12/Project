import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'films',
    component: ()=>import('../views/Films.vue'),
    children:[
      {
        path:"nowPlaying",
        component:()=>import('../views/NewPlaying.vue')
      },{
        path:"comingSoon",
        component:()=>import('../views/ComingSoon.vue')
      }
    ]
  },
  {
    path:"/film/:id",
    name:"film",
    component:()=>import('../views/film.vue')
  },{
    path:"/city",
    name:"city",
    component:()=>import('../views/City.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/',
    redirect:"/films/nowPlaying"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
