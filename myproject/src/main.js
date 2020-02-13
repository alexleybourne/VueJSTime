import Vue from 'vue'
import App from './App.vue'

// Create Global Filter
Vue.filter('snippet', val => {
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,50)
  return val + '...'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
