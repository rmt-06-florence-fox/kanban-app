<template>
  <div>
    <RegisterPage v-if="currentPage === 'RegisterPage'" @emitChangePage="changePage"></RegisterPage>
    <LoginPage 
    v-else-if="currentPage === 'LoginPage'" 
    @emitChangePage="changePage"
    @emitLogin="login"
    :email=email
    :password=password
    ></LoginPage>
     <MainPage v-else-if="currentPage === 'MainPage'"
     @emitLogout="logout"
     :categories=categories
     :tasks=tasks
     :loggedInEmail=loggedInEmail
     @getCategory="getCategory"
     ></MainPage>
     <addForm 
     v-if="currentPage === 'addForm'"
     @emitChangePage="changePage"
     @emitAddTask="addTask"
      ></addForm>
  </div>
</template>

<script>
let basicUrl = "http://localhost:3000/"
import addForm from "./components/addForm.vue"
import MainPage from "./components/mainPage.vue"
import RegisterPage from "./components/register.vue"
import LoginPage from "./components/loginPage.vue"
import axios from "axios"
export default {
  data() {
    return {
      currentPage: 'LoginPage',
      email: null,
      password: null,
      categories: null,
      tasks: null,
      loggedInEmail: null,
      category: {
        id: null
      }
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
        .catch(xhr => {
          console.log(xhr)
        })
        .finally(() => {
          this.email = null
          this.password = null
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
            response.data[i].due_date = `${date} ${month} ${year}`
          }
          this.tasks = response.data
        })
        .catch(xhr => {
          console.log(xhr)
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
      .catch(err => {
        console.log(title, due_date, CategoryId + " <<< ini dari App error")
        console.log(err)
      })
    },
    logout(){
      localStorage.clear()
      this.currentPage = "LoginPage"
    }
  },
  components : {
    RegisterPage,
    LoginPage,
    MainPage,
    addForm
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
