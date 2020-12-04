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
        :Category="Category"
        @PleaseAddTask="addTask"
        @PleaseChangePage="changePage"
        @PleaseEditCategory="back"
        @PleaseEditCategory="done"
        @PleaseDeleteTask="destroy"
        >
      </MainPage>
      <RegisterPage
        v-else-if="currentPage === 'RegisterPage'"
        @PleaseChangePage="changePage">
      ></RegisterPage>
      <RegisterTask
      v-else-if="currentPage === 'addTask'"
      @nowAddTask="addTaskData"
      ></RegisterTask>
      
  </div>
</template>

<script>
import LoginPage from "./components/loginPage"
import Navbar from "./components/navbar"
import MainPage from "./components/mainPage"
import RegisterPage from "./components/registerPage"
import RegisterTask from "./components/registerTask"
import axios from "axios"


export default {
    name: "App",
    data(){
        return {
            name: "tommy",
            Tasks: [],
            currentPage: "MainPage",
            Category: [
                {
                    id:1,
                    name: "Back-Log"
                },
                {
                    id:2,
                    name: "To-Do"
                },
                {
                    id:3,
                    name: "Doing"
                },
                {
                    id:4,
                    name: "Done"
                }
            ]
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
        addTask(){
          this.currentPage = "addTask"
        },
        addTaskData(name,description,category){
          axios({
                method: "POST",
                headers: {
                  access_token: localStorage.getItem('access_token')
                },
                data: {
                  name: name,
                  description: description,
                  category: category
                },
                url: "http://localhost:3000/task"
            })
            .then(response => {
                this.currentPage = 'MainPage'
                this.fetchTask()
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        destroy(id){
          axios({
                method: "DELETE",
                headers: {
                  access_token: localStorage.getItem('access_token')
                },
                url: "http://localhost:3000/task/" + id
            })
            .then(response => {
                this.fetchTask()
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
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
                this.fetchTask()
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        done(category,id){
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
                this.fetchTask()
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
        RegisterPage,
        RegisterTask
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