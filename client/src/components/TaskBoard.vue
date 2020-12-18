<template>
  <div class="column column-items status mx-3 my-3">
    <div>
      <button class="button is-success mb-3" @click.prevent="openAdd"><i class="fas fa-plus"></i><b> Add</b></button>
    </div>
    <div class="tags has-addons">
      <span class="tag">{{ category.name }}</span>
      <span class="tag is-dark">{{ filteredData.length }}</span>
    </div>
    <div>
    <TaskItem
      v-for="task in filteredData"
      :key="task.id"
      :task="task"
      :getTasks="getTasks"
      :editTask="editTask"
    ></TaskItem>
    </div>
    
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
import swal from "sweetalert"

export default {
  name: "TaskBoard",
  props: ["dataTasks", "category", "addTask", "getTasks", "editTask"],
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
        .catch((err) => {
          console.log(err)
        });
    },
  },
};
</script>

<style>
</style>