<template>
  <div>
    <div id="login-page">
        <!-- <div v-if="isError"></div> -->
        <div class="register-login-content">
            <div class="login-image-container">
                <img src="../assets/kanban-logo.svg" alt="kanban board" width="250">
            </div>
            <div class="form-container">
                <div class="login-form-title">
                    <h1>Kanban</h1>
                </div>
                <form @submit.prevent="login" id="login-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="userLogin.email" type="email" class="form-control" id="login-email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="userLogin.password" type="password" class="form-control" id="login-password" name="password" required>
                    </div>
                    <div class="login-btn-container">
                        <button class="btn mb-2" id="login-login-btn">Log in</button>
                        <button @click="changePage('register-page')" type="button" class="btn mt-2 mb-2" id="login-register-btn">Register</button>
                        <p style="text-align:center;font-weight:500">or</p>
                        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import GoogleLogin from 'vue-google-login'; 
export default {
  name: "LoginPage",
  data() {
    return {
      userLogin: {
        email: "",
        password: ""
      },
      params: {
          client_id: "861795519447-99qjkijf9agup0r284t2mp7g3g7uu4d0.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
          width: 246,
          height: 50,
          longtitle: true
      }
    }
  },
  methods: {
    login(){
      axios({
        url: "http://localhost:3000/login",
        method: "POST",
        data: this.userLogin
      })
      .then(({data}) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("fullName", data.fullName);
          this.changePage("main-page");
          // this.fetchCategories();
          // this.fetchTasks();
          Swal.fire(
              'Logged In!',
              "Welcome!",
              'success'
          );
      })
      .catch((err) => {
          console.log(err);
      })
      .finally(() => {
          this.userLogin.email = "";
          this.userLogin.password = "";
      });
    },
    onSuccess(googleUser) {
      console.log(googleUser);
      var googleToken = googleUser.getAuthResponse().id_token;
      console.log(googleToken)
      axios({
          url: "http://localhost:3000/googleLogin",
          method: "POST",
          data: {
              googleToken
          }
      })
      .then(({data}) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("fullName", data.fullName);
          Swal.fire(
              'Logged In!',
              "Welcome!",
              'success'
              )
          this.changePage("main-page");
      })
      .catch((err) => {
          console.log(err);
      })
    },
    changePage(pageName) {
      this.$emit("changePage", pageName);
    }
  },
  components: {
    GoogleLogin
  }
}
</script>
<style>
  
</style>