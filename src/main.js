import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(process.env.NODE_ENV);

new Vue({
  el: '#app',
  render: h => h(App)
});
