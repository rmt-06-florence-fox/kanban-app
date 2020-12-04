<template>
  <div>
    <div class="header-container">
      <div class="header-title">{{ category.name }}</div>
      <div class="header-icon-container">
        <button @click="showAddTaskForm(category.id)" data-toggle="modal" data-target="#add-task-modal" type="button" class="btn mt-2 btn-sm add-task-icon" ><img src="../assets/add-task.svg" width="30" height="30"></button>
        <button @click="showEditCatForm(category.id)" data-toggle="modal" data-target="#edit-category-modal" type="button" class="btn mt-2 btn-sm edit-category-icon"><img src="../assets/edit.svg" width="30" height="30"></button>
        <button @click="showDelCatConfirm(category.id)" data-toggle="modal" data-target="#delete-category-confirm" type="button" class="btn mt-2 btn-sm delete-category-icon"><img src="../assets/delete.svg" width="30" height="30"></button>
      </div>
    </div>
    <div id="category-content" style="max-height:78vh">
      <Task
      v-for="item in filteredTasks"
      :key="item.id"
      :task="item"
      @setTaskId="setTaskId"
      @setTaskEditData="setTaskEditData"
      @changePage="changePage"
      class="task-card bg-light">
      </Task>
      <EditCategoryForm :CategoryId="CategoryId" :categoryEditData="category" @fetchCategories="fetchCategories" @fetchTasks="fetchTasks"></EditCategoryForm>
      <DeleteCategoryConfirmation :CategoryId="CategoryId" @fetchCategories="fetchCategories" @fetchTasks="fetchTasks"></DeleteCategoryConfirmation>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Task from "../components/Task";
import EditCategoryForm from "../components/EditCategoryForm";
import DeleteCategoryConfirmation from "../components/DeleteCategoryConfirmation";

export default {
  name: "Category",
  props: ["category", "tasks"],
  data() {
    return {
      CategoryId: 0,
      TaskId: 0,
      categoryEditData: {
        name: "",
        color: ""
      },
      taskEditData: {}
    }
  },
  methods: {
    showAddTaskForm(CategoryId) {
      this.$emit("setCategoryId", CategoryId);
    },
    showEditCatForm(CategoryId) {
      this.fetchEditData(CategoryId);
      this.CategoryId = CategoryId;
      console.log(this.CategoryId)
    },
    showDelCatConfirm(CategoryId) {
      this.CategoryId = CategoryId;
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
    Task,
    EditCategoryForm,
    DeleteCategoryConfirmation,
  }
}
</script>
<style>
  
</style>