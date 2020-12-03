<template>
  <div class="hero-head">
    <!-- navbar -->
    <nav id="navbar" class="navbar is-fixed-top has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item"
            ><img
              src="https://cdn150.picsart.com/upscale-236338758032212.png?type=webp&to=min&r=640"
              alt="kanban! help you organize your task!"
          /></a>
        </div>
        
        <!-- outsession -->
        <div class="navbar-menu" id="navMenu" v-if="!isLogin">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Menu</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">Register</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Login</a>
              </div>
            </div>
          </div>
        </div>

        <!-- insession -->
        <div class="navbar-end" v-if="isLogin">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" @click.prevent="onSignOut">
                <strong>logout</strong>
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
    <!-- end navbar -->
  </div>
</template>

<script>
export default {
  props: [ 'changeStatus', 'isLogin'],
  data() {
    return {
      burgerToggle: false,
    };
  },
  methods: {
    onSignOut() {
      localStorage.clear();
      this.changeStatus(false)
    },
  },
};
</script>

<style>
</style>