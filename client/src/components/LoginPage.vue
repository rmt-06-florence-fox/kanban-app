<template>
  <div class="hero-body bg-img img-responsive">
    <div class="container">
      <div class="columns is-centered ">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box">
            <figure class="image container is-64x64">
              <img
                src="https://cdn150.picsart.com/upscale-236338758032212.png?type=webp&to=min&r=640"
              />
            </figure>
            <div class="mb-2">
              <h1>Login</h1>
            </div>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. icanq@gmail.com"
                  class="input"
                  v-model="email"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  type="password"
                  placeholder="*******"
                  class="input"
                  v-model="password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="has-text-centered">
              <small>
              <a href="#" @click.prevent="toRegister"
                >don't have any account?</a
              >
              </small>
            </div>
            <div class="mt-2 has-text-centered">
              <button class="button is-success" @click.prevent="doLogin">
                Login
              </button>
                or
              <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" class="button is-info"><i class="fab fa-google"></i></GoogleLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import GoogleLogin from "vue-google-login"

export default {
  name: "loginPage",
  props: ["changeStatus", "checkAcc", 'onFailure', 'getTasks'],
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      params: {
      client_id: "746341659297-pd0m5n70c8mvq49gqmis9rglh4f9l9m6.apps.googleusercontent.com"
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    toRegister() {
      this.checkAcc(false);
    },
    doLogin() {
      this.$api({
        method: "POST",
        url: "login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.changeStatus(true);
          this.getTasks()
          swal("heyho", {
            icon: 'success',
            buttons: false,
            timer: 1000,
          });
        })
        .catch((err) => {
          swal('wrong email/password!', {
            icon: "error",
          })
        });
    },
    onSuccess(googleUser) {
      var id_token = googleUser.getAuthResponse().id_token;
      this.$api({
        method: "POST",
        url: `/gsignin`,
        data: {
          id_token
        }
      })
      .then(({data}) => {
        localStorage.setItem("access_token", data.access_token);
        this.changeStatus(true);
        this.getTasks()
        swal("heyho", {
          icon: 'success',
          buttons: false,
          timer: 1000,
        });
      })
      .catch((err) => {
        swal('unexpected error!', {
          icon: "error",
        })
      });
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-align: center;
}
</style>