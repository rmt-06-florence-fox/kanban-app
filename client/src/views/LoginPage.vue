<template>
  <div class="d-flex w-100 h-100 flex-column justify-content-center">
    <div class="w-75 m-auto">
      <h3 class="mb-3">Welcome to Kanban App</h3>
      <b-form class="text-center my-3" @submit.prevent="loginHandler">
      <b-form-group
        label="Email"
        label-for="email"
      >
        <b-input
          id="email"
          type="email"
          v-model="payload.email"
          required
        ></b-input>
      </b-form-group>

      <b-form-group
        label="Password"
        label-for="password"
      >
        <b-input
          id="password"
          type="password"
          v-model="payload.password"
          required
        ></b-input>
      </b-form-group>
      <b-button type="submit">Login</b-button>
      </b-form>
    <div>
      <span class="h3"> Have no account ? register <router-link to="/register">here</router-link> </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginHandler () {
      this.$store.dispatch('login', this.payload)
    }
  }
}
</script>

<style>

</style>
