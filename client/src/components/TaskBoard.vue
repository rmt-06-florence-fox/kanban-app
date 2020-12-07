<template>
  <div class="kbn-col">
    <div class="item" :class="category.color">
      {{ category.label }}
    </div>
    <div class="bg-card">
      <TaskItem
        v-for="task in filteredTask"
        :key="task.id"
        :task="task"
        :category="category"
        @getEdit="getEdit"
        @deleteTask="deleteTask"
        @moveLeft="moveLeft"
        @moveRight="moveRight"
      ></TaskItem>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  components: { TaskItem },
  name: "TaskBoard",
  props: ["category", "tasks"],
  methods: {
    getEdit(id) {
      this.$emit("getEdit", id);
    },
    deleteTask(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#16697a",
        cancelButtonColor: "#af3838",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit("deleteTask", id);
        }
      });
    },
    moveLeft(id, status, prev) {
      this.$emit("moveLeft", id, status, prev);
    },
    moveRight(id, status, next) {
      this.$emit("moveRight", id, status, next);
    },
  },
  computed: {
    filteredTask() {
      return this.tasks.filter((e) => e.status === this.category.name);
    },
  },
};
</script>

<style>
</style>