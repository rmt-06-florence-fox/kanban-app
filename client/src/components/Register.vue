<template>
    <div class="container-register">
        <form @submit.prevent="registerProcess" id="registerForm">
            <h3>Register Page</h3>
            <div class="form-group">
                <label for="emailRegister">Email Address</label>
                <input v-model="registerData.email" placeholder="yourname@example.com" type="email" class="form-control" id="emailRegister" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="passwordRegister">Password</label>
                <input v-model="registerData.password" placeholder="********" type="password" class="form-control" id="passwordRegister">
            </div>
            <button type="submit" class="btn btn-outline-dark">Register</button>
            <br><br><p>Already a user? Go Sign in <a @click="toLoginPage" role="button">here.</a></p>
        </form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data () {
        return {
            registerData: {
                email: ``,
                password: ``
            }
        }
    },
    methods: {
        registerProcess() {
            // console.log(this.registerData);
            this.$emit("register", this.registerData)
        },
        toLoginPage() {
            this.$emit("changePage", "Login Page")
        },
    }
}
</script>

<style>

</style>