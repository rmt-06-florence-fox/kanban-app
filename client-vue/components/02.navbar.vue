<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 pr-4 font-weight-normal">The Kanban.co</h5>
    <button type="button" class="btn btn-outline-primary mr-md-auto" @click.prevent = "create">
      Create New Task
    </button>
    <nav class="my-6 my-md-0 mr-md-3">
      <p class="mt-3">Made by FaishalFadhil-2020</p>
    </nav>
    <button class="btn btn-outline-danger" @click.prevent = "logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods : {
    logout(){
      this.$emit('requestLogout')
    },
    create(){
      this.$emit('requestCreate')
    }
  }
}
</script>

<style>

</style>