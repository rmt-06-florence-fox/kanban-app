<template>
  <div>
      <LoginPage 
        v-if="currentPage = 'Login Page'">
      </LoginPage>
      
  </div>
</template>

<script>
import LoginPage from "./components/loginPage"
import Navbar from "./components/navbar"
import MainPage from "./components/mainPage"
import RegisterPage from "./components/registerPage"


export default {
    name: "App",

    data(){
        return {
            name: "tommy",
            currentPage: "Main Page"
        }
    },
    method: {
        changePage(page){
            this.currentPage = page
        }
    },
    components: {
        LoginPage,
        Navbar,
        MainPage,
        RegisterPage
    }
}
</script>
    
<style>
    
</style>