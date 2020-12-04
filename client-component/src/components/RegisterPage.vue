<template>
  <div>
      <div>
            <h1>Register</h1>
            <form @submit.prevent="register">
                <label for="register-email">Email</label>
                <input v-model="email" type="text" id="register-email">

                <label for="register-password">Password</label>
                <input v-model="password" type="password" id="register-password">

                <button>Submit</button>
            </form>

        </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "RegisterPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            axios({
                url: 'http://localhost:3000/user/register',
                method: 'post',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(response => {
                console.log(response)
                this.$emit('registered')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>