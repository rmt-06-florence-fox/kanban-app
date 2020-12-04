<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-8 p-5 mx-auto border border-rounded">
                <h1 class="text-center">Register</h1>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="registerEmail">Email Address</label>
                        <input type="email" class="form-control" v-model="email" placeholder="input your email">
                    </div>
                    <div class="form-group">
                        <label for="registerPassword">Password</label>
                        <input type="password" class="form-control" v-model="password" placeholder="input your password">
                    </div>
                    <div class="row">
                        <button type="submit" class="btn col-2 btn-primary ml-3">Submit</button>
                        <button @click="toLogin" class="btn col-4 btn-primary ml-3">Already Have an Account?</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "RegisterPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        register () {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/register',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(response => {
                    this.$emit("changeCurrentPage", "login")
                })
                .catch(err => {
                    console.log(err);
                })
        },
        toLogin () {
            this.$emit("changeCurrentPage", "login")
        }
    }
}
</script>

<style>

</style>