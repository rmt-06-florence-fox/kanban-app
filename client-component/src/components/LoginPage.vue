<template>
  <div>
      <div>
            <h1>Login</h1>
            <form @submit.prevent="login">
                <label for="login-email">Email</label>
                <input v-model="email" type="text" id="login-email">

                <label for="login-password">Password</label>
                <input v-model="password" type="password" id="login-password">

                <button>Submit</button>
                <br>
                <br>
                <button @click="registered">Register</button>

            </form>

        </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        registered() {
            this.$emit("registered")
        },
        login() {
            axios({
                url: 'https://kanban-app-florencefox.herokuapp.com/user/login',
                method: 'post',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(response => {
                console.log(response)
                this.$emit("loggedIn")
                localStorage.setItem('access_token', response.data.access_token)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(_ => {
                this.email = ''
                this.password = ''
            })
        }
    }
}
</script>

<style>

</style>