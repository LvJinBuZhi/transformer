import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import translateForm from '@/components/translateForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'translateForm',
      component: translateForm
    }
  ]
})
