import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import reactiveStorage from 'vue-reactive-storage'
// Set initial values
Vue.use(reactiveStorage, {
  'companyList': []
})

Vue.use(Router)

Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
