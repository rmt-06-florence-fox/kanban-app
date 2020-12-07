<template>
  <div>
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
  <div class="bg-primary">
      <h5 class="text-center text-white"> Hello {{ username }} </h5>
  </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {
      username: localStorage.getItem('name'),
    }
  },
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