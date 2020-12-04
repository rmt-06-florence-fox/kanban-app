<template>
  <section>
    <div class="main-container fullscreen">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <div class="text-center">
              <h1 class="h2">Welcome Back &#x1f44b;</h1>
              <p class="lead">Log in to your account to continue</p>
              <form @submit.prevent="login">
                <div class="form-group">
                  <input v-model="user.email" class="form-control" type="email" placeholder="Email Address" name="login-email" required />
                </div>
                <div class="form-group">
                  <input v-model="user.password" class="form-control" type="password" placeholder="Password" name="login-password" required />
                </div>
                <button class="btn btn-lg btn-block btn-primary" role="button" type="submit">
                  Log in
                </button>
                <small>Don't have an account yet? <a @click.prevent="register" href="#">Create one</a>
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
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$emit('emit-login', this.user)
    },
    register() {
      this.$emit('emit-change-page', 'register-page')
    }
  }
}
</script>

<style>

</style>