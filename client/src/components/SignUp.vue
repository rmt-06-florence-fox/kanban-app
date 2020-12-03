<template>
  <form class="container col-md-6 col-sm-6 p-5 cust-form-p mt-5 cust-container rounded">
    <div class="cust-btn-back">
      <button type="submit" class="btn-color-navbar btn btn-back text-color mb-4" @click.prevent="backToSignIn"><strong>Back</strong></button>
    </div>
    <div class="form-group">
      <label for="email-login">Email: </label>
      <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="example: han@gmail.com" required>
      <small class="cust-small-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password-login">Password: </label>
      <input v-model="password" type="password" class="form-control" placeholder="enter your password" required>
    </div>
    <div class="mt-5 btn-form">
      <button type="submit" class="btn-color-navbar btn btn-signin text-color ml-3 mr-3" @click.prevent="doSignUp"><strong>Sign Up</strong></button>
    </div>
  </form>
</template>

<script>
  import swal from 'sweetalert'
  export default {
    props: ['signUpUser', 'changeLogin'],
    data() {
      return { email: '', password: '' }
    },
    methods: {
      backToSignIn() {
        this.signUpUser(true)
      },
      doSignUp() {
        this.$api({
          method: 'post',
          url: 'signup',
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
          .catch(err => {
            // console.log(err)
            // if (err.status === 400) console.log(err.message)
          })
          .finally(() => {
            this.email = ''
            this.password = ''
          })
      }
    }
  }
</script>

<style>

</style>