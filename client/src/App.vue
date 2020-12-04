<template>
  <div class="container">
    <LoginPage v-if="currentPage === 'login'" @changePage="changePage"></LoginPage>
    <RegisterPage v-else-if="currentPage === 'register'" @changePage="changePage"></RegisterPage>
    <MainPage v-else-if="currentPage === 'home'" @changePage="changePage" @deleteTask="deleteTask" @editTask="editTask"></MainPage>
    <UpdateForm v-else-if="currentPage === 'update'" :taskData="taskData" @changePage="changePage" @update="update"></UpdateForm>
  </div>
  
</template>

<script>

import LoginPage from './components/LoginPage'
import RegisterPage from './components/Register'
import MainPage from './components/MainPage'
import UpdateForm from './components/UpdateForm'
import axios from 'axios'
import Swal from 'sweetalert2'



export default {
  name: "App",
  data() {
    return {
      message: 'Hello world',
      currentPage: 'login',
      taskData: '',
      coba: '',
      allTasks: [],
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page
    },
    deleteTask(id) {
      this.deletes(id)
    },
    deletes(id) {
      console.log(id);
      axios({
          method: 'delete',
          url: 'https://kanbaban.herokuapp.com/tasks/' + id,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        .then(response => {
          this.allTasks = response
          location.reload()
        })
         .catch(err => {
                console.log(err.response);
                let message = err.response.statusText
                Swal.fire({
                    title: message,
                    icon: 'error',
                
                })
            })
    },
    reload() {
      this.$forceUpdate();
    },
    editTask(task) {
      this.taskData = task
    },
    fetchTasks() {
      axios({
          method: 'get',
          url: 'https://kanbaban.herokuapp.com/tasks',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        .then(response => {
          let data = response.data.data
          this.allTasks = data;
          // this.currentPage = 'home'
        })
    },
    update(title, category, id) {
      axios({
          method: 'put',
          url: 'https://kanbaban.herokuapp.com/tasks/' + id,
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: {
            title,
            category
          }
        })
        .then(response => {
          this.currentPage = 'home'
        })
        .catch(err => {
                console.log(err.response);
                let message = err.response.statusText
                Swal.fire({
                    title: message,
                    icon: 'error',
                
                })
          })
    }
  },
  components: {
    LoginPage,
    RegisterPage,
    MainPage,
    UpdateForm
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.currentPage = 'home'
    } else {
      this.currentPage = 'login'
    }
  }
};
</script>

<style scoped>

</style>