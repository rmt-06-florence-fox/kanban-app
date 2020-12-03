<template>
  <section id="login-page" class="container">
    <div class="form-signin-register bg-front">
      <div class="row justify-content-center mt-5">
        <div class="col-4">
          <div class="shadow-lg p-5 mb-5 rounded">
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
            <div
              id="login"
              @submit.prevent="login"
              v-if="formName === 'Login-form'"
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
            </div>
            <div
              id="register"
              @submit.prevent="register"
              v-if="formName === 'Register-form'"
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
            <div
              id="google-login"
              class="mt-3"
              v-if="formName === 'Login-form'"
            >
              <p class="text-center">Login with google account</p>
              <div class="g-signin2 btn-center"
              data-onsuccess="onSignIn"></div>
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
    onSignIn(googleUser) {
      this.$emit("google-login", googleUser)
    }
  }
};
</script>

<style>
</style>