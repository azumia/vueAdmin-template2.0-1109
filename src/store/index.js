import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    app,
    user,
    permission
  },
  mutations
})

export default store
