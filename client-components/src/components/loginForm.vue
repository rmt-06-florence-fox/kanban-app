<template>
  <div class="container w-50 mt-5 ml-1">
          <div class="card text-left shadow">
            <div class="card-header" style="background-color: #0eaef8;">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Login</a>
                </li>
                <li class="nav-item">
                  <a @click = "register" class="nav-link text-white" href="#">Register</a>
                </li>
              </ul>
            </div>
            <form @submit.prevent = "loginSubmit">
              <div class="card-body">
                <label for="email-login" class="card-title">Email</label>
                <input v-model="email" id="email-login" class="form-control" type="text" placeholder="Sleketemb@mail.com">
                <label for="password-login" class="card-title mt-3">Password</label>
                <input v-model="password" id="password-login" class="form-control" type="password">
              </div>
              <div class="row container ml-2 mb-3">
                <button class="btn btn-lg text-white" style="background-color: #0eaef8;">Login</button>
                <GoogleLogin class="ml-3 " :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                <!-- google sign button -->
              </div>
            </form>
          </div>   
        </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
    name: 'loginForm',
    data () {
        return {
            email: '',
            password: '',
            params: {
              client_id: "1032301583959-22amjtnotb8e2qbkd1d0vtsn5s9v1hbm.apps.googleusercontent.com"
            },
            renderParams: {
                width: 140,
                height: 50,
                longtitle: false
            }
        }
    },
    components:{
      GoogleLogin
    },
    methods: {
        register(){
            this.$emit('changePageName', 'register page')
        },
        loginSubmit(){

            this.$emit('submitLogin', {
                email: this.email,
                password: this.password
            }),
            this.email = ''
            this.password = ''
        },
        onSuccess(googleUser) {
            // console.log(googleUser);
            // console.log(googleUser.getAuthResponse().id_token)
          let googleToken = googleUser.getAuthResponse().id_token
          this.$emit('googleLogin', googleToken)
        }
    }

}
</script>

<style>

</style>