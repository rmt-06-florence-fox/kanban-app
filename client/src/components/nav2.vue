<template>
  <div class="row bg-dark">
    <div class="col-9 row justify-content-center align-items-center">
      <h6 class="text-white">KANBAN</h6>
    </div>
    <div class="col-3 row justify-content-end">
      <button @click="logout" class="btn btn-danger">logout</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$emit('logout')
    }
  }
}
</script>

<style>

</style>