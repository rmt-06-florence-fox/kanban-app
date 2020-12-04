<template>
    <div class="container-fluid bg" id="loginPage">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12"></div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <form class="form-container" id="loginForm" @submit.prevent="login">
                    <h1 class="formLRtitle">LOGIN</h1>
                    <div class="form-group">
                        <label for="emailLoginForm">Email address</label>
                        <input type="email" class="form-control" id="emailLogin" v-model="email" aria-describedby="emailHelp" required>
                        <p class="text-kecil"><small>We'll never share your email with anyone else.</small></p>
                    </div>
                    <div class="form-group">
                        <label for="passwordLoginForm">Password</label>
                        <input type="password" class="form-control" id="passwordLogin" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                    <button @click="changeThisPage" class="btn btn-primary btn-block" id="createNewAccount">Create a New Account?</button>
                    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure" class="btn btn-block"></GoogleLogin>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
    name: "Login",
    props: ["onFailure"],
    data() {
        return {
            email: "",
            password: "",
            params: {
                client_id: "983193527819-c9ui62dpgiaj1q4aarhfp0b837m4c7o8.apps.googleusercontent.com"
            },
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    components:{
        GoogleLogin
    },
    methods: {
        login(){
            const payload ={
                email: this.email,
                password: this.password
            }
            this.$emit("login", payload);
        },
        changeThisPage(){
            this.$emit("changeThisPage", "registerPage");
        },
        onSuccess(googleUser){
            const payload = {
                access_token: googleUser.xc.access_token,
                email: googleUser.wt.cu
            }
            this.$emit("googleLogin", payload)
        }
    }
}
</script>

<style>

</style>