<template>
  <div class="container row col-12 justify-content-center align-items-center" style="height:93%;">
      <div v-if="showLogin" class="card" style="min-height: 400px;width: 400px;">
                <div class="card-body">
                    <!-- form login -->
                    <div class="row align-items-center justify-content-between">
                        <h6>LOGIN:</h6>
                        <h6>OR</h6><button @click="showLogin = false , bodyLogin.email = '' , bodyLogin.password = '' , error.login = ''"  class="btn btn-success">REGISTER</button>
                    </div>
                    <form @submit.prevent="login">
                        <p class="text-danger">{{error.login}}</p>
                        <div class="form-group">
                            <label for="">Email address</label>
                            <input v-model="bodyLogin.email" type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input v-model="bodyLogin.password" type="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                    <p>OR SIGN IN with</p>
                    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                </div>
            </div>
            <div v-if="!showLogin" class="card" style="min-height: 400px;min-width: 400px;">
                <div class="card-body">
                    <!-- form register -->
                    <div class="row align-items-center justify-content-between">
                        <h6>REGISTER:</h6>
                        <h6>OR</h6><button @click="showLogin = true , bodyRegister.email = '' , bodyRegister.password = '' , error.register = ''" class="btn btn-primary">LOGIN</button>
                    </div>
                    <form @submit.prevent="register">
                        <p class="text-danger">{{error.register}}</p>
                        <div class="form-group">
                            <label for="">Email address</label>
                            <input v-model="bodyRegister.email" type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input v-model="bodyRegister.password" type="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-success">Register</button>
                    </form>
                    <p>OR SIGN IN with</p>
                    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                    </div>
            </div>
  </div>
</template>

<script>
import axios from 'axios'
import GoogleLogin from 'vue-google-login'

export default {
    components:{
        GoogleLogin
    },
    props: ['error'],
    data(){
        return{
            showLogin: true,
            bodyLogin:{
                email: '',
                password: ''
            },
            bodyRegister:{
                email:'',
                password:''
            },
            params: {
                client_id : "1028455310019-lvgag11ncrp0enkf9ssr3eafohnkmrbt.apps.googleusercontent.com"
            },
                renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    methods:{
        login(){
            this.$emit('postLogin', this.bodyLogin)
        },
        register(){
            this.$emit('postRegister', this.bodyRegister)
        },
        onSuccess(googleUser){
            const profile = googleUser.getBasicProfile()
            var id_token = googleUser.getAuthResponse().id_token;
            this.$emit('googleLogin', id_token)
        }
    }
}
</script>

<style>

</style>