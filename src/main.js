import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'zingchart/es6';
import zingchartVue from 'zingchart-vue';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)



Vue.component('zingchart', zingchartVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
