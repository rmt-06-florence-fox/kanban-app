<template>
   <div>
    <Nav :isLogin="isLogin" :signUpUser="signUpUser" :changeLogin="changeIsLogin"></Nav>
    <div v-if="!isLogin">
      <LandingPage :signUpUser="signUpUser" :haveAccount="haveAccount" :changeLogin="changeIsLogin"></LandingPage>
    </div>

    <div v-if="isLogin">
      <Home></Home>
    </div>

  </div>
</template>

<script>
  import Nav from './components/Navbar'
  import Home from './components/Home'
  import LandingPage from './components/LandingPage'
  export default {
    components: {
      Nav,
      Home,
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