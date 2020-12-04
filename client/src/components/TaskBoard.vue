<template>
  <section class="task-content">
    <div class="container-fluid">
      <TaskItem
      v-for="(category, i) in categories" 
      :key="i"
      :category="category"
      :tasks="tasks"
      >
      </TaskItem>

  </section>
</template>

<script>
import TaskItem from "./TaskItem";
export default {
  name: "TaskBoard",
  props: ["categories", "tasks"],
  components: {
    TaskItem,
  },
};
</script>