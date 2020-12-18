<template>
    <div id="login-page" class="container">
        <h2> Login </h2>
        <form id="f-signin" @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="emailsignin" placeholder="Enter email" name="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="passwordsignin" placeholder="Enter password" name="pswd" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click="login">Sign In</button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name : 'login',
    data(){
        return {
            email : '',
            password : '' 
        }
    }, 
    methods : {
        login(){
            axios({
                method : 'post',
                url :`http://localhost:3000/login`,
                data : {
                    email : this.email,
                    password : this.password
                }
            })
            .then(({data}) => {
                let access_token = localStorage.setItem('access_token', data.access_token)
                this.$emit('movetomain', 'main page')
            })
            .catch(err => {
                console.log(err);
            })
        },
        // onSignIn(googleUser){
        //     var tokenGoogle = googleUser.getAuthResponse().id_token;
        //     axios({
        //         method : 'post',
        //         url :`http://localstorage:3000/logingoogle`,
        //         data : {
        //             tokenGoogle
        //         }
        //     })
        //     .then(data => {
        //         this.$emit('movetomain', 'home page')
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // }
    }
}
</script>

<style>

</style>