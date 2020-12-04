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
            <!-- <div class="g-signin2" data-onsuccess="onSignIn">Sign In</div> -->
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data () {
        return {
            email: "",
            password: ""
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
        }

    }
}
</script>

<style>

</style>