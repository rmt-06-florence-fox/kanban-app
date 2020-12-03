<template>
  <div class="card mt-3">
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">created at: {{ task.createdAt }}</h6>
      <a href="#" class="card-link">Edit</a>
      <a href="#" class="card-link">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ['task'],
};
</script>

<style>
</style>