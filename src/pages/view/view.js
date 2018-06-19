// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './View.vue'
// import router from './router'

Vue.config.productionTip = false

// import './assets/scss/index.scss'
// import '@/modules/flexible.js'


new Vue({
  el: '#view',
  // router,
  components: { App },
  // template: '<App/>'
})
