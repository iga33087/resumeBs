import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chartList',
    name: 'chartList',
    meta:{
      title:"聊天室"
    },
    component: () => import('../views/chartList.vue'),
    children:[
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta:{
          title:"關於"
        },
      },
    ]
  },
  {
    path: '/viewList',
    name: 'viewList',
    meta:{
      title:"來訪查看"
    },
    component: () => import('../views/viewList.vue')
  },
  {
    path: '/resumeEdit',
    name: 'resumeEdit',
    meta:{
      title:"履歷編輯"
    },
    component: () => import('../views/resumeEdit.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
