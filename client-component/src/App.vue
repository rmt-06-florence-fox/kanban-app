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
     :tasks=tasks></MainPage>
  </div>
</template>

<script>
let basicUrl = "http://localhost:3000/"
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
      tasks: null
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
          localStorage.setItem("access_token", response.data.access_token)
          this.currentPage = "MainPage"
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
    logout(){
      localStorage.clear()
      this.currentPage = "LoginPage"
    }
  },
  components : {
    RegisterPage,
    LoginPage,
    MainPage
  },
  created: function (){
    if (localStorage.getItem("access_token")){
      this.getTasks()
      this.currentPage = "MainPage"
    }
    else {
      this.currentPage = "LoginPage"
    }
  },
  
};
</script>

<style scoped>
</style>
