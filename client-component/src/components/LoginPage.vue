<template>
    <div id="login-page" class="form-content">
       <meta name="google-signin-client_id" content="879223745487-13ttaoug88fv6goh1k0q163jp1cq65ue.apps.googleusercontent.com">
        <section id="landing">
          <div class="d-flex justify-content-center align-items-center" style="height: 100vh;"  >
            <div class="p-5 bg-light shadow" >
                  <form @submit.prevent="userLogin">
                      <div class="form-group">
                          <label for="email">Email</label>
                          <input type="email" name="email" id="email" v-model="email" class="form-control">
                      </div>
                      <div class="form-group">
                          <label for="password">Password</label>
                          <input type="password" name="password" id="password" v-model="password" class="form-control">
                      </div>
                      <button type="submit " class="btn-log-reg btn-primary">Login</button>
                      <button @click.prevent="changePage('register')" id= "btn-log-reg-register" class="btn-log-reg btn-danger">register</button>
                      <button style="display: inline-block" v-google-signin-button="clientId" class="g-signin2" ></button>
                  </form>
  
    </div>
</template>

<script>
import RegisterPage from "./RegisterPage"
// import GoogleLogin from 'vue-google-login'
export default {
  name: "LoginPage",
  data() {
    return {
        email: "",
        password: "",
        clientId: "879223745487-13ttaoug88fv6goh1k0q163jp1cq65ue.apps.googleusercontent.com",
        
    }
      
  },
  components:{
    // GoogleLogin

  },
   
  methods: {
    changePage(page){
    this.$emit('changePage', page)
  },
     userLogin(){
      let userData = {
        email : this.email, 
        password : this.password
      }
      console.log("diloginvue")
      this.$emit('userLogin', userData)
    },
     OnGoogleAuthSuccess (idToken) {
      this.$emit("googleLogin",idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  
  },
 

}
</script>

<style>
.g-signin2 {
 

  display: inline flex;
	
 	outline: none;
	border: none;

}

</style>