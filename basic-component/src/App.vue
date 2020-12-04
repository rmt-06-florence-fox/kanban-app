<template>
  <div>
      <LoginPage 
        v-if="currentPage === 'LoginPage'" 
        @PleaseChangePage="changePage">
      </LoginPage>
      <MainPage
        v-else-if="currentPage === 'MainPage'"
        :Task="Tasks"
        :fetch="fetchTask"
        @PleaseChangePage="changePage"
        @PleaseEditCategory="back">
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
                    access_token: localStorage.getItem('access_token')
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
        back(category,id){
          axios({
                method: "PATCH",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data:{
                  category: category
                },
                url: "http://localhost:3000/task/" + id
            })
            .then(response => {
                this.fetchTask
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
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
          this.changePage("MainPage")
          this.currentPage = "MainPage"
        } else {
          this.currentPage = "LoginPage"
        }
        
    }
}
</script>
    
<style>
    
</style>