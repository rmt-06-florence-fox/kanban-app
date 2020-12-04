<template>
  <div class="column column-items status mx-3">
    <div class="tags has-addons">
      <span class="tag">{{category.name}}</span>
      <span class="tag is-dark">{{category.id}}</span>
        <!-- {{dataTasks}} -->
    </div>
      <TaskItem
        v-for="task in filteredData"
        :key="task.id"
        :task="task"
      >
      </TaskItem>
  </div>
</template>

<script>
import TaskItem from "./TaskItem"

export default {
  name: "TaskBoard",
  props: [ "dataTasks", "category"],
  components: {
    TaskItem
  },
  computed: {
    filteredData() {
      return this.dataTasks.filter(el => el.category === this.category.name)
    }
  }
};
</script>

<style>
</style>