<template>
  <div class="navbar-container navbar-light bg-light shadow-sm p-3 mb-5">
    <div class="navbar-menu">Home</div>
    <div class="navbar-icon rounded"><img class="navbar-icon-img" src="../../assets/KANBAN_tio-8.png" alt="" width="50px"></div>
    <div class="navbar-logout">
      <!-- logout button component -->
      <logout-button-component :currentPage="currentPage" @halamanLogin="logout" ></logout-button-component>
    </div>
  </div>
</template>

<script>
//import components
import logoutButtonComponent from './logout-button-component.vue'

export default {
  components: {
     logoutButtonComponent
  },
  name : "navbar-component",
  props : ['currentPage'],
  methods :{
    logout(page){
      this.$emit('halamanLogin', page)
    }
  }
}
</script>

<style>

</style>