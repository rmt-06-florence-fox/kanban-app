<template>
    <div id="register-page" class="container">
        <h2> Register </h2>
        <form id="f-signup" @submit.prevent="register">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="emailsignup" placeholder="Enter email" name="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="passwordsignup" placeholder="Enter password" name="pswd" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" >Sign Up</button>           
        </form>
    </div>
</template>

<script>

// import
import axios from "axios"
export default {
    name : 'register',
    data(){
        return{
            email : '',
            password : ''
        }
    },
    methods : {
        register(){
            axios({
                url :`http://localhost:3000/register`,
                method : 'post',
                data : {
                    email : this.email,
                    password : this.password
                }
            })
            .then(({data}) => {
                console.log(data)
                this.$emit('movetomain', 'login page')
            })
            .catch(({err}) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>