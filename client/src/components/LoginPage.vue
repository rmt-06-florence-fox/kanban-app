<template>
  <div class="loginPage">
    <div class="card card0" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3"> <img id="logo" src="https://www.freepnglogos.com/uploads/logo-mobile-legend-png/logo-mobile-legend-tcash-apapun-operatornya-semua-bisa-paketcash-18.png"> </div>
                        <h3 class="mb-5 text-center heading"><strong>We are Kanbaban!</strong></h3>
                        <h6 class="msg-info">Login and organize your tasks with us!</h6>
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label class="form-control-label text-muted">Email</label>
                                <input v-model="email" type="text" id="email" name="email" placeholder="Enter your email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label text-muted">Password</label>
                                <input v-model="password" type="password" id="psw" name="psw" placeholder="Enter your password" class="form-control">
                            </div>
                            <div class="row justify-content-center my-3 px-3">
                                <button type="submit" class="btn-block btn-color">Start organizing</button>
                            </div>
                        </form>                       
                    </div>
                    <GoogleLogin class="row justify-content-center" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                </div>
                <div class="bottom text-center mb-5">
                    <p href="#" class="sm-text mx-auto mb-3">Don't have an account?<button class="btn btn-white ml-2" @click.prevent="goToRegister">Join us</button></p>
                </div>
            </div>
            <div class="card card2">
                <div class="my-auto mx-md-5 px-md-5 right">
                    <h3 class="text-white"><strong>No more messy desk and all those sticky notes!</strong></h3> <br><small class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import axios from "axios"
import GoogleLogin from 'vue-google-login'
import { LoaderPlugin } from 'vue-google-login'
import Vue from 'vue'

Vue.use(LoaderPlugin, {
    client_id: "994279102205-ha32cicdqvcdpmkggvbl5k2b58r03qar.apps.googleusercontent.com"
});

Vue.GoogleAuth.then(auth2 => {
        console.log(auth2.isSignedIn.get());
        console.log(auth2.currentUser.get())
    })

export default {
    data() {
        return {
            params: {
                client_id: "994279102205-ha32cicdqvcdpmkggvbl5k2b58r03qar.apps.googleusercontent.com"
            },
            // only needed if you want to render the button with the google ui
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            },
            email: "",
            password: "",
        }
    },
    components: {
        GoogleLogin
    },
    methods: {
        onSuccess(googleUser) {
            console.log(googleUser.wt.cu);
            this.email = googleUser.wt.cu
            this.password = "-UmFTa8dEi8kUemEB99mPb3j"
            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
            // localStorage.setItem('access_token', '994279102205-ha32cicdqvcdpmkggvbl5k2b58r03qar.apps.googleusercontent.com')
            axios({
                method: 'post',
                    url: 'https://kanbaban.herokuapp.com/register',
                    data: {
                        email: this.email,
                        password: this.password
                    }
            })
            .then(response => {
                this.login()
            })
            .catch(err => {
                this.login()
            })
        },
        login() {
            console.log('login pak eko');
            axios({
                method: 'post',
                url: 'http://kanbaban.herokuapp.com/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                this.$emit('changePage', 'home')
            })
            .catch(err => {
                console.log(err.response);
                let message = err.response.data
                Swal.fire({
                    title: message,
                    icon: 'error',
                
                })
            })
            
        },
        goToRegister() {
            this.$emit('changePage', 'register')
        }
    }
}
</script>

<style>
.loginPage {
    position: relative;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%, 5%);
    padding-top: 0px;
    margin-bottom: 100px
    
}

input,
textarea {
    background-color: #F3E5F5;
    border-radius: 50px !important;
    padding: 12px 15px 12px 15px !important;
    width: 100%;
    box-sizing: border-box;
    border: none !important;
    border: 1px solid #F3E5F5 !important;
    font-size: 16px !important;
    color: #000 !important;
    font-weight: 400
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #007991 !important;
    outline-width: 0;
    font-weight: 400
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.card {
    border-radius: 0;
    border: none
}

.card1 {
    width: 50%;
    padding: 
}

.card2 {
    width: 50%;
    background-image: linear-gradient(to right, #007991, #78ffd6)
}

#logo {
    width: 250px;
    
}

.heading {
    margin-bottom: 60px !important;
    font-size: 25px;
}

::placeholder {
    color: #000 !important;
    opacity: 1
}

:-ms-input-placeholder {
    color: #000 !important
}

::-ms-input-placeholder {
    color: #000 !important
}

.form-control-label {
    font-size: 12px;
    margin-left: 15px
}

.msg-info {
    padding-left: 15px;
    margin-bottom: 30px
}

.btn-color {
    border-radius: 50px;
    color: #fff;
    background-image: linear-gradient(to right, #007991, #78ffd6);
    padding: 15px;
    cursor: pointer;
    border: none !important;
    margin-top: 40px
}

.btn-color:hover {
    color: #fff;
    background-image: linear-gradient(to right, #78ffd6, #007991)
}

.btn-white {
    border-radius: 50px;
    color: #007991;
    background-color: #fff;
    padding: 8px 40px;
    cursor: pointer;
    border: 2px solid #007991 !important
}

.btn-white:hover {
    color: #fff;
    background-image: linear-gradient(to right, #78ffd6, #007991)
}

a {
    color: #000
}

a:hover {
    color: #000
}

.bottom {
    width: 100%;
    margin-top: 50px !important
}

.sm-text {
    font-size: 15px
}

@media screen and (max-width: 992px) {
    .card1 {
        width: 100%;
        padding: 40px 30px 10px 30px
    }

    .card2 {
        width: 100%
    }

    .right {
        margin-top: 100px !important;
        margin-bottom: 100px !important
    }
}

@media screen and (max-width: 768px) {
    .container {
        padding: 10px !important
    }

    .card2 {
        padding: 50px
    }

    .right {
        margin-top: 50px !important;
        margin-bottom: 50px !important
    }
}
</style>

