<template>
  <div>
    <SignInPage
      v-if="page === 'login'"
      @changePage="changePage"
      @signinUser="signinUser"
      @signUpForm="signUpForm"
      @consoleErr="consoleErr"
      >
    </SignInPage>

    <SignUpPage
      v-if="page === 'register'"
      @changePage="changePage"
      @signInForm="signInForm"
      @consoleErr="consoleErr"
    >
    </SignUpPage>

    <MainPage
      v-if="page === 'main'"
      @changePage="changePage"
      @logOutUser="logOutUser"
      @consoleErr="consoleErr"
    >
    </MainPage>

    <Footer>
    </Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import SignInPage from './components/SignInPage.vue'
import SignUpPage from './components/SignUpPage.vue'
import MainPage from './components/MainPage.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    SignInPage,
    SignUpPage,
    MainPage,
    Footer
  },
  data() {
    return {
      page: 'login',
    }
  },
  created() {
    console.log(localStorage.getItem('access_token'))
    if(localStorage.getItem('access_token')) {
      this.page = 'main'
    } else {
      this.page = 'login'
    }
  },
  methods: {
    changePage(newPage) {
      console.log(newPage)
      this.page = newPage
    },
    
    signinUser(data) {
      console.log(data.data.access_token)
      localStorage.setItem('access_token', data.data.access_token)
      this.changePage('main')
    },

    logOutUser() {
      localStorage.clear()
      this.changePage('login')
    },

    signUpForm() {
      this.changePage('register')
    },

    signInForm() {
      this.changePage('login')
    },

    consoleErr(error) {
      console.log(error)
    }
  },
}
</script>

<style>
  
</style>
