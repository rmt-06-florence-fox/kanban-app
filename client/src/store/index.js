import Vue from 'vue'
import Vuex from 'vuex'
import server from '../config/server.js'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    tasks: [],
    columns: []
  },
  mutations: {
    setErrors (state, array) {
      state.errors = array
      setTimeout(() => { state.errors = [] }, 2300)
    },
    setTasks (state, array) {
      state.tasks = array
    },
    setColumns (state, array) {
      state.columns = array
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
        context.dispatch('fetchTasks')
        setTimeout(() => { router.push('/') }, 450)
      } catch (error) {
        if (error.response) {
          context.commit('setErrors', error.response.data.messages)
        } else {
          console.log('Error', error.message, 'masuk else')
          console.log(error.config)
        }
      }
    },
    async fetchTasks (context) {
      try {
        const { data } = await server({
          url: '/tasks',
          method: 'get',
          headers: { access_token: localStorage.getItem('access_token') }
        })
        context.commit('setTasks', data)
      } catch (error) {
        if (error.response) {
          context.commit('setErrors', error.response.data.messages)
        } else {
          console.log('Error', error.message, 'masuk else')
          console.log(error.config)
        }
      }
    },
    async fetchColumns (context) {
      try {
        const { data } = await server({
          url: '/columns',
          method: 'get',
          headers: { access_token: localStorage.getItem('access_token') }
        })
        context.commit('setColumns', data)
      } catch (error) {
        if (error.response) {
          context.commit('setErrors', error.response.data.messages)
        } else {
          console.log('Error', error.message, 'masuk else')
          console.log(error.config)
        }
      }
    }
  },
  modules: {
  }
})
