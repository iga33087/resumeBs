import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/chartList',
    name: 'chartList',
    meta:{
      title:"聊天室",
      icon:"el-icon-chat-dot-square",
      show:true
    },
    component: () => import('../views/chartList.vue'),
    children:[]
  },
  {
    path: '/viewList',
    name: 'viewList',
    meta:{
      title:"來訪查看",
      icon:"el-icon-tickets",
      show:true
    },
    component: () => import('../views/viewList.vue'),
    children:[]
  },
  {
    path: '/resumeEdit',
    name: 'resumeEdit',
    meta:{
      title:"履歷編輯",
      icon:"el-icon-edit-outline",
      show:true
    },
    component: () => import('../views/resumeEdit.vue'),
    children:[]
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      title:"登入",
      icon:"",
      show:true
    },
    component: () => import('../views/login.vue'),
    children:[]
  },
  { path: '*', redirect: '/viewList',
    meta:{
      show:false
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
