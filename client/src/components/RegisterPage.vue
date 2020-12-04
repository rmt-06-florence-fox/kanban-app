<template>
  <section class="register-page">
    <div class="container">
      <form @submit.prevent="register">
        <div class="text-center mb-3">
          <img src="/assets/kanban2.png" alt="kanban-logo" width="100px" />
          <p class="form-text text-muted">Register Account</p>
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email-register"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password-register"
          />
        </div>
        <button type="submit" class="btn btn-form mb-3">Register</button>
        <button type="button" class="btn btn-secondary mb-3" @click="loginPage">
          I have Account
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register(){
      let payload = {
        email: this.email,
        password: this.password
      }
      this.$emit("registerData", payload)
    },
    loginPage() {
      this.$emit("loginPage", "Login Page");
    },
  },
};
</script>