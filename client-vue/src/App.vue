<template>
<div>
  <login 
  v-if = "page === 'login page'"
  @requestLogin = "login"
  @requestChangePage = "changePage"
  ></login>

  <register
  v-if = "page === 'register page'"
  @requestCreate = "create"
  @requestChangePage = "changePage"
  ></register>

  <mainPage
  v-if = "page === 'main page'"
  @requestLogout = "logout"
  @requestCreateTask = "createTask"
  @fetchTask = "fetchTask"
  :list = "tasks"
  @requestEdit = "edit"
  ></mainPage>

</div>
</template>

<script>
import login from '../components/01.login'
import register from '../components/01.register'
import mainPage from '../components/01.mainPage'
import axios from 'axios'
import $ from 'jquery'
import 'regenerator-runtime/runtime'

export default {
  data() {
    return {
      message : 'Hello world',
      page : 'login page',
      localhost : 'http://localhost:3000',
      tasks : []
    };
  },
  components : {
    login,
    register,
    mainPage
  },
  methods : {
    changePage(value) {
      this.page = value
    },
    async login(obj) {
      try {
        let data = await axios({
          url : `${this.localhost}/login`,
          method : 'post',
          data : {
            email : obj.email,
            password : obj.password
          }
        })
        localStorage.setItem('access_token', data.data.access_token)
        localStorage.setItem('fullname', data.data.fullname)
        this.fetchTask()
        this.changePage('main page')
      } catch (error) {
        console.log(error.response);
      }
    },
    async create(obj){
      try {
        let data = await axios({
          url : `${this.localhost}/register`,
          method : 'post',
          data : {
            firstName : obj.firstName,
            lastName : obj.lastName,
            email : obj.email,
            password : obj.password
          }
        })
        console.log(data.data);
        this.page = 'login page'
      } catch (error) {
        console.log(error.response);
      }
    },
    logout() {
      localStorage.clear()
      this.page = "login page"
    },
    async createTask(obj){
      try {
        let data = await axios({
          url : `${this.localhost}/tasks`,
          method : 'post',
          data : {
            title : obj.title,
            category : obj.category
          },
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })
        console.log(data.data);
        this.fetchTask()
        this.page = 'main page'
      } catch (error) {
        console.log(error.response);
      }
    },
    async fetchTask() {
      try {
        let data = await axios({
          url : `${this.localhost}/tasks`,
          method : 'get',
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })
        this.tasks = data.data
        console.log(data.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async edit(obj, id) {
      try {
        let data = await axios({
          url : `${this.localhost}/tasks/${id}`,
          method : 'put',
          data : {
            title : obj.title,
            category : obj.category
          },
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })
        console.log(data.data);
        this.fetchTask()
        this.page = 'main page'
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.page = "main page"
      this.fetchTask()
    } else {
      this.page = "login page"
    }
  }
};
</script>

<style>
</style>