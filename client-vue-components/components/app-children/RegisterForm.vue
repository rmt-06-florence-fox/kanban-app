<template>
    <div class="min-vh-100 text-white background-register row">

        <form class="needs-validation d-flex flex-column justify-content-center col" @submit.prevent="register">
            <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email" class="form-control" name="email" v-model="email" required>
                <div class="invalid-feedback">Please fill out your email.</div>
            </div>

            <div class="form-group">
                <label for="password">Your Password</label>
                <input type="password" class="form-control" name="pasword" v-model="password" required>
                <div class="invalid-feedback">Please fill out your password.</div>
            </div>
            <div class="d-flex justify-content-center">
                <input type="submit" value="Register" class="btn-submit font-weight-bolder" style="background-color: #fbf6f0;">
            </div>
        </form>

        <div class="d-flex flex-column justify-content-center col">
            <div class="d-flex justify-content-end">
                <div>
                    <h3>Welcome to kanban's register page</h3>
                    <h3>Have an account? <a class="text-white" @click.prevent="showLoginPage">login here</a></h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import axios from "axios"
const axios = require("axios")
const server = require("../../server.js")

export default {
    data (){
        return {
            email : "",
            password : ""
        }
    },
    methods : {
        showLoginPage(){
            //console.log('pindah ke login')
            this.$emit('listenToLogin', 'login')
        },
        async register(){
            console.log(email, password)
            try{
                const {data} = await axios({
                    url : server + "/register",
                    method : "POST",
                    data : {email, password}
                })
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>