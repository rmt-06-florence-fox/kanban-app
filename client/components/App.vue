<template>
  <div class="container-fluid">
    <div v-if="page === 'content' ">
        <!--<h1>ini dari app</h1>-->
        <Header @listenLogout = "logout" @listenAdd="addTask"></Header>
        <BoardList 
        :tasks="tasks"
        @changeStatus="changeStatus"
        @editHandler="editHandler"
        @deleteTask="deleteTask"
        ></BoardList>
    </div>
    
    <LoginForm @listenToRegister = "changePage" @listenToContent = "changePage" v-else-if="page === 'login'"></LoginForm>
    <RegisterForm @listenToLogin = "changePage" @listenToContent = "changePage" v-else-if="page === 'register'"></RegisterForm>
  </div>
  
</template>

<script>
import Header from "./app-children/Header.vue"
import LoginForm from "./app-children/LoginForm.vue"
import RegisterForm from "./app-children/RegisterForm.vue"
import BoardList from "./app-children/BoardList.vue"

import server from "../server.js"
import axios from "axios"



export default {
    name : 'App',
    data (){ // function that returns an object
        return {
            page : "login",
            tasks : []
        }
    },
    methods : {
        
        logout(){
            //console.log('lewat App')
            localStorage.removeItem("access_token")
            this.page = "login"
        },
        changePage(pageName){
            console.log('masuk changePage', pageName)
            this.page = pageName
        },
        fetch(){
            const access_token = localStorage.getItem('access_token')
            
            axios({    
                method : 'GET',
                url : server + "/tasks",
                headers : {
                    access_token
                }
            })
            .then(({data}) => {
                    //this.tasks = data
                    //console.log(data)
                    this.tasks = data
            })
            .catch(err => {
                    console.log(err)
                })
        },
        addTask (title){
            //console.log(title)
            const access_token = localStorage.getItem('access_token')
            axios({
                url : server + "/tasks",
                method : "POST",
                data : {title},
                headers : {access_token}
            })
            .then( _ => {
                this.fetch()
            })
            .catch(err => {
                console.log(err)
            })
        },
        changeStatus(bool, task){
            
            let {id, category } = task
            const access_token = localStorage.getItem('access_token')
            
            if (bool){
                if (category === "Back Log") category = "To Do"
                else if (category === "To Do") category = "Doing"
                else if (category === "Doing") category = "Done"
                
            } else {
                if (category === "To Do") category = "Back Log"
                else if (category === "Doing") category = "To Do"
                else if (category === "Done") category = "Doing"
            }

            axios({
                url : server + "/tasks/" + id,
                method : "PATCH",
                data : {category},
                headers : {access_token}
            })
            .then(_ => {
                this.fetch()
            })
            .catch(err => {
                console.log(err)
            })
        },
        editHandler(task){
            const access_token = localStorage.getItem('access_token')
            const {id, title, category} = task
            

            axios({
                url : server + "/tasks/" + id,
                method : 'PUT',
                data : {title, category},
                headers : {access_token}
            })
            .then(_ => {
                this.fetch()
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteTask(task){
            const {id} = task
            const access_token = localStorage.getItem('access_token')
            
            axios({
                url : server + "/tasks/" + id,
                method : "DELETE",
                headers : {access_token}
            })
            .then(_ => {
                this.fetch()
            })
            .catch(err => {
                console.log(err)
            })
        },

    },

    created () {
        if(localStorage.getItem('access_token')) {
            this.fetch()
            this.page = "content"

         } else {

            this.page = "login" 
         }
    },
    watch : {
        refetch(){
            if(this.page === 'content') {
                this.fetch()
                this.changePage()

            } else {
                this.changePage()
            }
        }
    },
    components : {
        Header,
        LoginForm,
        RegisterForm,
        BoardList
    }
}
</script>

<style>

</style>