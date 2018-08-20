import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vheader from './components/Vheader.vue'
import Vcontent from './components/Vcontent.vue'
import Vfooter from './components/Vfooter.vue'
import Vmarked from './components/Vmarked.vue'


const router = new VueRouter({
  routes:[
    {path:'/',component:Vheader},
    {path:'/citys',component:Vcontent},
    {path:'/addCity',component:Vfooter},
    {path:'/marked',component:Vmarked},
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
