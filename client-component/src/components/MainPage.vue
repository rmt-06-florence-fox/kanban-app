<template>
  <div>
    <div  id="main-page">
      <div class="container-fluid board-container">
          <div class="row flex-nowrap" id="board-content">
            <NavBar
              @changePage="changePage"
              @setKey="setKey"
              @show-add-category-form="addCategoryForm = true">
            </NavBar>
            <Category
              v-for="item in categories"
              :key="item.id"
              v-bind:style="{ backgroundColor: item.color }"
              :category="item"
              :tasks="tasks"
              :chosenTaskData="chosenTaskData"
              @setChosenTaskData="setChosenTaskData"
              @setCategoryId="setCategoryId"
              @show-add-task-form="addTaskForm = true"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks"
              @setTaskId="setTaskId"
              @setTaskEditData="setTaskEditData"
              @show-task-details="taskDetails = true"
              @show-edit-category-form="editCategoryForm = true"
              @setCategoryEditData="setCategoryEditData"
              @show-delete-category-confirmation="deleteCategoryConfirmation = true"
              class="category-container">
            </Category>
            <AddCategoryForm
              v-if="addCategoryForm"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks"
              @close-add-category-form="addCategoryForm = false">
            </AddCategoryForm>
            <AddTaskForm
              v-if="addTaskForm"
              :CategoryId="CategoryId"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks"
              @close-add-task-form="addTaskForm = false">
            </AddTaskForm>
            <EditCategoryForm
              v-if="editCategoryForm"
              :categoryEditData="categoryEditData"
              :CategoryId="CategoryId"
              @close-edit-category-form="editCategoryForm = false"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks">
            </EditCategoryForm>
            <DeleteCategoryConfirmation
              v-if="deleteCategoryConfirmation"
              :CategoryId="CategoryId"
              @close-delete-category-confirmation="deleteCategoryConfirmation = false"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks">
            </DeleteCategoryConfirmation>
            <TaskDetails
              v-if="taskDetails"
              :taskEditData="taskEditData"
              :TaskId="TaskId"
              @close-task-details="taskDetails = false"
              @show-delete-task-confirmation="deleteTaskConfirmation = true"
              @setTaskId="setTaskId" 
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks">
            </TaskDetails>
            <DeleteTaskConfirmation
              v-if="deleteTaskConfirmation"
              :TaskId="TaskId"
              @close-delete-task-confirmation="deleteTaskConfirmation = false"
              @close-task-details="taskDetails = false"
              @fetchCategories="fetchCategories"
              @fetchTasks="fetchTasks">
            </DeleteTaskConfirmation>
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
import TaskDetails from "./TaskDetails";
import EditCategoryForm from "./EditCategoryForm";
import DeleteCategoryConfirmation from "./DeleteCategoryConfirmation";
import DeleteTaskConfirmation from "./DeleteTaskConfirmation";
import draggable from "vuedraggable";

export default {
  nama: "MainPage",
  data() {
    return {
      TaskId: 0,
      taskEditData: {},
      categoryEditData: {},
      CategoryId: 0,
      categories: [],
      tasks: [],
      key: {},
      addTaskForm: false,
      addCategoryForm: false,
      taskDetails: false,
      editCategoryForm: false,
      deleteCategoryConfirmation: false,
      deleteTaskConfirmation: false,
      chosenTaskData: {}
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
      this.TaskId = TaskId;
    },
    setTaskEditData(taskEditData) {
      this.taskEditData.title = taskEditData.title;
      this.taskEditData.description = taskEditData.description;
      this.taskEditData.due_date = taskEditData.due_date;
    },
    setCategoryEditData(categoryEditData) {
      this.categoryEditData = categoryEditData;
    },
    setKey(key) {
      this.key = key
      console.log(this.key);
    },
    closeTaskDetails() {
      if (deleteTaskConfirmation) {
        $("#edit-task-modal").modal("hide");
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      }
    },
    setChosenTaskData(chosenTaskData) {
      this.chosenTaskData= chosenTaskData;
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
  watch: {
    addCategoryForm: function () {
      this.$nextTick()
      .then(() => {
        if (this.addCategoryForm) {
        $("#add-category-modal").modal("show");
        } else if(!this.addCategoryForm) {
          $("#add-category-modal").modal("hide");
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
        }
      })
    },
    addTaskForm: function  () {
      this.$nextTick()
      .then(() => {
        if (this.addTaskForm) {
        $("#add-task-modal").modal("show");
        } else if(!this.addTaskForm) {
          $("#add-task-modal").modal("hide");
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
        }
      })
    },
    editCategoryForm: function  () {
      this.$nextTick()
      .then(() => {
        if (this.editCategoryForm) {
        $("#edit-category-modal").modal("show");
        } else if(!this.editCategoryForm) {
          $("#edit-category-modal").modal("hide");
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
        }
      })
    },
    deleteCategoryConfirmation: function  () {
      this.$nextTick()
      .then(() => {
        if (this.deleteCategoryConfirmation) {
        $("#delete-category-confirm").modal("show");
        } else if(!this.deleteCategoryConfirmation) {
          $("#delete-category-confirm").modal("hide");
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
        }
      })
    },
    taskDetails: function () {
      this.$nextTick()
      .then(() => {
        if (this.taskDetails) {
          $("#edit-task-modal").modal("show");
        } else if(!this.taskDetails) {
            $("#edit-task-modal").modal("hide");
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }
      })
    },
    deleteTaskConfirmation: function  () {
      this.$nextTick()
      .then(() => {
        if (this.deleteTaskConfirmation) {
          $("#delete-task-confirm").modal("show");
        } else if(!this.deleteTaskConfirmation) {
          $("#delete-task-confirm").modal("hide");
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
          if (this.taskDetails === true) {
            $('<div class="modal-backdrop fade show"></div>').appendTo(document.body);
          }
        }
      })
    }
  },
  components: {
    NavBar,
    Category,
    AddTaskForm,
    AddCategoryForm,
    TaskDetails,
    EditCategoryForm,
    DeleteCategoryConfirmation,
    DeleteTaskConfirmation,
    draggable
  },
  created() {
    this.fetchCategories();
    this.fetchTasks();
  }
}
</script>
<style>
  
</style>