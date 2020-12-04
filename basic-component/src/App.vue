<template>
  <div>
      <LoginPage 
        v-if="currentPage === 'LoginPage'" 
        @PleaseChangePage="changePage">
      </LoginPage>
      <MainPage
        v-else-if="currentPage === 'MainPage'"
        :Task="Tasks"
        @PleaseChangePage="changePage">
      </MainPage>
      <RegisterPage
        v-else-if="currentPage === 'RegisterPage'"
        @PleaseChangePage="changePage">
      ></RegisterPage>
      
  </div>
</template>

<script>
import LoginPage from "./components/loginPage"
import Navbar from "./components/navbar"
import MainPage from "./components/mainPage"
import RegisterPage from "./components/registerPage"
import axios from "axios"


export default {
    name: "App",
    data(){
        return {
            name: "tommy",
            Tasks: [],
            currentPage: "LoginPage"
        }
        
    },
    methods: {
        fetchTask(){
            axios({
                method: "GET",
                headers: {
                    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b21teXN1c2FudG83N0BnbWFpbC5jb20iLCJpYXQiOjE2MDcwMTYwODl9.P9-4N77hklstE4YpMuwiA08YYwnRRreGqEU80dtGlrc"
                },
                url: "http://localhost:3000/task"
            })
            .then(response => {
                this.Tasks = response.data
                console.log(this.Tasks)
            })
            .catch(error => {
                console.log(error)
            })
        },
        changePage(page){
            this.currentPage = page
            console.log(this.currentPage)
        },
        addNewTask(){

        },
        deleteTask(){

        },
        editCategory(){

        },
        editTask(){

        }
    },
    components: {
        LoginPage,
        Navbar,
        MainPage,
        RegisterPage
    },
    created() {
        if(localStorage.getItem("access_token")){
          this.fetchTask()
          this.currentPage = "MainPage"
        } else {
          this.currentPage = "LoginPage"
        }
        
    }
}
</script>
    
<style>
    
</style>