<template>
  <div id="login" >
    <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" style="width: 400px; position: absolute; margin-left: 8%; margin-top: 8%;" alt="">
        <div id="login-page">
            <form @submit.prevent="login" id="form-login" class="border bg-success" >
                <h2 style="text-align: center;">login</h2>
                <label for="">email</label><br>
                <input v-model="user.email" type="email" placeholder="your email here" id="login-email" required>
                <br><br>
                <label for="">password</label><br>
                <input v-model="user.password" type="password" placeholder="your password here" id="login-password" required>
                <br><br>
                <button id="login-btn" type="submit">login</button>
                <p style="padding-top: 20%;">dont have an account? <a style="cursor: pointer; color:black;" @click="changePage" style="color: rgb(23, 26, 29);">register</a></p>   
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "LoginPage",
    data(){
        return{
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login(){
            axios({
                method: "POST",
                url: "http://localhost:3000/login",
                data: {
                    email: this.user.email,
                    password: this.user.password,
                }
            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token)
                this.$emit("PleaseChangePage", "MainPage")
            })
            .catch(error => {
                console.log("error.data")
            })
        },
        changePage(){
            this.$emit("PleaseChangePage", "RegisterPage")
        }
    }
}
</script>

<style>
    #login-page{
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 40%;
    margin-right: 35%;
    color: honeydew;  
}
/* ----login form---- */
#form-login{  
    padding-top: 20%;
    padding-bottom: 20%;
    padding-left: 60px;
    padding-right: 50px;
    border-radius: 15px;
    box-shadow: 4px 12px 12px 4px #999;
}
#login-email{
    border-radius: 15px
}
#login-password{
    border-radius: 15px
}
input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 5px 0;
    box-sizing: border-box;
    outline: none;
}
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 5px 0;
    box-sizing: border-box;
    outline: none;
}
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 5px 0;
    box-sizing: border-box;
    outline: none;
}
/* ----login btn---- */
#login-btn {
    margin-left: 10%;
    display: inline-block;
    padding: 10px 10px 10px 10px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    width: 80%;
}
#login-btn:hover {
    background-color: #3e8e41
}
#login-btn:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>