<template>
  <nav class="navbar navbar navbar-dark bg-dark">
    <div>
      <a class="navbar-brand" href="#">Kanban</a>
      <button @click="changePage('Home-page')" class="no-p btn btn-link text-white">Home</button>
      <button @click="changePage('Add-form')" class="no-p btn btn-link text-white">Add Task</button>
    </div>
    <div>
      <button @click="logout" class="no-p btn btn-link text-white">Logout</button>
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
    changePage(page) {
      this.$emit('ChangePage', page)
    }
  }
};
</script>

<style>
</style>