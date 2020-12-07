<template>
  <div id="register-page" class="container-fluid text-center">
    <form class="form-signin" @submit.prevent="register">
      <img
        class="rounded-circle"
        src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg"
        alt=""
        width="100"
        height="100"
      />
      <br />
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <label for="name" class="sr-only">Name</label>
      <input
        type="text"
        v-model="newUser.name"
        class="form-control"
        placeholder="Name"
        required
        autofocus
      />
      <div
        class="d-flex flex-row d-flex align-items-center justify-content-between"
      >
        <label class="text-muted pl-2">Department</label>
        <select class="form-control col-sm-8" v-model="newUser.department">
          <option selected disabled>--Select--</option>
          <option>IT Security Dept.</option>
          <option>Product Design Dept.</option>
          <option>Software Engineer Dept.</option>
          <option>R&D Dept.</option>
          <option>General Service Dept.</option>
        </select>
      </div>
      <label for="regEmail" class="sr-only">Email address</label>
      <input
        type="email"
        v-model="newUser.email"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="regPassword" class="sr-only">Password</label>
      <input
        type="password"
        v-model="newUser.password"
        class="form-control"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-success btn-inline" type="submit">
        Register
      </button>
      <button
        class="btn btn-lg btn-secondary btn-inline"
        type="button"
        @click="toLogin"
      >
        Login
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        department: "",
      },
    };
  },
  methods: {
    toLogin() {
      this.$emit("to-login", "login");
    },
    register() {
      this.$emit("register", "login", this.newUser);
    },
  },
};
</script>

<style>
button {
  width: 49%;
}
</style>
