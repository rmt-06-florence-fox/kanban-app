<template>
  <div>
    <div class="card">
      <div class="card-body mt-3 shadow-sm">
        <h5 class="card-title">{{ filterTask.title }}</h5>
        <small>author</small>
        <p class="card-text">{{filterTask.User.email.split('@')[0]}}</p>
        <div class="card-footer">
          <button type="button" class="btn btn-outline-primary far fa-edit"></button>
          <button @click="deleteTask(filterTask.id)" type="button" class="btn btn-outline-primary far fa-trash-alt"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name :  "kanban-card-component",
  props : ["filterTask"],
  methods : {
    deleteTask(id){
      this.$emit('deleteId', id)
    }
  }
}
</script>

<style>

</style>