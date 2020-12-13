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
    <div class="category-content" style="max-height:78vh">
      <draggable :id="category.id"
                v-bind="{group:'tasks'}" @start="drag=true" 
                @end="drag=false" @add="newTask">
        <div class="no-task" v-if="!tasksLength"><h6>No Tasks ...</h6></div>
        <div v-for="item in filteredTasks"
          :key="item.id">
          <draggable :id="item.id"
            v-model="filteredTasks"
            v-bind="{group: { name:'tasks', pull:'clone', put:'false'}}"
            @start="drag=true"
            @end="drag=false"
            :move="chooseTask">
            <Task
              :task="item"
              @setTaskId="setTaskId"
              @setTaskEditData="setTaskEditData"
              @show-task-details="showTaskDetails"
              class="task-card bg-light">
            </Task>
          </draggable>
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Task from "../components/Task";
import draggable from "vuedraggable";

export default {
  name: "Category",
  props: ["category", "tasks", "chosenTaskData"],
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
    },
    chooseTask(event) {
      const filteredArray = this.filteredTasks.filter((task) => {
        return task.id === Number(event.from.id)
      })
      const chosenTask = filteredArray[0];
      this.setChosenTaskData(chosenTask);

    },
    setChosenTaskData(chosenTask) {
      this.$emit('setChosenTaskData', chosenTask);
    },
    newTask(event) {
      if (this.chosenTaskData.CategoryId !== Number(event.to.id)) {
        axios({
          url: `http://localhost:3000/tasks/${this.chosenTaskData.id}`,
          method: "PATCH",
          headers: {
              access_token: localStorage.getItem("access_token")
          },
          data: {
            CategoryId: event.to.id
          }
        })
        .then(({data}) => {
          this.fetchCategories();
          this.fetchTasks();
        })
        .catch((err) => {
            console.log(err);
        })
      }
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(task => {
          return (task.CategoryId === this.category.id);
      })
    },
    tasksLength() {
      return this.filteredTasks.length;
    }
  },
  components: {
    Task,
    draggable
  }
}
</script>
<style>
  
</style>