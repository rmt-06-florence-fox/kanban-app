<template>
<!--REGISTER PAGE-->
  <div class="register-page">
    <div class="card col-sm-4">
      <article class="card-body">
        <h2 class="card-title text-center mb-4 mt-1">Sign Up Account</h2>
        <hr>
        <form @submit.prevent="signupUser">
          <div class="form-group">
            <label for="register-name" class="label">Name:</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" class="form-control" id="signup-name" v-model="signup_name" placeholder="Enter your name">
            </div>
          </div>
          <div class="form-group">
            <label for="register-email" class="label">Email address:</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
              </div>
              <input type="email" class="form-control" id="signup-email" v-model="signup_email" placeholder="Enter your email">
            </div>
          </div>
          <div class="form-group">
            <label for="register-password" class="label">Password:</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock"></i></span>
              </div>
              <input type="password" class="form-control" id="signup-password" v-model="signup_password" placeholder="Enter your password">
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block"> Sign Up  </button>
          </div>
          <p>Already have an account?<span><a href="" class="" @click.prevent="signInForm">Login</a></span></p>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
const server_url = 'https://kanban-trolle.herokuapp.com'

export default {
  data() {
    return {
      signup_name: '',
      signup_email: '',
      signup_password: ''
    }
  },

  methods: {
    signupUser() {
      const payload = {
        name: this.signup_name,
        email: this.signup_email,
        password: this.signup_password
      }

      axios({
        method: 'POST',
        url: server_url + '/signup',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
      .then(data => {
        console.log('Register Success')
        this.$emit('changePage','login')
      })
      .catch(err => {
        this.$emit('consoleErr', err)
      })
      .finally(_ => {
        this.signup_name = ''
        this.signup_email = ''
        this.signup_password = ''
      })
    },

    signInForm() {
      this.$emit('signInForm')
    }
  },
  
}
</script>

<style>
  
</style>