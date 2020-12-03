<template>
    <div id="login-page" class="loginpage row justify-content-center">
        <img src="../image/logo.png" width="600px" height="250px">
        <div class="col-4 mt-5">
        <h1 class="display-3 font-weight-bold">Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" class="form-control" >
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="input-password" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <a @click.prevent="toRegister" href="#" id="register-link">Register now</a><br><br>
            <hr>
            <div class="error-message"></div>
            <div class="register-success"></div>
        </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'loginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            let payload = {
                email: this.email,
                password: this.password
            }
            this.$emit('login', payload)
        },
        toRegister() {
            this.$emit('toRegister')
        }
    }
}
</script>

<style>

</style>