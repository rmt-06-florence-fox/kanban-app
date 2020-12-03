<template>
    <div class="min-vh-100 text-white background-login row">
        <div class="col d-flex flex-column justify-content-center">
            <h3>Welcome to kanban</h3>
            <h3>Do not have an account? <a href="" class="text-white" @click.prevent="showRegisterPage">register here</a></h3>
        </div>

        <div class="col d-flex flex-column justify-content-center">
            <form class="needs-validation" @submit.prevent="login">
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" class="form-control" name="email" v-model="email" required>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
            
                <div class="form-group">
                    <label for="password">Your Password</label>
                    <input type="password" class="form-control" name="pasword" v-model="password" required>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="d-flex justify-content-center">
                    <input type="submit" value="Login" class="btn-submit font-weight-bolder" style="background-color: #fbf6f0;">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import server from "../../server.js"
import axios from "axios"

export default {
    name : "LoginForm",
    data (){
        return {
            email : "",
            password : ""
        }
    },
    methods : {
        showRegisterPage(){
            //console.log('pindah ke register')
            this.$emit('listenToRegister', 'register')
        },
        login(){
            const {email, password} = this

            axios({
                url : server + "/login",
                method : 'POST',
                data : {email, password} 
            })
            .then( ({data}) => {
                //console.log(data)
                localStorage.setItem('access_token', data.access_token)
                this.$emit('listenToContent', 'content')
            })
            .catch (err => {
                console.log(err)
            })
        }
    }

}
</script>

<style>

</style>