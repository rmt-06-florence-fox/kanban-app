<template>
  <div>
    <RegisterPage 
      v-if="currentPage === 'RegisterPage'" 
      @emitChangePage="changePage"
      @emitRegister="register"
      :errors=errorRegister>
    </RegisterPage>

    <LoginPage 
      v-else-if="currentPage === 'LoginPage'" 
      @emitChangePage="changePage"
      @emitGetTask="getTasks"
      @emitLogin="login"
      :email=email
      :password=password
      :error=errorLogin>
    </LoginPage>

    <MainPage v-else-if="currentPage === 'MainPage'"
      @emitLogout="logout"
      :categories=categories
      :tasks=tasks
      :loggedInEmail=loggedInEmail
      @getCategory="getCategory"
      @emitPopulate="showEditForm"
      @emitMoveTask="showMoveForm"
      @emitDeleteTask="deleteTask">
    </MainPage>

    <addForm 
      v-if="currentPage === 'addForm'"
      @emitChangePage="changePage"
      @emitAddTask="addTask">
    </addForm>

    <editForm
     v-if="currentPage === 'editForm'"
     @emitChangePage="changePage"
     @emitEditTask="editTask"
     :task=task>
    </editForm>

    <moveForm
     v-if="currentPage === 'moveForm'"
     @emitChangePage="changePage"
     @emitMoveTask="moveTask"
     :movedTask=movedTask
     :categories=categories>
    </moveForm>
  </div>
</template>

<script>
let basicUrl = "http://localhost:3000/"
import {GoogleLogin} from 'vue-google-login';
import addForm from "./components/addForm.vue"
import editForm from "./components/editForm.vue"
import moveForm from "./components/moveForm.vue"
import MainPage from "./components/mainPage.vue"
import RegisterPage from "./components/register.vue"
import LoginPage from "./components/loginPage.vue"
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      errorLogin: null,
      errorRegister: null,
      currentPage: 'LoginPage',
      email: null,
      password: null,
      categories: null,
      tasks: null,
      loggedInEmail: null,
      category: {
        id: null
      },
      task: {
        id: null,
        title: null,
        due_date: null,
        CategoryId: null
      },
      movedTask: null
    };
  },
  methods: {
    changePage(page){
      this.currentPage = page
    },
    login(email, password){
      axios({
        method: 'post',
        url: `${basicUrl}user/login`,
        data: {
          email,
          password
        }
      })
        .then(response => {
          localStorage.setItem("email", email)
          localStorage.setItem("access_token", response.data.access_token)
          this.currentPage = "MainPage"
          this.loggedInEmail = localStorage.getItem("email")
          this.getTasks()

        })
        .catch(error => {
          console.log(this.error)
        })
        .finally(() => {
          this.email = null
          this.password = null
        })
    },
    register(email, password){
      axios({
        url: `${basicUrl}user/register`,
        method: "post",
        data: {
          email,
          password
        }
      })
      .then(response => {
        this.currentPage = "LoginPage"
        console.log(response)
      })
      .catch(error => {
        this.errorRegister = error.response.data.message
        console.log(error.response.data)
      })
    },
    getTasks(){
      axios({
        method: 'get',
        url: `${basicUrl}tasks/categories`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(response => {
          this.categories = response.data
          return axios ({
            method: 'get',
            url: `${basicUrl}tasks/`,
            headers: {
              access_token: localStorage.getItem("access_token")
            }
          })
        })
        .then(response => {
          for (let i = 0; i < response.data.length; i++){
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            let year = response.data[i].due_date.slice(0, 4)
            let month = months[Number(response.data[i].due_date.slice(5, 7)) - 1]
            let date = response.data[i].due_date.slice(8, 10)
            response.data[i].converted_due_date = `${date} ${month} ${year}`
          }
          this.tasks = response.data
        })
        .catch(error => {
          console.log(error.response.data)
        })
    },
    getCategory(CategoryId, page){
      this.currentPage = page
      this.category.id = CategoryId
    },
    addTask(title, due_date){
      axios({
        url: `${basicUrl}tasks/`,
        method: "post",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          title,
          due_date,
          CategoryId: this.category.id
        }
      })
      .then(response => {
        console.log(response)
        this.currentPage = "MainPage"
        this.getTasks()
      })
      .catch(error => {
        this.getCategory()
        console.log(error.response.data)
      })
    },
    showEditForm(task, page){
       this.task.id = task.id
       this.task.title = task.name
       this.task.due_date = task.due_date
       this.task.CategoryId = task.categoryId
       this.currentPage = "editForm"
       console.log(task, page)
    },
    editTask(taskEdited){
      axios({
        url: `${basicUrl}tasks/${taskEdited.id}`,
        method: "put",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          title: taskEdited.title,
          due_date: taskEdited.due_date,
          CategoryId: taskEdited.CategoryId
        }
      })
      .then(response => {
        console.log(response)
        this.currentPage = "MainPage"
        this.getTasks()
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    showMoveForm(task, page){
       console.log(task, page)
       this.movedTask = task
       this.currentPage = page
    },
    moveTask(TaskId, CategoryId){
      axios({
        url: `${basicUrl}tasks/${TaskId}`,
        method: "patch",
        headers : {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          CategoryId
        }
      })
      .then(response => {
        console.log(response)
         this.currentPage = "MainPage"
         this.getTasks()
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    deleteTask(task){
      axios({
        url: `${basicUrl}tasks/${task.id}`,
        method: "delete",
        headers : {
          access_token: localStorage.getItem("access_token")
        }
      })
      .then(response => {
        console.log(response)
        this.currentPage = "MainPage"
        this.getTasks()
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    logout(){
      localStorage.clear()
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
      console.log('User signed out.');
      });
      this.currentPage = "LoginPage"
    }
  },
  components : {
    RegisterPage,
    LoginPage,
    MainPage,
    addForm,
    editForm,
    moveForm,
    GoogleLogin
  },
  created: function (){
    if (localStorage.getItem("access_token")){
      this.getTasks()
      this.currentPage = "MainPage"
      this.loggedInEmail = localStorage.getItem("email")
    }
    else {
      this.currentPage = "LoginPage"
    }
  },
  
};
</script>

<style scoped>
</style>
