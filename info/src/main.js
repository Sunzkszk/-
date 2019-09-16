import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'  //多语言
import axios from 'axios'    
Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
