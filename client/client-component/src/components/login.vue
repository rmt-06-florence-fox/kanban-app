<template>
    <div>
        <div class="container mt-4">
                <div class="col-6">
        
                </div>
                <div class="col-6">
                    <h2>Login</h2>
                    <!-- Jangan lupa pakai v-on buat trigger si form, kalau form jangan lupa pakai submit, terus jangan lupa di prevent -->
                    <form @submit.prevent="loginData()">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <!-- Kalau mau dapet value dari input jangan lupa tambahin v-model -->
                          <input v-model="email" type="email" class="form-control" id="email-login" aria-describedby="emailHelp">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input v-model="password" type="password" class="form-control" id="password-email">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                       <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                </div>
            </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import axios from "axios"

export default {
    name: "LoginPage",
  
    data() {
        return {
            email: "",
            password: "",
            params: {
                    client_id: "930754003471-8r12i7s79cvnh2cr7b8nk3g14sibtf2f.apps.googleusercontent.com"
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
        loginData() {
            this.$emit("changePage")
            this.$emit("login", this.email, this.password)
        },
        onSuccess(googleUser) {
            let googleToken = googleUser.getAuthResponse().id_token
            axios({
                url: "http://localhost:3000/googlelogin",
                method: "POST",
                data: {
                    googleToken
                }
            })
                .then(({data}) => {
                    let acces_token = data.acces_token
                
                    localStorage.setItem("acces_token", acces_token)
                    if(localStorage.getItem("acces_token")) {
                        this.$emit("changePage", 'kanban-page')
                    }
        
                })
                .catch(err => {
                    console.log(err)
                })
            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
        }
    },
    components: {
        GoogleLogin
    }
}
</script>

<style>

</style>