<template>
  <div>
    <login v-if="page == 'login'" @registerForm="registerForm" @successLogin="successLogin"></login>
    <register v-else-if="page == 'register'" @toLogin="toLogin" @successLogin="successLogin"></register>
    <homePage v-else-if="page == 'homePage'" @successLogout="successLogout" @refresh="successLogin" :tasks="tasks"></homePage>
  </div>
</template>

<script>
import axios from "axios";
import login from './component/login.vue';
import register from './component/register';
import homePage from './component/homePage';

export default {
  name: 'App',
  components: {login, register, homePage},
  data() {
    return {
      baseUrl: 'https://kanban-adnkamil.herokuapp.com',
      page: 'login',
      tasks: []
    }
  },
  methods: {
    fetchTasks() {
      axios({
        method: 'get',
        url: this.baseUrl + '/tasks',
        headers: {
          accesstoken: localStorage.accesstoken
        }
      })
      .then(result => {
        this.tasks = result.data
      })
      .catch(err => {
        console.log(err, 'fecthTasks');
      })
    },
    registerForm() {
      this.page = 'register'
    },
    toLogin() {
      this.page = 'login'
    },
    successLogin() {
      this.page = 'homePage'
      this.fetchTasks()
    },
    successLogout() {
      this.page = 'login'
    }
  },
  created() {
    if(localStorage.accesstoken) {
      this.page = 'homePage'
      this.fetchTasks()
    } 
  }
}
</script>

<style>

</style>