<template>
  <div>
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand"><strong>KANBAN</strong></a>
     <form class="form-inline">
         <button class="btn btn-dark" type="button" style="margin-right: 10px" @click.prevent="addForm">Add Task</button>
        <button class="btn btn-dark" type="button" @click.prevent="logout">Logout</button>
    </form>
</nav>
  </div>
</template>

<script>
export default {
    name : 'Nav',
    methods : {
        addForm () {
            this.$emit("addForm")
        },
        logout () {
            this.$emit("logout")
        }
    }
}
</script>

<style>

</style>