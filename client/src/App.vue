<template>
   <div>
    <Nav :isLogin="isLogin" :signUpUser="signUpUser" :changeLogin="changeIsLogin"></Nav>
    <div v-if="!isLogin">
      <LandingPage :signUpUser="signUpUser" :haveAccount="haveAccount" :changeLogin="changeIsLogin"></LandingPage>
    </div>

    <div v-if="isLogin">
      <HomePage></HomePage>
    </div>

  </div>
</template>

<script>
  import Nav from './components/Navbar'
  import HomePage from './components/HomePage'
  import LandingPage from './components/LandingPage'
  import swal from 'sweetalert'
  export default {
    components: {
      Nav,
      HomePage,
      LandingPage
    },
    data() {
      return { isLogin: false, haveAccount: true }
    },
    methods: {
      changeIsLogin(val) {
        this.isLogin = val
      },
      signUpUser(val) {
        this.haveAccount = val
      }
    },
    created(){
      console.log('jalanin created App')
      if (localStorage.getItem('access_token')) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }
  };
</script>

<style>

</style>