<template>
  <div>
    <div class="header-container">
      <div class="header-title">{{ category.name }}</div>
      <div class="header-icon-container">
        <button @click="showAddTaskForm(category.id)" type="button" class="btn mt-2 btn-sm add-task-icon" ><img src="../assets/add-task.svg" width="30" height="30"></button>
        <button @click="showEditCatForm(category.id)" type="button" class="btn mt-2 btn-sm edit-category-icon"><img src="../assets/edit.svg" width="30" height="30"></button>
        <button @click="showDelCatConfirm(category.id)" type="button" class="btn mt-2 btn-sm delete-category-icon"><img src="../assets/delete.svg" width="30" height="30"></button>
      </div>
    </div>
    <div id="category-content" style="max-height:78vh">
      <Task
        v-for="item in filteredTasks"
        :key="item.id"
        :task="item"
        @setTaskId="setTaskId"
        @setTaskEditData="setTaskEditData"
        @show-task-details="showTaskDetails"
        class="task-card bg-light">
      </Task>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Task from "../components/Task";

export default {
  name: "Category",
  props: ["category", "tasks"],
  data() {
    return {
      CategoryId: 0,
      TaskId: 0,
      categoryEditData: {},
      taskEditData: {}
    }
  },
  methods: {
    showAddTaskForm(CategoryId) {
      this.$emit("show-add-task-form");
      this.$emit("setCategoryId", CategoryId);
    },
    showEditCatForm(CategoryId) {
      this.fetchEditData(CategoryId);
      this.$emit("show-edit-category-form");
      this.$emit("setCategoryId", CategoryId);
    },
    showDelCatConfirm(CategoryId) {
      this.$emit("show-delete-category-confirmation");
      this.$emit("setCategoryId", CategoryId);
    },
    showTaskDetails() {
      this.$emit("show-task-details");
    },
    setTaskId(TaskId) {
      this.$emit("setTaskId", TaskId);
    },
    setTaskEditData(taskEditData) {
      this.$emit("setTaskEditData", taskEditData);
    },
    fetchEditData(CategoryId) {
      axios({
          url: `http://localhost:3000/categories/${CategoryId}`,
          method: "GET",
          headers: {
              access_token: localStorage.getItem("access_token")
          }
      })
      .then(({data}) => {
          this.categoryEditData.name = data.name;
          this.categoryEditData.color = data.color;
          this.$emit("setCategoryEditData", this.categoryEditData);
      })
      .catch((err) => {
          console.log(err);
      })
    },
    fetchCategories(){
      this.$emit("fetchCategories");
    },
    fetchTasks(){
      this.$emit("fetchTasks");
    },
    changePage(pageName) {
      this.$emit("changePage", pageName);
    }
  },
  computed: {
    filteredTasks: function() {
        return this.tasks.filter(task => {
            return (task.CategoryId === this.category.id)
        })
    }
  },
  components: {
    Task
  }
}
</script>
<style>
  
</style>