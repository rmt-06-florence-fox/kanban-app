<template>
  <div class="column column-items status mx-3">
    <div>
      <button class="button is-success" @click.prevent="openAdd">add</button>
    </div>
    <div class="tags has-addons">
      <span class="tag">{{ category.name }}</span>
      <span class="tag is-dark">{{ filteredData.length }}</span>
    </div>
    <div>
    <TaskItem v-for="task in filteredData" :key="task.id" :task="task">
    </TaskItem>
    </div>
    
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
import swal from "sweetalert"

export default {
  name: "TaskBoard",
  props: ["dataTasks", "category", "addTask"],
  components: {
    TaskItem,
  },
  computed: {
    filteredData() {
      return this.dataTasks.filter((el) => el.category === this.category.name);
    },
  },
  methods: {
    openAdd() {
      swal({
        content: {
          element: "input",
          attributes: {
            placeholder: "Your task here...",
            type: "text",
          },
        },
      })
        .then((response) => {
          this.addTask(response, this.category.name);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>