<template>
  <nav class="navbar navbar navbar-dark bg-dark">
    <div>
      <a class="navbar-brand" href="#">Kanban homepage</a>
    </div>
    <div>
      <button @click="logout" class="no-p btn btn-link text-white">
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
    //   var auth2 = gapi.auth2.getAuthInstance();
    //   auth2.signOut().then(() => {
    //     console.log("User signed out.");
    //   });
        this.$emit('logout')
    },
  }
};
</script>

<style>
</style>