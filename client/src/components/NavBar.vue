<template>
<!--NAVBAR-->
  <nav class="custom-navbar sticky-top">
    <div class="left-navbar">
      <button class="nav-item btn"><i class="fa fa-home"></i></button>
    </div>
    <div class="center-navbar">
      <div class="logo">
        <h2><i class="fa fa-clipboard logo-icon"></i>Trolle</h2>
      </div>
    </div>
    <div class="right-navbar">
      <!-- <button class="nav-item btn"><i class="fa fa-info-circle"></i></button>
      <button class="nav-item btn"><i class="fa fa-plus-circle"></i></button> -->
      <button class="nav-item btn btn-danger my-2 my-sm-1" @click.prevent="logOutUser">Sign Out</button>
    </div>
  </nav>  
</template>

<script>
export default {
  methods: {
    logOutUser() {
      this.$emit('logOutUser')
    }
  }
}
</script>

<style scoped>
</style>