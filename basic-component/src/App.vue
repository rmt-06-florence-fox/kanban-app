<template>
  <div>
      <LoginPage 
        v-if="currentPage === 'LoginPage'" 
        @PleaseChangePage="changePage">
      </LoginPage>
      <MainPage
        v-else-if="currentPage === 'MainPage'"
        @PleaseChangePage="changePage">
      </MainPage>
      <RegisterPage
        v-else-if="currentPage === 'RegisterPage'"
        @PleaseChangePage="changePage"
      ></RegisterPage>
      
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
            currentPage: "LoginPage"
        }
        
    },
    methods: {
        changePage(page){
            this.currentPage = page
            console.log(this.currentPage)
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