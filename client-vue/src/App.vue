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
  @fetchTask = "fetchTask"
  :list = "tasks"
  @requestEdit = "edit"
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
        // console.log(data.data);
        if (data.data) {
          Swal.fire(`Success Add ${data.data.title}`, '', `success`)
        }
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
        // console.log(result);
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
        console.log(data.data);
        if (data.data) {
          Swal.fire(`Success Edit ${data.data.title}`, '', `success`)
        }
        this.fetchTask()
        this.page = 'main page'
      } catch (error) {
        console.log(error.response);
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
          console.log(data.data);
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