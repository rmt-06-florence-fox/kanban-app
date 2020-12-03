<template>
  <div class="container-fluid">
    <div v-if="page === 'content' ">
        <!--<h1>ini dari app</h1>-->
        <Header @listenLogout = "logout" @appRefetch = "fetch"></Header>
        <BoardList></BoardList>
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
            console.log('masuk changePage')
            this.page = pageName
        },
        fetch(){
            const access_token = localStorage.getItem('access_token')
            
            axios({    
                method : 'GET',
                url : server,
                data : {
                    access_token
                }
                .then(({data}) => {
                    this.tasks = data
                })
                .catch(err => {
                    console.log(err)
                })
            })
        }
    },
    created () {
        localStorage.getItem('access_token') ? this.page = "content" : this.page = "login" 
        
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