<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-8 p-5 mx-auto border border-rounded">
                <h1 class="text-center">Login</h1>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="loginEmail">Email Address</label>
                        <input type="email" class="form-control" v-model="email" placeholder="input your email">
                    </div>
                    <div class="form-group">
                        <label for="loginPassword">Password</label>
                        <input type="password" class="form-control" v-model="password" placeholder="input your password">
                    </div>
                    <div class="row">
                        <button type="submit" class="btn col-2 btn-primary ml-3">Submit</button>
                        <button @click="toRegister" class="btn col-4 btn-primary ml-3">Don't Have an Account?</button>
                    </div>
                </form><br>
                <h3 class="text-center">Or Login With</h3>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
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
            password: ""
        }
    },
    methods: {
        login () {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    this.$emit("changeCurrentPage", "home")
                })
                .catch(err => {
                    console.log(err);
                })
        },
        toRegister () {
            this.$emit("changeCurrentPage")
        }
    }
}
</script>

<style>

</style>