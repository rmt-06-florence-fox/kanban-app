<template>
    <section>
        <div class="container reg-log" id="register-page">
            <div class="register image">
                <img src="../image/img-reg.svg" class="img-reg">
            </div>
            <div class="register form">
                <form id="form-register" @submit.prevent="register">
                    <h6 id="text-register">kanban register <i class="fa fa-pencil" aria-hidden="true"></i></h6>
                    <div class="form-group">
                        <small id="form-reg-name" class="form-text text-muted">Name</small>
                        <input type="text" class="form-control form-control-sm" id="form-reg-name" v-model="name">
                    </div>
                    <div class="form-group">
                        <small id="form-reg-email" class="form-text text-muted">Email Address</small>
                        <input type="email" class="form-control form-control-sm" id="form-reg-email" v-model="email">
                    </div>
                    <div class="form-group">
                        <small id="form-reg-password" class="form-text text-muted">Password</small>
                        <input type="password" class="form-control form-control-sm" id="form-reg-password" v-model="password">
                    </div>
                    <p align="center">
                        <button type="submit" class="btn btn-primary" id="btn-signUp"><i class="fa fa-sign-in"
                                aria-hidden="true"></i> sign up</button>
                    </p>
                    <div align="center">
                        <small class="form-text text-muted">do you have account ?</small>
                        <span class="btn btn-link" @click="toSignIn" style="margin-top: -15px"><small>sign in</small></span>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "RegisterPage",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            this.$emit("register", payload)
            this.name= "";
            this.email= "";
            this.password= "";
        },
        toSignIn() {
            this.$emit("changePage", "login-page")
        }
    },
}
</script>

<style>

</style>