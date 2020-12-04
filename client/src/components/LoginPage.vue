<template>
  <section class="login-page">
    <div class="container">
      <form @submit.prevent="login">
        <div class="text-center mb-3">
          <img src="/assets/kanban2.png" alt="kanban-logo" width="100px" />
          <p class="form-text text-muted">Login Account</p>
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email-login"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password-login"
          />
        </div>
        <button type="submit" class="btn btn-form mb-3">Login</button>
        <button
          type="button"
          class="btn btn-secondary mb-3"
          @click="registerPage"
        >
          Don't have Account
        </button>
        <div>
          <button
            type="button"
            v-google-signin-button="clientId"
            class="btn btn-danger"
          >
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: "",
      password: "",
      clientId:
        "965954498989-evrlh6tddu3j4vcudsfdcd5ma4ug1k9r.apps.googleusercontent.com",
    };
  },
  methods: {
    login() {
      let payload = {
        email: this.email,
        password: this.password,
      };
      this.$emit("loginData", payload);
    },
    registerPage() {
      this.$emit("registerPage", "Register Page");
    },

    OnGoogleAuthSuccess(idToken) {
      this.$emit("loginGoogle", idToken);
    },

    OnGoogleAuthFail(error) {
      console.log(error);
    },
  },
};
</script>