import Vue from 'vue'
import Vuex from 'vuex'
import server from '../config/server.js'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    tasks: [],
    columns: [],
    success: ''
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
    },
    setSuccess (state, string) {
      setTimeout(() => { state.success = string }, 450)
      setTimeout(() => { state.success = '' }, 2000)
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
        data.sort((a, b) => {
          if (a.id < b.id) return -1
          else if (a.id > b.id) return 1
          return 0
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
    },
    async deleteTask (context, id) {
      try {
        await server({
          url: '/tasks/' + id,
          method: 'delete',
          headers: { access_token: localStorage.getItem('access_token') }
        })
        context.dispatch('fetchTasks')
        context.commit('setSuccess', 'task has been deleted')
      } catch (error) {
        if (error.response) {
          context.commit('setErrors', error.response.data.messages)
        } else {
          console.log('Error', error.message, 'masuk else')
          console.log(error.config)
        }
      }
    },
    async editTask (context, payload) {
      try {
        const { title, ColumnId } = payload
        await server({
          url: '/tasks/' + payload.id,
          method: 'put',
          data: { title, ColumnId },
          headers: { access_token: localStorage.getItem('access_token') }
        })
        context.dispatch('fetchTasks')
        context.commit('setSuccess', 'task has been edited')
      } catch (error) {
        if (error.response) {
          context.commit('setErrors', error.response.data.messages)
        } else {
          console.log('Error', error.message, 'masuk else')
          console.log(error.config)
        }
      }
    },
    async addTask (context, payload) {
      try {
        await server({
          url: '/tasks',
          method: 'post',
          data: payload,
          headers: { access_token: localStorage.getItem('access_token') }
        })
        context.dispatch('fetchTasks')
        context.commit('setSuccess', 'A new task has been created')
      } catch (error) {
        if (error.response) {
          context.commit('setErrors', error.response.data.messages)
        } else {
          console.log('Error', error.message, 'masuk else')
          console.log(error.config)
        }
      }
    },
    async alterColumn (context, payload) {
      try {
        await server({
          url: '/tasks/' + payload.id,
          method: 'patch',
          data: { ColumnId: payload.ColumnId },
          headers: { access_token: localStorage.getItem('access_token') }
        })
        context.dispatch('fetchTasks')
        // console.log(data)
      } catch (error) {
        if (error.response) {
          context.commit('setErrors', error.response.data.messages)
        } else {
          console.log('Error', error.message, 'masuk else')
          console.log(error.config)
        }
      }
    },
    async addColumn (context, payload) {
      try {
        console.log(payload)
        await server({
          url: '/columns',
          method: 'post',
          data: payload,
          headers: { access_token: localStorage.getItem('access_token') }
        })
        context.dispatch('fetchColumns')
        context.commit('setSuccess', 'A new column has been added')
        // console.log(data)
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
  getters: {
    classifiedTasks: state => colId => {
      return state.tasks.filter(task => {
        if (task.ColumnId === colId) return task
      })
    }
  },
  modules: {
  }
})
