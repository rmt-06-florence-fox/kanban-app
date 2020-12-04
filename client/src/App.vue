<template>
  <div>
    <RegisterPage 
      v-if="pageName == 'register-page'"
      @emit-change-page='changePage'
      @emit-register='register'
    ></RegisterPage>

    <LoginPage 
      v-else-if="pageName == 'login-page'"
      @emit-login='login'
      @emit-change-page='changePage'
    ></LoginPage>

    <KanbanPage 
      v-else-if="pageName == 'kanban-page'"
      @emit-change-page='changePage'
      :loggedInUser='loggedInUser'
    ></KanbanPage>

    <ErrorPage 
      v-else
    ></ErrorPage>
  </div>
</template>

<script>
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import KanbanPage from './components/KanbanPage'
import ErrorPage from './components/ErrorPage'
import axios from './config/axios'
export default {
  name: 'App',
  data() {
    return {
      pageName: 'login-page',
      loggedInUser: {

      },
      tasks: [],
      categories: []
    }
  },
  components: {
    RegisterPage, LoginPage, KanbanPage, ErrorPage
  },
  methods: {
    changePage(name) {
      this.pageName = name
    },
    register(payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
      .then((result) => {
        this.pageName = 'login-page'
      }).catch((err) => {
        console.log(err)
      });
    },
    login(payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then((result) => {
        const token = result.data.access_token
        localStorage.setItem('access_token', token)        
        this.pageName = 'kanban-page'
        this.fetchTask()
        this.fetchCategory()
      }).catch((err) => {
        console.log(err)
      });
    },
    fetchTask() {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/tasks',
        headers: {access_token: token}
      })
      .then((result) => {
        console.log(result.data)
      }).catch((err) => {
        console.log(err);
      });
    },
    fetchCategory() {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: 'categories',
        headers: {access_token: token}
      })
      .then((result) => {
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  created() {
    if (localStorage.access_token) {
      this.pageName = 'kanban-page'
    } else {
      this.pageName = 'login-page'
    }
  }
}
</script>

<style>

</style>