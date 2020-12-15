<template>
    <div id="login" class="container front">
            <div class="register">
                <img src="../image/login.svg" class="front-img">
            </div>
            
            <div class="login form">
                <form @submit.prevent="login" id="login-form">
                    <div class="form-group">
                        <label for="email-input">Email address</label>
                        <input type="email" class="form-control" v-model="email" id="email-input" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password-input">Password</label>
                        <input type="password" class="form-control" v-model="password" id="password-input">
                    </div>
                    <button type="submit" class="btn btn-success">Login</button>
                    <div align="center" style="margin: 10%">
                        <span>
                            <small> Don't have an account? </small>
                        </span>
                        <a class="btn btn-link" @click="toRegister">Register here</a>
                    </div>
                </form>
                <button v-google-signin-button="clientId" class="google-signin-button">Google Login</button>
                
    
            </div>
        </div>
</template>

<script>
export default {
    name: "LoginPage",
    data () {
        return {
            email: "",
            password: "",
            clientId: '188341859118-9gb03hgp1namijm5ogvja2dda2ovqg0r.apps.googleusercontent.com'

        }
    },
    methods: {
        toRegister() {
            this.$emit("movePage", "register");
        },
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$emit("login", payload);
        },
        OnGoogleAuthSuccess (idToken) {
            this.$emit("googleLogin", idToken)
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    },
}
</script>

<style>

</style>