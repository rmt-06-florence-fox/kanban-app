<template>
  <div class="form-container" id="SignIn">
    <div class="input form">
      <form @submit.prevent="signin" id="signin">
        <h1>Sign In</h1>
        <br />
        <div class="form-group rounded">
          <label for="input-email">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="input-email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="input-password">Password</label>
          <input 
            v-model="password"
            type="password" 
            class="form-control" 
            id="input-password" />
        </div>
        <span @click="toSignup" class="btn btn-link"
          >Doesn't have an Account? Sign Up now! </span
        ><br />
        <button type="submit" class="btn btn-outline-dark inputButton">
          Sign In
        </button>
      </form>
    </div>
    <div class="input img">
      <img src="../asset/img/taxi-waiting.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toSignup() {
      let value = {
        page: 'signup'
      }
      this.$emit("changePage", value.page)
    },
    signin() {
      const value = {
        email: this.email,
        password: this.password
      }
      this.$emit("signin", value)
      this.clearForm()
    },
    clearForm() {
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>
</style>