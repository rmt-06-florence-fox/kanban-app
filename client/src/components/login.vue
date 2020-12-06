<template>
  <!---------------------------------------------------------------------- login page ---------------------------------------------------------------------->
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="page-login"
    >
    <div class="max-w-md w-full space-y-8">
        <div>
            <div class="text-5xl font-extrabold mx-auto text-center select-none">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Kanbund
                </span>
                <div class="text-sm text-center	text-blue-700 text-opacity-75 mt-2 mb-2">
                    Mulai aktif ya Bund!
                </div>
            </div>
            <h2 class="mt-6 text-center text-2xl font-bold text-gray-900">
                LOGIN
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Or
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500" @click="goTo('pg-register')">
                register if you don't have an account
                </a>
            </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="login()">
        <!-- <input type="hidden" name="remember" value="true"> -->
        <div class="rounded-md shadow-sm -space-y-px">
            <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"
            v-model="loginForm.email" >
            </div>
            <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
            v-model="loginForm.password" >
            </div>
        </div>

        <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign in
            </button>
            <errorBox v-if="errorData"
                        :errorData="errorData"
                        @setTime="setTime"
            ></errorBox>
            <div class="text-sm text-center	text-purple-700 text-opacity-50 mt-2 mb-2">
                - you can also login with your google account -
            </div>
            <button v-google-signin-button="clientId" 
            class="google-signin-button group relative w-full flex justify-center 
            py-2 px-4 border border-transparent text-sm font-medium rounded-md 
            shadow-md border-2 border-black
            bg-gray-100 hover:bg-gray-400 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-gray-400 content-center space-x-4"> 
            <div>
                <i class="fa fa-google"></i>
            </div>
            <div>
                Continue with Google
            </div>
            </button>
        </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import errorBox from './errorBox'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
    directives: {
    GoogleSignInButton
    },
    name: 'login',
    components: {
        errorBox
    },
    data () {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            errorData: '',
            clientId: '933751725142-r6kigcfiggubij3u1jl3t87rfrshe5mg.apps.googleusercontent.com'
        }
    },
    methods: {
        login () {
            axios({
                method: 'post',
                url: 'https://kanban-app-wypratama.herokuapp.com/login',
                data: {
                  email: this.loginForm.email,
                  password: this.loginForm.password
                }
              })
              .then((res) => {
                // handle 
                localStorage.setItem('access_token', res.data.access_token)
                // this.getTaskList()
                this.$emit('choosePage')
              })
              .catch((error) => {
                // handle error
                // handle error
                    if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    this.errorData = error.response.data.error
                    } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    }
                    console.log(error.config);
                    console.log(error.response.data.error)
                
              })
              .then(_=> {
                // always executed
                this.loginForm.email = ''
                this.loginForm.password = ''
              });
        },
        goTo (page) {
            this.$emit('goTo',page)
        },
        setTime () {
            console.log('setTime')
            setTimeout(_=> {
                this.errorData = ''
            }, 2000)
        },
        onSignIn (googleUser) {
            this.$emit('onSignIn', googleUser)
            console.log('mulai sign in', googleUser)
        },
        OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
            this.$emit('onSignIn', idToken)
            console.log(idToken)
        },
        OnGoogleAuthFail (error) {
        console.log(error)
        }
    }
}
</script>

<style>
/* .google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} */
</style>