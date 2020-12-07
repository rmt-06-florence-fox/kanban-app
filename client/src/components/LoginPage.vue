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
      <!-- <label for="email" class="sr-only">Email addresse</label> -->
      <input
        type="email"
        v-model="input.email"
        class="form-control"
        placeholder="Email address"
        autocomplete="current-email"
        required
        autofocus
      />
      <!-- <label for="password" class="sr-only">Password</label> -->
      <input
        type="password"
        v-model="input.password"
        class="form-control"
        placeholder="Password"
        autocomplete="current-password"
        required
      />
      <button
        id="loglogbutton"
        class="btn btn-lg btn-success btn-inline"
        type="submit"
      >
        Login
      </button>
      <button
        id="logregbutton"
        class="btn btn-lg btn-secondary btn-inline"
        type="button"
        @click="toRegister"
      >
        Register
      </button>
    </form>
    <div class="custom">
      <social-login></social-login>
    </div>
  </div>
</template>

<script>
import SocialLogin from "./SocialLogin";

export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    SocialLogin,
  },
  methods: {
    toRegister() {
      this.$emit("to-register", "register");
    },
    login() {
      this.$emit("login", "MainPage", this.input);
    },
  },
};
</script>

<style>
#loglogbutton,
#logregbutton {
  width: 200px !important;
}
</style>
