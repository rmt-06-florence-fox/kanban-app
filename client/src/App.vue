<template>
   <div>
    <Nav></Nav>
    <div v-if="!isLogin">
      <SignIn></SignIn>
    </div>

    <div v-if="isLogin">
      <Home></Home>
    </div>

  </div>
</template>

<script>
  import Nav from './components/Navbar'
  import Home from './components/Home'
  import SignIn from './components/SignIn'
  export default {
    components: {
      Nav,
      Home,
      SignIn
    },
    data() {
      return { isLogin: false }
    },
    // methods:{
    //   togleHome(){
    //     this.isHide = !this.isHide
    //   }
    // },
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