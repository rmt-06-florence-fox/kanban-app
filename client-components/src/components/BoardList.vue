<template>
  <main>
    <div class="row d-flex flex-nowrap overflow-auto">
      <TaskBoard
        :dataTasks="dataTasks"
        :reloadTasks="reloadTasks"
        v-for="(category, i) in dataCategories"
        :key="i"
        :category="category"
      ></TaskBoard>
    </div>
  </main>
</template>

<script>
import TaskBoard from "./TaskBoard";

export default {
  props: ["dataTasks", "reloadTasks", "dataCategories"],
  components: {
    TaskBoard
  },
  data() {
    return {
      categories: this.dataCategories
      // [
      //   {
      //     name: "backlog",
      //     color: "red",
      //   },
      //   {
      //     name: "todo",
      //     color: "black",
      //   },
      //    {
      //     name: "doing",
      //     color: "blue",
      //   },
      //    {
      //     name: "done",
      //     color: "green",
      //   }
      // ],
    };
  },
  created(){
    console.log(this.dataCategories, 'ini di boardlist list cat');
  }
};
</script>

<style>
</style>
