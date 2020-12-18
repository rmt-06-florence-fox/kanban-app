<template>
  <div>
    <div class="login-container container col-4 shadow-lg p-5">
        <h1 class="text-center">login</h1>
        <div class="card bg-transparent">
          <form @submit.prevent="login" class="p-2">
            <div class="form-group">
              <label for="exampleInputEmail1"><strong>Email address</strong></label>
              <input v-model="loginUser.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"><strong>Password</strong></label>
              <input v-model="loginUser.password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
          <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>  
        </div>
        <div class="card-footer"><a href="#" @click="changePage">Register</a></div>
      </div>
  </div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  name : "login-form-component",
  methods:{
    changePage(){
      // console.log('login vue');
      this.$emit("halamanRegister","register page")
    },
    login(){
      this.$emit('loginUserData', this.loginUser)
    },
    OnGoogleAuthSuccess (idToken) {
      this.$emit('googleToken', idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  },
  data(){
    return {
      loginUser :{
        email : '',
        password : ''
      },
      clientId : '146280165956-q5r75o17om8pic39nl03cdv9smc407ke.apps.googleusercontent.com'
    }
  },
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>