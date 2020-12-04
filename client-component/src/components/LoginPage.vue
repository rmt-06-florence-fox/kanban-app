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

                    <div class="g-signin2 googleLogin d-inline p-2" data-onsuccess="onSignIn"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LoginPage",
    props: ["registerPage"],
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            this.$emit("loginSubmit", this.email, this.password)
        },
        toRegisterPage(){
            this.$emit("changeRegisterPage", "register")
        } 
    }
}
</script>

<style>

</style>