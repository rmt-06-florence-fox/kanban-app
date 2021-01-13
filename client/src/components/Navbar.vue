<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">K A N B A N</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click="logout" href="#">Logout</a>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$emit('setLogout')
    }
  }
};
</script>

<style>
</style>