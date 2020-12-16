<template>
    <div class="login-card shadow rounded">
        <h5 style="text-align: center; padding-top: 20px;">Login</h5>
        <form id="login-form" class="mt-1" @submit.prevent="login">
            <div class="form-group">
                <label for="email-input">Email address</label>
                <input type="email" class="form-control" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password-input">Password</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <span @click="changePage" class="btn btn-primary">Register</span>
        </form>
        <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
    </div>
</template>

<script>
import Vue from "vue"

import GoogleLogin from 'vue-google-login';
import { LoaderPlugin } from 'vue-google-login';
Vue.use(LoaderPlugin, {
    client_id: "586270695185-joif162benhcpmgvhkckso4olas9bdqq.apps.googleusercontent.com"
});

export default {
    name: "Login",
    data () {
        return {
            email: "",
            password: "",
            params: {
                client_id: "586270695185-joif162benhcpmgvhkckso4olas9bdqq.apps.googleusercontent.com"
            },
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    methods: {
        changePage() {
            this.$emit("RegisterPage", "Register Page")
        },
        login() {
            let payload = {
                email: this.email,
                password: this.password
            }
            this.$emit("loginpage", payload)
        },
        onSuccess(googleUser) {
            // console.log(googleUser.getAuthResponse().id_token);
            const googleToken = googleUser.getAuthResponse().id_token
            // This only gets the user information: id, name, imageUrl and email
            // console.log(googleUser.getBasicProfile().du);
            this.$emit("GoogleLogin", googleToken)
        }
    },
    components: {
        GoogleLogin
    }
}
</script>

<style>

</style>