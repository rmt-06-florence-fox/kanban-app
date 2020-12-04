<template>
    <div id="register" class="container front">
        <div class="register">
            <img src="../image/register.svg" class="front-img">
        </div>
    
        <div class="register form">
            <form @submit.prevent="register" id="register-form">
                <div class="form-group">
                    <label for="name-register">Name</label>
                    <input v-model="name" type="text" class="form-control" id="name-register">
                </div>
                <div class="form-group">
                    <label for="email-register">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="email-register">
                </div>
                <div class="form-group">
                    <label for="password-register">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password-register">
                </div>
                <button type="submit" class="btn btn-success">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterPage",
    data () {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        register(){
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            console.log(payload)
            this.$emit("register", payload)            
        },
    },

}
</script>

<style>

</style>