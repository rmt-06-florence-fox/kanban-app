<template>
  <form class="container col-md-6 col-sm-6 p-5 mt-5 cust-container rounded" @submit.prevent="doSignIn">
    <div class="form-group">
      <label for="email-login">Email: </label>
      <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="enter your email">
      <small class="cust-small-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password-login">Password: </label>
      <input type="password" class="form-control" v-model="password" placeholder="enter your password">
    </div>
    <div class="mt-5 btn-form">
      <button type="submit" class="btn-color-navbar btn btn-signin text-color ml-3 mr-3"><strong>Sign In</strong></button>
      <h6 class="mt-2">OR</h6>
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure" class="ml-3 mr-3 rounded"></GoogleLogin>
    </div>
  </form>
</template>

<script>
  import GoogleLogin from 'vue-google-login'

  export default {
    props: ['changeLogin', 'onFailure'],
    data() {
      return {
        email: '',
        password: '',
        params: {
          client_id: "31610476291-ipg9c739e6kj3um420fm5h5n1emibk6g.apps.googleusercontent.com"
        },
        renderParams: {
          width: 100,
          longtitle: false
        }
      }
    },
    components: {
      GoogleLogin
    },
    methods: {
      doSignIn() {
        this.$api({
          method: 'post',
          url: 'signin',
          data: { email: this.email, password: this.password }
        })
          .then(({ data }) => {
            let name = ''
            for (let i = 0; i < this.email.length; i++) {
              if (this.email[i] === '@') break
              else if (i === 0) name += this.email[i].toUpperCase()
              else if (this.email[i] === '.') name += ' '
              else if (this.email[i - 1] === '.') name += this.email[i].toUpperCase()
              else name += this.email[i]
            }
            localStorage.setItem('access_token', data.access_token)
            this.changeLogin(true)
            swal(`Welcome, ${name}`, {
              icon: 'success',
              buttons: false,
              timer: 2500
            })
          })
          .catch(err => console.log(err))
          .finally(() => {
            this.email = ''
            this.password = ''
          })
      },
      onSuccess(googleUser) {
        const google_token = googleUser.getAuthResponse().id_token
        this.$api({
          method: 'post',
          url: 'googlesignin',
          data: { google_token }
        })
          .then(({ data }) => {
            let name = ''
            for (let i = 0; i < data.email.length; i++) {
              if (data.email[i] === '@') break
              else if (i === 0) name += data.email[i].toUpperCase()
              else if (data.email[i] === '.') name += ' '
              else if (data.email[i - 1] === '.') name += data.email[i].toUpperCase()
              else name += data.email[i]
            }
            localStorage.setItem('access_token', data.access_token)
            this.changeLogin(true)
            swal(`Welcome, ${name}`, {
              icon: 'success',
              buttons: false,
              timer: 2500
            })
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style>

</style>