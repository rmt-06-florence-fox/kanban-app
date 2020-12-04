<template>
  <main>
    <div class="row d-flex">
      <TaskBoard
        :dataTasks="dataTasks"
        :reloadTasks="reloadTasks"
        v-for="(category, i) in categories"
        :key="i"
        :category="category"
      ></TaskBoard>
    </div>
  </main>
</template>

<script>
import TaskBoard from "./TaskBoard";
export default {
  props: ["dataTasks", "reloadTasks"],
  components: {
    TaskBoard,
  },
  data() {
    return {
      categories: [
        {
          name: "backlog",
          color: "red",
        },
        {
          name: "todo",
          color: "black",
        },
         {
          name: "doing",
          color: "blue",
        },
         {
          name: "done",
          color: "green",
        },
      ],
    };
  },
};
</script>

<style>
</style>
