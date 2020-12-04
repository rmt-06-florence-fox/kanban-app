<template>
  <div>
    <div  id="main-page">
      <div class="container-fluid board-container">
          <div class="row flex-nowrap" id="board-content">
            <NavBar @changePage="changePage" @setKey="setKey"></NavBar>
            <Category
              v-for="item in categories"
              :key="item.id" 
              v-bind:style="{ backgroundColor: item.color }"
              :category="item"
              :tasks="tasks"
              @setCategoryId="setCategoryId"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks"
              @setTaskId="setTaskId"
              @setTaskEditData="setTaskEditData"
              @changePage="changePage"
              class="category-container col-2">
            </Category>
            <AddTaskForm
              :CategoryId="CategoryId"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks">
            </AddTaskForm>
            <AddCategoryForm
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks">
              </AddCategoryForm>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "./NavBar";
import Category from "./Category";
import AddTaskForm from "./AddTaskForm";
import AddCategoryForm from "./AddCategoryForm"
export default {
  nama: "MainPage",
  data() {
    return {
      CategoryId: 0,
      categories: [],
      tasks: [],
      key: {}
    }
  },
  methods: {
    changePage(pageName) {
      this.$emit("changePage", pageName);
    },
    fetchCategories() {
      axios({
        url: `http://localhost:3000/categories`,
        method: "GET",
        headers: {
            access_token: localStorage.getItem("access_token")
        }
      })
      .then(({data}) => {
          this.categories = data;
      })
      .catch((err) => {
          console.log(err);
      })
    },
    fetchTasks() {
      axios({
          url: `http://localhost:3000/tasks`,
          method: "GET",
          headers: {
              access_token: localStorage.getItem("access_token")
          }
      })
      .then(({data}) => {
          this.tasks = data;
      })
      .catch((err) => {
          console.log(err);
      })
    },
    setCategoryId(CategoryId) {
      this.CategoryId = CategoryId;
    },
    setTaskId(TaskId) {
      this.$emit("setTaskId", TaskId);
    },
    setTaskEditData(taskEditData) {
      this.$emit("setTaskEditData", taskEditData);
    },
    setKey(key) {
      this.key = key
      console.log(this.key);
    }
  },
  computed: {
    filteredTask: function () {
        if (this.key.words && this.key.by) {
          return this.tasks.filter(task => {
            return task[this.key.by].toLowerCase().includes(this.key.words.toLowerCase());
          })
        } else {
          return this.tasks;
        }
    }
  },
  components: {
    NavBar,
    Category,
    AddTaskForm,
    AddCategoryForm,
  },
  created() {
    this.fetchCategories();
    this.fetchTasks();
  }
}
</script>
<style>
  
</style>