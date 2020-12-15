<template>
  <nav class="navbar navbar-light fixed-top" style="background-color: #8c8b9b4a;">
      <div class="container">
          <a class="navbar-brand" style="color:#0058E0; padding-left: 9px; padding-top: 1px; padding-bottom: 1px; padding-right: 9px; box-shadow: 0px 0px 2px black; border-radius: 15px">kanban-app</a>
          <form class="form-inline">
              <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" id="btn-signOut" @click="logout">Sign Out</button>
          </form>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$emit("logout")
    } 
  }
}
</script>

<style>

</style>