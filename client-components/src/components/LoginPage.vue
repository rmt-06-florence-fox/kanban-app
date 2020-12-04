<template>
  <div class="form-login">
    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <label for="email-form">email :</label>
      <input v-model="user.email" type="email" id=email-form><br>
      <label for="password-form">Password :</label>
      <input v-model="user.password" type="password" id=password-form><br>
      <a @click="changePage" href="#">Register</a>
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess">
      </GoogleLogin>
      <button class="btn btn-info">Login</button>
    </form>
  </div>
</template>

<script>
  import GoogleLogin from 'vue-google-login';

  export default {
    components: {
      GoogleLogin
    },
    name: 'LoginPage',
    data() {
      return {
        user: {
          email: '',
          password: ''
        },
        params: {
          client_id: "110578396912-f9dvugemjrcs14jefqbbhrv9r88nmdms.apps.googleusercontent.com"
        },
        // only needed if you want to render the button with the google ui
        renderParams: {
          width: 250,
          height: 50,
          longtitle: true
        }
      }
    },
    methods: {
      login() {
        let payload = {
          email: this.user.email,
          password: this.user.password
        }

        this.$emit('login', payload)
        this.user.email = ''
        this.user.password = ''
      },
      changePage() {
        let payload = {
          pageName: 'registerPage'
        }

        this.$emit('changePage', payload)
      },
      onSuccess(googleUser) {
        const googleToken = googleUser.getAuthResponse().id_token;

        this.$emit('onSuccess', {googleToken})
      }
    }

  }
</script>

<style>

</style>