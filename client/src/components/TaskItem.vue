<template>
  <div class="card mt-3">
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">By:{{ task.User.name }}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Created at:{{ task.createdAt }}</h6>
      <button class="no-p btn btn-link" @click="updateForm(`${task.id}`)">Update</button>
      <button class="no-p btn btn-link" @click="deleteTask(`${task.id}`)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ['task'],
  methods: {
    deleteTask(id) {
      this.$emit('destroyTask', id)
    },
    updateForm(id) {
      this.$emit('editForm', id)
    }
  }
};
</script>

<style>
</style>