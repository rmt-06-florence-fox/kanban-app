import Vue from 'vue'
import Vuex from 'vuex'
import server from '../config/server.js'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: []
  },
  mutations: {
    setErrors (state, array) {
      state.errors = array
      setTimeout(() => {
        state.errors = []
      }, 2300)
    }
  },
  actions: {
    async login (context, payload) {
      try {
        const { data } = await server({
          url: '/login',
          method: 'post',
          data: payload
        })
        localStorage.setItem('access_token', data.access_token)
        setTimeout(() => {
          router.push('/')
        }, 450)
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          context.commit('setErrors', error.response.data.messages)
          console.log(error.response.data, 'masuk response')
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request, 'masuk request')
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message, 'masuk else')
        }
        // console.log(error.config)
      }
    }
  },
  modules: {
  }
})
