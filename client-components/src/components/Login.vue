<template>
  <section>
    <div class="container">
      <div class="row" style="min-height: 900px">
        <div class="col-sm d-flex justify-content-center align-items-center">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Log In</a>
                </li>
                <li class="nav-item text-black">
                  <a class="nav-link" href="#" @click="register">Register</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-group text-left">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="form-group text-left">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                  />
                </div>
                <div class="text-left">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
              <br />
              <p class="text-left">Or continue with Google</p>
              <div class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  props: ["dataTasks"],
  name: "Login-Page",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios({
        method: "POST",
        url: "http://localhost:3000/login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("UserId", response.data.UserId);
          this.$emit("changePage", "main page");
          this.dataTasks();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.email = "";
          this.password = "";
        });
    },
    register() {
      localStorage.setItem("register", 123);
      this.$emit("changePage", "register");
    },
    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
  },
};
</script>

<style>
</style>