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

            <div class="text-sm text-center	text-purple-700 text-opacity-50 mt-2 mb-2">
                - you can also login with your google account -
            </div>

            <div class="g-signin2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md " data-onsuccess="onSignIn"></div>
        </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'login',
    data () {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login () {
            axios({
                method: 'post',
                url: 'http://localhost:3000/login',
                data: {
                  email: this.loginForm.email,
                  password: this.loginForm.password
                }
              })
              .then((res) => {
                // handle 
                localStorage.setItem('access_token', res.data.access_token)
                // this.getTaskList()
                this.goTo('pg-homepage')
              })
              .catch((error) => {
                // handle error
                console.log(error);
              })
              .then(_=> {
                // always executed
                this.loginForm.email = ''
                this.loginForm.password = ''
              });
        },
        goTo (page) {
            this.$emit('goTo',page)
        }
    }
}
</script>

<style>

</style>