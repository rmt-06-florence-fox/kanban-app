<template>
  <div id="register-page" class="container-fluid text-center">
    <form class="form-signin" @submit.prevent="register">
      <img
        class="rounded-circle"
        src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg"
        alt=""
        width="100"
        height="100"
      />
      <br />
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <label for="name" class="sr-only">Name</label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        placeholder="Name"
        required
        autofocus
      />
      <label for="email" class="sr-only">Email address</label>
      <input
        type="email"
        v-model="regEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="password" class="sr-only">Password</label>
      <input
        type="password"
        v-model="regPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-success btn-inline" type="submit">
        Register
      </button>
      <button
        class="btn btn-lg btn-secondary btn-inline"
        type="button"
        @click="toLogin"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Register",
  data() {
    return {
      name: "",
      regEmail: "",
      regPassword: "",
    };
  },
  methods: {
    toLogin() {
      this.$emit("to-login", "login");
    },
    register() {
      console.log(this.name, "--", this.regEmail, "--", this.regPassword);
      // Axios
      this.toLogin();
    },
  },
};
</script>

<style>
button {
  width: 49%;
}
</style>
