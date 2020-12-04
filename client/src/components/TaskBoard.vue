<template>
  <section class="task-content">
    <div class="container-fluid">
      <TaskItem
      v-for="(category, i) in categories" 
      :key="i"
      :category="category"
      :tasks="tasks"
      @getEdit="getEdit"
      @deleteTask="deleteTask"
      >
      </TaskItem>

  </section>
</template>

<script>
import TaskItem from "./TaskItem";
export default {
  name: "TaskBoard",
  props: ["categories", "tasks"],
  methods: {
    getEdit(id){
      this.$emit("getEdit", id)
    },
    deleteTask(id){
      this.$emit("deleteTask", id)
    }
  },
  components: {
    TaskItem,
  },
};
</script>