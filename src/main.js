import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import LaListeDesRestaurants from './components/LaListeDesRestaurants.vue'
import Menu from './components/Menu.vue'
import RestaurantDetail from './components/RestaurantDetail.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.config.productionTip = false

//on définit les routers

const router =  new VueRouter({
  routes: [
    {
      path: '/detail/:id',
      component: RestaurantDetail,
    },
  {
    path: '/restaurant',
    component: LaListeDesRestaurants,
  },
  
  {
    path: '/',
    component: Menu
  }
],
node: 'history'

    
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
