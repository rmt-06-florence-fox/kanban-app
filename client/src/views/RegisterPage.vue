<template>
  <b-container class="h-100 d-flex flex-column justify-content-center">
    <div class="w-75 m-auto">
      <h3 class="mb-3">Welcome to Kanban App, You can create an account here</h3>
      <b-form>
      <b-form-group
        label="Email"
        label-for="email"
      >
        <b-input
          id="email"
          type="email"
          required
        ></b-input>
      </b-form-group>

      <b-form-group
        label="User Name"
        label-for="userName"
      >
        <b-input
          id="userName"
          type="text"
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
          required
        ></b-input>
      </b-form-group>
      <b-button type="submit">Register</b-button>
      </b-form>
    <div>
      <span class="h3"> Already have an account ? login <router-link to="/login">here</router-link> </span>
    </div>
    </div>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
