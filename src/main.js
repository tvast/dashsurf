// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router

import VueRouter from 'vue-router'
//tell vue to use the router

import BootstrapVue from 'bootstrap-vue'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter)

Vue.use(BootstrapVue)

//import the hello component
import Hello from './components/Hello'
//define your routes
import About from './components/About'
import Portfolio from './components/Portfolio'
import Card from './components/Card';
//define your routes
const routes = [
//route for the home route of the web page
{ path: '/', component: Hello },
//route for the about route of the web page
{ path: '/about', component: About },
{ path: '/portfolio', component: Portfolio }
]
// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
