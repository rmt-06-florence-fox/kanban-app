<template>
  <section id="login-page" class="container">
    <div class="form-signin-register bg-front">
      <div class="row justify-content-center mt-5">
        <div class="col-4 bg-light">
          <div class="shadow-lg p-5 rounded">
            <ul class="nav nav-pills nav-justified mb-5">
              <li class="nav-item">
                <a
                  @click.prevent="getForm('Login-form')"
                  class="nav-link"
                  v-bind:class="formName === 'Login-form' ? 'active' : ''"
                  >Sign in</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click.prevent="getForm('Register-form')"
                  class="nav-link"
                  v-bind:class="formName === 'Register-form' ? 'active' : ''"
                  >Register</a
                >
              </li>
            </ul>

            <h5 class="mb-4 text-center"><b>H8 Kanban</b></h5>
            <div v-if="formName === 'Login-form'"
              id="login"
              @submit.prevent="login"
            >
              <form>
                <div class="form-group">
                  <input
                    v-model="user.email"
                    type="email"
                    class="form-control"
                    id="login-email"
                    placeholder="Your email"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    id="login-password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
              <button v-google-signin-button="clientId" class="google-signin-button btn-center mt-2"> Google Sign In</button>
            </div>
            <div v-if="formName === 'Register-form'"
              id="register"
              @submit.prevent="register"
            >
              <form>
                <div class="form-group">
                  <input
                    v-model="user.name"
                    type="name"
                    class="form-control"
                    id="register-name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="user.email"
                    type="email"
                    class="form-control"
                    id="register-email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    id="register-password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-success btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginRegisterPage",
  data() {
    return {
      formName: "Login-form",
      user: {
        name: "",
        email: "",
        password: "",
      },
      clientId: '1024931171908-id407jfg6qs7cislh5ko8rik2hletc57.apps.googleusercontent.com'
    };
  },
  methods: {
    getForm(form) {
      this.formName = form;
    },
    login() {
      this.$emit("login", this.user)
    },
    register() {
      this.$emit("register", this.user)
    },
    OnGoogleAuthSuccess (idToken) {
      this.$emit('googleToken', idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    },
  }
};
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>