<template>
  <section class="task-content">
    <div class="container-fluid">
      <div class="kbn-col">
        <div class="item-1 item">Backlog</div>
        <TaskItem></TaskItem>
      </div>
      <div class="kbn-col">
        <div class="item-2 item">Todo</div>
      </div>
      <div class="kbn-col">
        <div class="item-3 item">Doing</div>
      </div>
      <div class="kbn-col">
        <div class="item-4 item">Done</div>
      </div>
    </div>
  </section>
</template>

<script>
import TaskItem from "./TaskItem";
export default {
  components: {
    TaskItem,
  },
};
</script>

<style>
</style>