import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-TW'
import './assets/css/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import api from './assets/js/api.js'
import $global from './assets/js/global.js'

Vue.use(ElementUI, { locale });
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://resumeback.herokuapp.com',
  vuex: {
    store,
  }
}))

Vue.prototype.$global=$global 
Vue.prototype.$api=api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
