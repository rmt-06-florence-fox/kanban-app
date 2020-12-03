<template>
  <div>
    <div>
     <button v-if="currentPage != 'login page' && currentPage != 'register page'" @click.prevent="logout" class="btn btn-outline-danger">logout</button>
    </div>    
  </div>
</template>

<script>
export default {
  name : "logout-button",
  props : ['currentPage'],
  methods : {
    logout(){
      // console.log('a');
      this.$emit("halamanLogin","login page")
    }
  }
}
</script>

<style>

</style>