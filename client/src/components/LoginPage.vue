<template>
  <div class="container-fluid text-center">
    <form class="form-signin" @submit.prevent="login">
      <img
        class="rounded-circle"
        src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg"
        alt=""
        width="100"
        height="100"
      />
      <br />
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="email" class="sr-only">Email address</label>
      <input
        type="email"
        v-model="email"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="password" class="sr-only">Password</label>
      <input
        type="password"
        v-model="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-success btn-inline" type="submit">
        Login
      </button>
      <button
        class="btn btn-lg btn-secondary btn-inline"
        type="button"
        @click="toRegister"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    toRegister() {
      this.$emit("to-register", "register");
    },
    login() {
      console.log(this.email, "===", this.password);
      localStorage.setItem("access_token", this.password);
      this.$emit("loggedIn", "MainPage");
    },
  },
};
</script>

<style>
button {
  width: 49%;
}
</style>
