<template>
  <div id="register">
        <img src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png" style="width: 400px; position: absolute; margin-left: 8%; margin-top: 8%;" alt="">
        <div id="register-page">
            <form @submit.prevent="register"  id="form-register" class="border bg-success">
                <h2 style="text-align: center;">register</h2>
                <label for="">fullname</label><br>
                <input v-model="user.name" type="text" placeholder="your fullname here" id="register-fullname" required>
                <br><br>
                <label for="">email</label><br>
                <input v-model="user.email" type="email" placeholder="your email here" id="register-email" required>
                <br><br>
                <label for="">password</label><br>
                <input v-model="user.password" type="password" placeholder="your password here" id="register-password" required>
                <br><br>
                <button type="submit" id="register-btn">register</button>
                <p style="padding-top: 20%;">already have an account? <a style="cursor: pointer; color:black;" @click="changePage" style="color: rgb(23, 26, 29);">login</a></p>   
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: "RegisterPage",
    data(){
        return {
            user:{
                name:"",
                email:"",
                password:"" 
            }
            
        }
    },
    methods: {
        register(){
            axios({
                method: "POST",
                url: "http://localhost:3000/register",
                data: {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                }
            })      
            .then((response) => {
                console.log(response.data)
                this.$emit("PleaseChangePage", "LoginPage")
            })
            .catch(error => {
                console.log(error)
            })
        },
        changePage(){
            this.$emit("PleaseChangePage", "LoginPage")
        }
    }
}
</script>

<style>
    /* ----register page---- */
#register-page{   
    margin-top: 10%;
    margin-bottom: 40%;
    margin-left: 40%;
    margin-right: 35%;
    color: honeydew;    
}
/* ----register form---- */
#form-register{  
    padding-top: 20%;
    padding-bottom: 20%;
    padding-left: 60px;
    padding-right: 50px;
    border-radius: 15px;
    box-shadow: 4px 12px 12px 4px #999;
}
#register-fullname{
    border-radius: 15px
}
#register-email{
    border-radius: 15px
}
#register-password{
    border-radius: 15px
}

/* ----register btn---- */
#register-btn {
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
#register-btn:hover {
    background-color: #3e8e41
}
#register-btn:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>