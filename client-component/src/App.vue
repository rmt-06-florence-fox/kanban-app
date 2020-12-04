<template>
  <div>
    <LoginPage v-if="currentPage === 'login'" @changeCurrentPage="changePage"></LoginPage>
    <MainPage v-else></MainPage>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage"
import MainPage from "./components/MainPage"
//import axios from "axios"

export default {
    name: "App",
    data() {
        return {
            name: "sandy",
            currentPage: "login"
        }
    }, 
    methods: {
      changePage (page) {
        console.log('emit login')
        this.currentPage = page
      }
    },
    components: {
        LoginPage,
        MainPage
    },
    created () {
      if (localStorage.getItem("access_token")) {
        this.currentPage = "MainPage"
      } else {
        this.currentPage = "login"
      }
    }
}
</script>

<style>

</style>