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
import axios from "axios"
import server from "../../server.js"

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
        register () {
            //console.log(this.email, this.password)
            const {email, password} = this
            axios({
                url : server + "/register",
                method : "POST",
                data : {email, password}
            })
            .then( _ => {
                console.log('register success')
                console.log('now processing login ......')

                return axios({
                    url : server + "/login",
                    method : "POST",
                    data : {email, password}
                })
               
            })
            .then(({data}) => {
                console.log(data)
                localStorage.setItem('access_token', data.access_token)
                console.log('login succeess')
                this.$emit('listenToContent', 'content')
            })
            .catch (err => {
                console.log(err.messages)
            })
        }
    }
}
</script>

<style>

</style>