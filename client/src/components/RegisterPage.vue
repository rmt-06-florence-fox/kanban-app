<template>
  <section>
    <div class="main-container fullscreen">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <div class="text-center">
              <h1 class="h2">Create account</h1>
              <p class="lead">Start doing things for free, in an instant</p>
              <button v-google-signin-button="clientId" class="btn btn-lg btn-block btn-primary">
                <img alt="Google" src="../assets/img/logo-google.svg" class="rounded align-top mr-2" />Continue with Google
              </button>
              <hr>
              <form @submit.prevent="register">
                <div class="form-group">
                  <input v-model="user.email" class="form-control" type="email" placeholder="Email Address" name="create-account-email" />
                </div>
                <div class="form-group">
                  <input v-model="user.password" class="form-control" type="password" placeholder="Password" name="create-account-password" />
                  <div class="text-left">
                    <small>Your password should be at least 4 characters</small>
                  </div>
                </div>
                <button class="btn btn-lg btn-block btn-primary" role="button" type="submit">
                  Create account
                </button>
                <small>You have an account? <a @click.prevent="login" href="#">Login</a>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      clientId:'247629122397-sbvtcoq25g75re1qjmbqi9rf4tsadgte.apps.googleusercontent.com'
    }
  },
  methods: {
    login() {
      this.$emit('emit-change-page', 'login-page')
    },
    register() {
      this.$emit('emit-register', this.user)
    },
    OnGoogleAuthSuccess (idToken) {
      this.$emit('googleSignIn', idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>