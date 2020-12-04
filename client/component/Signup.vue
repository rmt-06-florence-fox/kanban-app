<template>
  <div class="form-container">
    <div class="input form" id="SignUp">
      <h1>Sign Up</h1>
      <br />
      <form @submit.prevent="signup" id="signup">
        <div class="form-group rounded">
          <label for="input-email">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="input-email"
            aria-describedby="emailHelp"
          />
          <small class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="input-password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="input-password"
          />
        </div>
        <span @click.prevent="toSignin" class="btn btn-link"
          >Have an Account? Sign In now!</span
        ><br />
        <button class="btn btn-outline-dark inputButton">Sign Up</button>
      </form>
    </div>
    <div class="input img">
      <img src="../asset/img/taxi-school-props.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    toSignin() {
      const value = {
        page: 'signin'
      }
      this.$emit("changePage", value.page)
    },
    signup() {
      const value = {
        email: this.email, 
        password: this.password
      }
      // console.log(value);
      this.$emit("signup", value)
      this.clearForm()
    },
    clearForm() {
      this.email= '',
      this.password= ''
    }
  }
};
</script>

<style>
</style>