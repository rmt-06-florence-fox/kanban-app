<template>
  <div class="column column-items status mx-3">
    <div class="tags has-addons">
      <span class="tag">{{category.name}}</span>
      <span class="tag is-dark">{{category.id}}</span>
      <TaskItem></TaskItem>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem"

export default {
  name: "taskBoard",
  props: ["dataTasks", "category"],
  components: {
    TaskItem
  },
  computed: {
    
  }
};
</script>

<style>
</style>