<template>
    <div class="container-login">
    <form @submit.prevent="loginProcess" id="loginForm">
        <h3>Login Page</h3>
        <div class="form-group">
            <label for="emailLogin">Email Address</label>
            <input v-model="loginUser.email" type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp" placeholder="yourname@example.com">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="passwordLogin">Password</label>
            <input v-model="loginUser.password" placeholder="********" type="password" class="form-control" id="passwordLogin">
        </div>
            <button type="submit" class="btn btn-outline-dark">Sign in</button><br><br>
            <br><br><br>
            <p>Don't have account? register <a @click="toRegisterPage" role="button">here.</a></p>
        </form>
        <div class="googleLogin">
            <p>or login through:</p>
            <GoogleLogin id="googleButton" :params="params" :onSuccess="onSuccess"><img src="google_logo.png" width="30px" alt=""></GoogleLogin>
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import axiosInstance from "../../axios/index"

export default {
    name: "Login",
    data() {
        return {
            loginUser: {
                email: ``,
                password: ``
            },
            params: {
                client_id: "309502960573-qkkh42veahnpo8sapq7v8o3mcff44u1h.apps.googleusercontent.com"
            },
            renderParams: {
                width: 160,
                height: 30,
                longtitle: false
            }
        }
    },
    components: {
        GoogleLogin
    },
    methods: {
        onSuccess(googleUser) {
            console.log(googleUser);
            let googleToken = googleUser.getAuthResponse().id_token
            axiosInstance({
                url: "/googleLogin",
                method: "POST",
                data: {
                    googleToken
                }
            })
            .then(response => {
                console.log(response.data)
                localStorage.setItem("access_token", response.data.access_token)
                this.$emit("changePage", "Home Page")
            })
            .catch(err => {
                console.log(err);
            })
        },
        loginProcess() {
            console.log(this.loginUser);
            this.$emit("login", this.loginUser)
        },
        toRegisterPage() {
            this.$emit("changePage", "Register Page")
        }
    }
}
</script>

<style>

</style>