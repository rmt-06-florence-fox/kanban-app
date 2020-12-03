<template>
  <div class="login-page">
    <div class="card col-sm-4">
      <article class="card-body">
        <h2 class="card-title text-center mb-4 mt-1">Sign In to Kanban Trolle</h2>
        <hr>
        <form @submit.prevent="signinUser">
          <div class="form-group">
            <label for="login-email" class="label">Email address:</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                </div>
                <input type="email" class="form-control" v-model="signin_email" placeholder="Enter your email">
              </div>
          </div>
          <div class="form-group">
            <label for="login-password" class="label">Password:</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-lock"></i></span>
                </div>
                <input type="password" class="form-control" v-model="signin_password" placeholder="Enter your password">
              </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block"> Login  </button>
          </div>
          <p class="text-center">Don't have an account yet?<span><a href="" @click.prevent="signUpForm" id="register-button"> Register an account</a></span></p>
          <p class="text-center">or sign in with</p>
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
const server_url = 'http://localhost:3000'

export default {
  data() {
    return {
      signin_email: '',
      signin_password: '',
    }
  },
  methods: {
    signinUser() {
      const payload = {
        email: this.signin_email,
        password: this.signin_password
      }

      axios({
        method: 'POST',
        url: server_url + '/signin',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(data => {
        this.$emit('signinUser', data)
      })
      .catch(err => {
        this.$emit('consoleErr', err)
      })
      .finally(_ => {
        this.signin_email = ''
        this.signin_password = ''
      })
    },

    signUpForm() {
      this.$emit('signUpForm')
    },
  },
}
</script>

<style>
  
</style>