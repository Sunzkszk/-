import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import mail from './mail'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules : {
    user,
	mail,
  }
})
