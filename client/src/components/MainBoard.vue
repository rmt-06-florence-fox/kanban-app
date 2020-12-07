<template>
  <section class="task-content">
    <div class="container-fluid">
      <TaskBoard
      v-for="(category, i) in categories" 
      :key="i"
      :category="category"
      :tasks="tasks"
      @getEdit="getEdit"
      @deleteTask="deleteTask"
      @moveLeft="moveLeft"
      @moveRight="moveRight"
      >
      </TaskBoard>

  </section>
</template>

<script>
import TaskBoard from "./TaskBoard";
export default {
  name: "MainBoard",
  props: ["categories", "tasks"],
  methods: {
    getEdit(id){
      this.$emit("getEdit", id)
    },
    deleteTask(id){
      this.$emit("deleteTask", id)
    },
    moveLeft(id, status, prev){
      this.$emit('moveLeft', id, status, prev)
    },
    moveRight(id, status, next){
      this.$emit('moveRight', id, status, next)
    }
  },
  components: {
    TaskBoard,
  },
};
</script>