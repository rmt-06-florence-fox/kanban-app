<template>
    <!-- landing page -->
    <div class="container-fluid landing-page">
        <div class="row container-header">
            <div class="col-md-7 container-title text-center">
                <h1 class="title">Kanban App</h1>
            </div>
            <div class="col-md-5 container-login text-center">
                <LoginPage 
                    v-if="state == 'login'" 
                    @changeState="changeState"
                    @login="login"
                ></LoginPage>

                <RegisterPage 
                    v-if="state == 'register'" 
                    @changeState="changeState"
                    @register="register"
                ></RegisterPage>
                <p>Or Login Using  Google</p>
                <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
            </div>
        </div>
    </div>
    <!-- landing page -->
</template>

<script>
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import { GoogleLogin } from 'vue-google-login'

export default {
    name: 'LandingPage',
    data () {
        return {
            state: 'login',
            params: {
                    client_id: "584514875853-tetksu5ga43o4jafv98hte93l3hu2sl8.apps.googleusercontent.com"
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
        changeState(input) {
            this.state = input
        },
        login(email, password) {
            this.$emit("login", email, password)
        },
        register(email, password) {
            this.$emit("register", email, password)
        },
        onSuccess(googleUser) { 
            // This only gets the user information: id, name, imageUrl and email
            this.$emit("googleSignIn", googleUser)
        }
    },
    components: {
        LoginPage,
        RegisterPage,
        GoogleLogin
    },
    props: ['onFailure', 'logoutButton', 'onCurrentUser']
}
</script>

<style>

</style>