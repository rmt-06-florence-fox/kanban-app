<template>
  <div class="container-fluid">
  
    <Header @listenLogout = "logout" v-if="page === 'content'"></Header>
    
    <LoginForm @listenToRegister = "changePage" v-else-if="page === 'login'"></LoginForm>
    <RegisterForm @listenToLogin = "changePage" v-else-if="page === 'register'"></RegisterForm>
  </div>
  
</template>

<script>
import Header from "./app-children/Header.vue"
import LoginForm from "./app-children/LoginForm.vue"
import RegisterForm from "./app-children/RegisterForm.vue"
//import BoardList from "./app-children/BoardList.vue"

export default {
    name : 'App',
    data (){ // function that returns an object
        return {
            page : "content"
        }
    },
    methods : {
        logout(){
            //console.log('lewat App')
            localStorage.removeItem("access_token")
            this.page = "login"
        },
        changePage(pageName){
            //console.log('masuk changePage')
            this.page = pageName
        }
    },
    components : {
        Header,
        LoginForm,
        RegisterForm
        //BoardList
    }
}
</script>

<style>

</style>