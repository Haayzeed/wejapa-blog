import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VuePaginate from 'vue-paginate'
import blogs from './components/blogs'
import viewBlogs from './components/viewBlogs'
import '@/assets/css/bootstrap.css'
import '@/assets/css/style.css'


Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VuePaginate)

// const axios = require('axios');
const routes = [
  {
    name: 'blogs',
    path: '/',
    component: blogs
  },
  {
    name: 'viewBlogs',
    path: '/viewBlogs/:id',
    component: viewBlogs
  }
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
