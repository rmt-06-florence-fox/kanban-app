<template>
  <div id="login-page" class="container z-depth-3 y-depth-3 x-depth-3">
    <div class="row">
      <div class="col s12 center">
        <h3>Login Form</h3>
      </div>
      <form @submit.prevent="login" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="loginData.email"
              id="login-email"
              type="email"
              class="validate"
            />
            <label for="login-email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="loginData.password"
              id="login-password"
              type="password"
              class="validate"
            />
            <label for="login-password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button
              type="submit"
              name="btn_login"
              class="col s12 btn btn-large waves-effect indigo"
            >
              Login
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <center>
              <GoogleLogin
                :params="params"
                :renderParams="renderParams"
                :onSuccess="onSuccess"
              ></GoogleLogin>
            </center>
          </div>
        </div>
      </form>

      <center>
        <div>
          <a href="#" @click="showRegister">Create Account</a>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      params: {
        client_id:
          "584995273301-7sl4invh0vdsoqedbfbv6nkmt5p691c2.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$emit("loginApp", this.loginData);
    },
    showRegister() {
      this.$emit("showRegisterApp");
    },
    onSuccess(googleUser) {
      var id_token = googleUser.getAuthResponse().id_token;
      console.log(id_token);

      axios({
        method: "POST",
        url: "http://localhost:3000/users/googlesignin",
        data: {
          id_token: id_token,
        },
      });
    },
  },
  components: {
    GoogleLogin,
  },
};
</script>

<style></style>
