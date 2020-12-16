<template>
    <div class="register-card shadow rounded">
        <h5 style="text-align: center; padding-top: 20px;">Register</h5>
        <form @submit.prevent="register" id="register-form" class="mt-1">
            <div class="form-group">
                <label for="email-register">Email address</label>
                <input type="email" class="form-control" v-model="email">
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password-register">Password</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <span @click="changePage('Login Page')" class="btn btn-primary">Back</span>
        </form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        changePage() {
            this.$emit("LoginPage", "Login Page")
        },
        register() {
            let payload = {
                email: this.email,
                password: this.password
            }
            this.$emit("register", payload)
        }
    }
}
</script>

<style>

</style>