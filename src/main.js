import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/style.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use( axios)
new Vue({
  render: h => h(App),
}).$mount('#app')

