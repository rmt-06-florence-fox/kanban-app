<template>
    <div id="login-page" class="loginpage row justify-content-center">
        <img src="../image/logo.png" width="600px" height="250px">
        <div class="col-5 mt-5">
        <h3 class="display-3 font-weight-bold">Register</h3>
        <form @submit.prevent="register">
            <div class="form-group">
            <label for="email">Email</label>
            <input v-model="inputRegisterEmail" type="email" class="form-control">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input v-model="inputRegisterPassword" type="password" class="form-control" placeholder="Min 6 characters">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <a @click.prevent="toLogin" href="#" id="cancel-register">Cancel</a><br><br>
            <div class="error-message"></div>
            <div class="register-success"></div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data () {
        return {
           inputRegisterEmail: '',
           inputRegisterPassword: ''
        }
    },
    methods: {
        toLogin() {
            this.$emit('toLogin')
        },
        register() {
            let payload= {
                email: this.inputRegisterEmail,
                password: this.inputRegisterPassword
            }
            this.$emit('register', payload)
        }
    }
}
</script>

<style>

</style>