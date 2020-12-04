<template>
<div>
  <LoginPage
    v-if = "atPage === 'loginPage'"
    @login="login"
    @toRegister="toRegister"
  ></LoginPage>

  <RegisterPage
    v-else-if = "atPage === 'registerPage'"
    @toLogin="toLogin"
    @register="register"
  ></RegisterPage>
    
  <HomePage
    v-else-if = "atPage === 'homePage'"
    :categories="kategories"
    :tasks="tasks"
    @toAddForm="toAddForm"
    @toEditPage="toEditPage"
    @logout="logout"
    @destroy="destroy"
  ></HomePage>

  <AddForm
    v-else-if = "atPage === 'addForm'"
     @cancelButton="cancelButton"
     @addTodo="addTodo"
     @logout="logout"
  ></AddForm>

  <EditForm
    v-else-if = "atPage === 'editForm'"
    :detailTask="detailTask"
    @cancelButton="cancelButton"
    @editTask="editTask"
    @logout="logout"
  ></EditForm>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'
import Category from './components/Category'
import axios from './config/axios'
import swal from 'sweetalert';

export default {
  name: 'App',
  data() {
    return {
      tasks: [],
      atPage: 'loginPage',
      detailTask: null,
      kategories: [
        {
          "kategori": "BACKLOG",
        },
        {
          "kategori": "TODO",
        },
        {
          "kategori": "DOING",
        },
        {
          "kategori": "DONE"
        }
      ]
    };
  },
  components: {
    LoginPage, HomePage, RegisterPage, AddForm, EditForm, Category
  },
  methods: {
    changePage(payload) {
      this.atPage = payload.name
    },
    toRegister() {
      console.log('berhasil')
      this.atPage = 'registerPage'
    },
    toLogin() {
      console.log('mau login')
      this.atPage= 'loginPage'
    },
    toAddForm() {
      this.atPage= 'addForm'
    },
    cancelButton() {
      this.atPage= 'homePage'
    },
    logout() {
        Swal.fire({
        position: 'top-end',
        icon: 'thank you',
        title: 'Good Bye!',
        showConfirmButton: false,
        timer: 1500
        })
      localStorage.clear()
      this.ready()
    },
    toEditPage(payload) {
      this.atPage= payload.atPage
      this.detailTask= payload.task
    },
    fetchTask() {
      axios({
          method: 'GET',
          url: '/tasks',
          headers: {
              access_token: localStorage.getItem('access_token')
          }
      })
      .then((data) => {
          contole.log(data)
          this.tasks = data.data,
          this.ready()
      })
      .catch(error => {
          console.log(error)
      })
    },
    login(payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(data => {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your just logged in!',
        showConfirmButton: false,
        timer: 1500
        })
        console.log(this.tasks)
        localStorage.setItem('access_token', data.data.access_token)
        this.atPage= 'homePage'
        this.ready()
        this.fetchTask()
      })
      .catch(err => {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
      })
        console.log(err)
      })
    },
    register(payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(data => {
        Swal.fire({
        position: 'top-end',
        icon: 'Welcome home',
        title: 'you just success registered!',
        showConfirmButton: false,
        timer: 1500
        })
        this.ready()
      })
      .catch(err=> {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
      })
        console.log(err.response.data.message, 'nyampe sini kan')
      })
    },
    destroy(payload) {
      axios({
        url: `/tasks/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
      })
      .then(data => {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your just deleted your plan!',
        showConfirmButton: false,
        timer: 1500
        })
        this.ready()
        this.fetchTask()
      })
      .catch(err => {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
      })
        console.log(err.response)
      })
    },
    editTask(payload) {
      axios({
        url: `/tasks/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: payload.title,
          category: payload.category
        }
      })
      .then(_=> {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your just updated your plan!',
        showConfirmButton: false,
        timer: 1500
        })
        this.ready()
        this.fetchTask()
        this.atPage= 'homePage'
      })
      .catch(err => {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
      })
        console.log(err)
      })
    },
    fetchTask() {
      axios({
        url: '/tasks',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((data) => {
        this.tasks = data.data
        this.ready()
      })
      .catch(err => {
        console.log(err)
      })
    },
    addTodo(payload) {
      axios({
        url: `/tasks`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: payload.title,
          category: payload.category
        }
      })
      .then((data) => {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your just added your plan!',
        showConfirmButton: false,
        timer: 1500
        })
        this.ready()
        this.fetchTask()
        this.atPage='homePage'
        
      })
      .catch(err => {
        console.log(err)
      })
    },
    ready() {
      if(localStorage.getItem('access_token')){
        this.atPage = 'homePage';
      }
      else {
        this.atPage = 'loginPage';
      }
    }
  },
  created() {
    this.ready()
    this.fetchTask()
  }
};
</script>

<style scoped>
</style>