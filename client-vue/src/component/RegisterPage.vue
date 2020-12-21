<template>
  <div id="register-page" class="container z-depth-3 y-depth-3 x-depth-3">
    <div class="row">
      <div class="col s12 center">
        <h3>Register Form</h3>
      </div>
      <form @submit.prevent="register" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="registerData.email"
              id="register-email"
              type="email"
              class="validate"
            />
            <label for="register-email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="registerData.password"
              id="register-password"
              type="password"
              class="validate"
            />
            <label for="register-password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button
              type="submit"
              name="btn_login"
              class="col s12 btn btn-large waves-effect indigo"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <center>
        <div>
          <a href="#" @click="showLogin">Login</a>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      this.$emit("registerApp", this.registerData);
    },

    showLogin() {
      this.$emit("showLoginApp");
    },
  },
};
</script>

<style></style>
