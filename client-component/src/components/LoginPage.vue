<template>
    <section class="container" id="login-page" >
        <div class="row justify-content-center mt-5">
            <div class="col-4 mt-1">
                <div class="shadow-lg p-5 mb-5 bg-dark rounded"> 
                    <h5 class="mb-4 text-center"><strong>KANBAN</strong></h5>
                    <form @submit.prevent="login">
                    <div class="form-group">
                        <input type="email" class="form-control rounded-pill" v-model="email" id="login-email" placeholder="Your email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control rounded-pill" v-model="password" id="login-password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-5 rounded-pill">Login</button>
                    <p class="text-muted text-center"> dont have account ? <a href="#" @click.prevent="toRegisterPage"> Register</a></p>

                    </form>
                         <GoogleLogin class="g-signin2" :params="params" :onSuccess="onSuccess" :onFailure="onFailure">SIGN IN WITH GOOGLE</GoogleLogin>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
    name: "LoginPage",
    props: ["registerPage"],
    components: {
        GoogleLogin
    },
    data () {
        return {
            email: '',
            password: '',
            params: {
                client_id: "830993365713-kbctbq255qvp0hm1c5gq4vp9igskv11d.apps.googleusercontent.com"
            },
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    methods: {
        login(){
            this.$emit("loginSubmit", this.email, this.password)
        },
        toRegisterPage(){
            this.$emit("changeRegisterPage", "register")
        },
        onSuccess(googleUser){
            console.log('masuk bosss')
            console.log(googleUser, "dari login page")
            const google_access_token =  googleUser.getAuthResponse().id_token
            // console.log(google_acces_token)

            this.$emit("emitGoogleLogin", google_access_token)
        },
        onFailure(){
            console.log(error)
        }
    }
}
</script>

<style>

</style>