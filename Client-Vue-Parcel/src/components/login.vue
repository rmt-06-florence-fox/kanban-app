<template>
  <div>
    <section id="login-page" class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-3 mt-5">
          <h1 class="mb-5 text-center"><b>Login</b></h1>
          <form id="form-login" @submit.prevent='login' >
            <div class=" form-group mt-1">
              <label for="login-email">Email address</label>
              <input type="email" class="form-control" id="login-email" v-model='user.email' placeholder="Your email">
            </div>
            <div class=" form-group mt-1">
              <label for="login-password">Password</label>
              <input type="password" class="form-control" id="login-password" v-model='user.password' placeholder="Password">
            </div>
            <button type="submit" class="btn btn-submit btn-block">Sign In</button>
          </form>
          <h6 for="" class="mt-2 text-center">Or login with </h6>
          <div class="container-oauth">
            <div class="g-signin2 btn btn-google rounded" data-onsuccess="onSignIn"></div>
          </div>
          <button type="button" @click="registButton"> Haven't account ? Click here !</button>
        </div>
        <div class="col-6">
          <div class="mb-5 mt-5">
            <img src="../../assets/login.svg" alt="" class="img-fluid mt-5 img-login">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return{
        user:{
          email: '',
          password: ''
        }
      }
    },
    methods:{
      login(){
        // console.log(this.user);
        this.$emit('dataLogin', this.user)
      },
      registButton(){
        this.$emit('changePage', 'Register Page')
      }
    }
  }
</script>

<style>

</style>