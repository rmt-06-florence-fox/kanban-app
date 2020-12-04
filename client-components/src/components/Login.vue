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
              <GoogleLogin
                :params="params"
                :renderParams="renderParams"
                :onSuccess="onSuccess"
                
              ></GoogleLogin>
              <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import GoogleLogin from "vue-google-login";

export default {
  components: {
    GoogleLogin,
  },
  props: ["dataTasks"],
  name: "Login-Page",
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "166375431684-efkve6dh1ehpk1ic1m0sd818as9bpf78.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    onSuccess(googleUser) {
      let googleToken = googleUser.getAuthResponse().id_token;
      console.log(googleToken);
      axios({
        method:'POST',
        url: 'https://kanban-server-apps.herokuapp.com/googleLogin',
        data: {
          googleToken
        }
      })
        .then(response=>{
          // console.log(response.data, '<<');
          localStorage.setItem('access_token', response.data.access_token)
          this.$emit("changePage", "main page");
          this.dataTasks();

        })
        .catch(err => {
          console.log(err);
        })
    },
    login() {
      axios({
        method: "POST",
        url: "https://kanban-server-apps.herokuapp.com/login",
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
  },
};
</script>

<style>
</style>