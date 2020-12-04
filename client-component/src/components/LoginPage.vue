<template>
  <div class="container" >
    <div id="login-page"  class="bg-light col mt-5 rounded">
        <form id="login-form" class="input-margin" @submit.prevent="login">
            <h1>Login Form</h1>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" name="email" id="email-input" placeholder="email" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="text" class="form-control" name="password" id="password-input" placeholder="password" v-model="user.password">
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
            <a class="btn btn-outline-primary" role="button" @click.prevent="register">Register</a><br>
            <small>or you want to sign in with google</small>
            <GoogleLogin 
                :params="params" :renderParams="renderParams" :onSuccess="onSuccess"
            ></GoogleLogin>
        </form>
    </div>
  </div>

</template>

<script>
import GoogleLogin from 'vue-google-login';
import axios from "axios"
export default {
    name: "LoginPage",
    data () {
        return {
            user: {
                email: "",
                password: ""
            },
            // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
            params: {
                client_id: "674490181502-48i6fnrqdlq89q0iuqtef3mgv445caum.apps.googleusercontent.com"
            },
            // only needed if you want to render the button with the google ui
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }        
        }
    },
    components: {
        GoogleLogin
    }, 
    methods: {
        login () {
            axios({
                url: 'https://robby-kanban.herokuapp.com/login',
                method: 'post',
                data: this.user
            })
            .then(response=>{
                // console.log(response)
                localStorage.setItem('access_token', response.data.access_token)
                this.$emit("changeCurrentPage", "main")
                // this.pageName = 'Main Page'
                // this.fetch()
            })
            .catch(e=>{
                console.log(e)
            })
            .finally(_ =>{
                this.user.email = '',
                this.user.password = ''
            })
        },
        register(){
            this.$emit("changeCurrentPage", "register")
        },
        onSuccess(googleUser) {
            console.log(googleUser);
            var id_token = googleUser.getAuthResponse().id_token;
            axios({
                url: 'https://robby-kanban.herokuapp.com/googleLogin',
                method: 'post',
                data: {
                    id_token
                }
            })
            .then(response=>{
                console.log(response)
                localStorage.setItem('access_token', response.data.access_token)
                this.$emit("changeCurrentPage", "main")
            })
            .catch(e=>{
                console.log(e)
            })
            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
        },
    }
}
</script>

<style>

</style>