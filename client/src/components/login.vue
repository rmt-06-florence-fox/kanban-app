<template>
    <section class="login-container" id="login_form" >
     <div class="login-form" >
      <h1>KANBAN</h1>
      <p>A kanban board is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow).</p>
       <form @submit.prevent="login">
         <div class="form-group">
           <label for="login-email">Email address :</label>
           <input v-model="email" type="email" class="form-control" id="email_input_login" autocomplete="email" required>
        </div>
         <div class="form-group">
           <label for="login-password">Password :</label>
           <input v-model="password" type="password" class="form-control" id="password_input_login" autocomplete="current-password" required>
         </div>
         <button class="login-btn">Login</button>
      </form>
     <GoogleLogin class="g-signin2 btn-primary" :params="params" :onSuccess="onSuccess" :onFailure="onFailure">SIGN IN WITH GOOGLE</GoogleLogin>
       <span>You dont have account? <a @click="changeRegisterPage" id="button_signup" >Sign Up</a></span>
     </div>        
    </section>
</template>

<script>
import {GoogleLogin} from 'vue-google-login'

export default {
    name: "loginPage",
    components: {
      GoogleLogin
    },
    data(){
        return {
            email: '',
            password: '',
            params: {
                client_id: "1078078274697-qh6v48qcjkvrd6d3lbqlkqif8ctfa3hb.apps.googleusercontent.com"
            },
            // only needed if you want to render the button with the google ui
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    methods: {
        login() {
            let payload = {
                email : this.email,
                password: this.password
            }
            this.$emit('login', payload)
        },
        changeRegisterPage(){
          this.$emit('changeRegisterPage')
        },
        onSuccess(googleUser) {
            // console.log('masuk sini?')
 
            // This only gets the user information: id, name, imageUrl and email
            let googleToken = googleUser.getAuthResponse().id_token;
            this.$emit('lemparGoogleToken', googleToken)
        },
        onFailure(){
          console.log(error)
        }
    }
}
</script>

<style>

</style>