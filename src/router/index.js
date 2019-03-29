import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import parkregistration from '@/components/page/parkregistration'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parkregistration',
      component: parkregistration
    }
  ]
})
