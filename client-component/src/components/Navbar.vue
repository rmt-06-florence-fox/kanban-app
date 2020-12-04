<template>

<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button" @click.prevent = "userLogout">Logout</button>

  </form>


     
  </nav>

</template>

<script>
export default {
  name : "Navbar",
  methods : {
    userLogout(){
      this.$emit('userLogout')
    }
  }
}
</script>

<style>
.group-left{
  display : flex;
  justify-content: center;
}
.group-left h2{
  margin-left : 20px;
  margin-bottom: 0px;
}
</style> 