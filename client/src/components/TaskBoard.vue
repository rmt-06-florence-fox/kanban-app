<template>
  <div class="col-md-3 col-sm-6 mt-3">
    <div class="p-3 rounded text-white" :class="category.color">{{ category.name }}</div>
    <TaskItem
        v-for="(task, idx) in filteredTask" :key="idx"
        :task="task"
    >
    </TaskItem>
  </div>
</template>

<script>
import TaskItem from "./TaskItem"

export default {
  name: "TaskBoard",
  props: ["tasks", "category"],
  components: { TaskItem },
  computed: {
      filteredTask () {
          // return this.tasks.task.filter(e => {return e.category === this.category.name})
      }
  }
};
</script>

<style>
</style>