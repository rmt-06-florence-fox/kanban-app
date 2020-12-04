<template>
<div>
  <login 
  v-if = "page === 'login page'"
  @requestLogin = "login"
  @requestChangePage = "changePage"
  @loginGoogle = 'loginGoogle'
  ></login>

  <register
  v-if = "page === 'register page'"
  @requestCreate = "create"
  @requestChangePage = "changePage"
  ></register>

  <mainPage
  v-if = "page === 'main page'"
  @requestLogout = "logout"
  @fetchTask = "fetchTask"
  :list = "tasks"
  @requestEdit = "getEdit"
  @requestCreate = "createTask"
  @requestDelete = 'destroy'
  ></mainPage>
</div>
</template>

<script>
import login from '../components/01.login'
import register from '../components/01.register'
import mainPage from '../components/01.mainPage'
import axios from 'axios'
import $ from 'jquery'
import GoogleLogin from 'vue-google-login'
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
    mainPage,
    GoogleLogin
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
        let status = `${error.response.status} ${error.response.statusText}`
        let message = error.response.data.message.toString().replace(/,/g, ', ')
        Swal.fire({
          icon: 'error',
          title: `${status}`,
          text: `${message}`,
          footer: 'Please check again before you submit'
        })
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
        this.page = 'login page'
      } catch (error) {
        let status = `${error.response.status} ${error.response.statusText}`
        let message = error.response.data.message.toString().replace(/,/g, ', ')
        Swal.fire({
          icon: 'error',
          title: `${status}`,
          text: `${message}`,
          footer: 'Please check again before you submit'
        })
      }
    },
    logout() {
      localStorage.clear()
      this.page = "login page"
    },
    async createTask(){
      try {
          const formData = await Swal.fire({
          title: 'Create Form',
          html:`
            <form class="p-2">
              <div class="form-group">
                <label for="createTask">Task:</label>
                <input type="text" class="form-control" id="createTask">
              </div>
              <div class="form-group">
                <label for="selectCategory">Category</label>
                <select class="form-control" id="category">
                  <option value = ''>---- Select ----</option>
                  <option value = 'Backlog'>Backlog</option>
                  <option value = 'Todo'>Todo</option>
                  <option value = 'Doing'>Doing</option>
                  <option value = 'Done'>Done</option>
                </select>
              </div>
          `,
          showCancelButton: true,
          focusConfirm: false,
          preConfirm: () => {
            return {
              title : document.getElementById('createTask').value,
              category : document.getElementById('category').value
            }
          }
        })
        let obj = formData.value
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
        if (data.data) {
          Swal.fire(`Success Add ${data.data.title}`, '', `success`)
        }
        this.fetchTask()
        this.page = 'main page'
      } catch (error) {
        let status = `${error.response.status} ${error.response.statusText}`
        let message = error.response.data.message.toString().replace(/,/g, ', ')
        Swal.fire({
          icon: 'error',
          title: `${status}`,
          text: `${message}`,
          footer: 'Please check again before you submit'
        })
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
      } catch (error) {
        let status = `${error.response.status} ${error.response.statusText}`
        let message = error.response.data.message.toString().replace(/,/g, ', ')
        Swal.fire({
          icon: 'error',
          title: `${status}`,
          text: `${message}`
        })
      }
    },
    async getEdit(obj, id) {
      try {
        let data = await axios({
          url : `${this.localhost}/tasks/${id}`,
          method : 'get',
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })
        this.edit(data.data, id)
      } catch (error) {
        let status = `${error.response.status} ${error.response.statusText}`
        let message = error.response.data.message.toString().replace(/,/g, ', ')
        Swal.fire({
          icon: 'error',
          title: `${status}`,
          text: `${message}`
        })
      }
    },
    async edit(obj, id) {
      try {
        const formEdit = await Swal.fire({
          title: 'Edit Form',
          html:`
            <form class="p-2">
              <div class="form-group">
                <label for="editTask">Task:</label>
                <input type="text" class="form-control" id="editTask" value=${obj.title}>
              </div>
              <div class="form-group">
                <label for="selectCategory">Category</label>
                <select class="form-control" id="category">
                  <option value = 'Backlog' ${obj.category === 'Backlog' ? 'selected' : ''}>Backlog</option>
                  <option value = 'Todo' ${obj.category === 'Todo' ? 'selected' : ''}>Todo</option>
                  <option value = 'Doing' ${obj.category === 'Doing' ? 'selected' : ''}>Doing</option>
                  <option value = 'Done' ${obj.category === 'Done' ? 'selected' : ''}>Done</option>
                </select>
              </div>
          `,
          showCancelButton: true,
          focusConfirm: false,
          preConfirm: () => {
            return {
              title : document.getElementById('editTask').value,
              category : document.getElementById('category').value
            }
          }
        })
        let result = formEdit.value
        let data = await axios({
          url : `${this.localhost}/tasks/${id}`,
          method : 'put',
          data : {
            title : result.title,
            category : result.category
          },
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })
        if (data.data) {
          Swal.fire(`Success Edit ${data.data.title}`, '', `success`)
        }
        this.fetchTask()
        this.page = 'main page'
      } catch (error) {
        let status = `${error.response.status} ${error.response.statusText}`
        let message = error.response.data.message.toString().replace(/,/g, ', ')
        Swal.fire({
          icon: 'error',
          title: `${status}`,
          text: `${message}`,
          footer: 'Please check again before you submit'
        })
      }
    },
    async destroy(id){
      try {
        let confirm = await Swal.fire({
          title: 'Are you sure to delete this task?',
          text: "Please check before delete!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          confirmButtonText: 'Yes'
        })
        if (confirm.isConfirmed) {
          let data = await axios({
            url : `${this.localhost}/tasks/${id}`,
            method : 'delete',
            headers : {
              access_token : localStorage.getItem('access_token')
            }
          })
          if (data.data) {
            Swal.fire(`Success delete your task`, '', `success`)
          }
          this.fetchTask()
          this.page = 'main page'
        } else {
          throw {
            status : 500,
            message : 'internal server error'
          }
        }
      } catch (error) {
        if (error.status) {
          Swal.fire({
            icon: 'error',
            title: `${error.status}`,
            text: `${error.message}`,
            footer: 'Please check again before you submit'
          })
        } else {
          let status = `${error.response.status} ${error.response.statusText}`
          let message = error.response.data.message.toString().replace(/,/g, ', ')
          Swal.fire({
            icon: 'error',
            title: `${status}`,
            text: `${message}`,
            footer: 'Please check again before you submit'
          })
        }
      }
      
    },
    async loginGoogle(googleUser){
      try {
        const googleToken = googleUser.xc.id_token;
        let data = await axios({
          url : `${this.localhost}/googleLogin`,
          method : 'post',
          data : {
            googleToken
          }
        })
        localStorage.setItem('access_token', data.data.access_token)
        localStorage.setItem('fullname', data.data.fullname)
        this.fetchTask()
        this.changePage('main page')
      } catch (error) {
        let status = `${error.response.status} ${error.response.statusText}`
        let message = error.response.data.message.toString().replace(/,/g, ', ')
        Swal.fire({
          icon: 'error',
          title: `${status}`,
          text: `${message}`
        })
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