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
          <GoogleLogin class="d-flex justify-content-center" :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import GoogleLogin from 'vue-google-login'
const server_url = 'http://localhost:3000'

export default {
  components: {
    GoogleLogin
  },
  data() {
    return {
      params: {
        client_id: "529209285357-d41osmq467u8omuavlk9oio2mc25o6p6.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
          width: 250,
          height: 50,
          longtitle: true
      },
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

    onSuccess(googleUser) {
      const googleToken = googleUser.getAuthResponse().id_token;
      console.log(googleToken)

      axios({
        url: server_url + '/google-sign-in',
        method: "POST",
        data: {
          googleToken
        }
      })
      .then(data => {
        this.$emit('loginGoogle', data)
      })
      .catch(err => {
        this.$emit('consoleErr', err)
      })
    }
  },
}
</script>

<style>
  
</style>