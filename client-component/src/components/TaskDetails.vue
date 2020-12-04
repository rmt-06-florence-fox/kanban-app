<template>
  <div>
    <div class="add-edit-task-form-content" style="width:30rem;height:37rem">
      <div class="add-edit-task-form-title">
          <h1>Task Details</h1>
      </div>
      <form class="add-edit-task-form">
          <div class="form-group">
              <label for="title">Title</label>
              <input v-model="task.title" type="text" class="form-control edit-task-title" name="title">
          </div>
          <div class="form-group">
              <label for="message-text" class="col-form-label">Description</label>
              <textarea v-model="task.description" class="form-control text-area"></textarea>
          </div>
          <div class="form-group">
              <label for="due_date">Due Date</label>
              <input v-model="task.due_date" type="date" class="form-control edit-task-due_date" name="due_date">
          </div>
          <button type="submit" @click.prevent="editTask" class="btn mt-4 add-edit-task-btn">Edit</button>
          <button data-toggle="modal" data-target="#delete-task-confirm" type="button" class="btn btn-danger mt-2 delete-task-btn">Delete</button>
          <button @click="changePage" type="button" class="btn mt-2 add-edit-cancel-btn">Close</button>
      </form>
      <DeleteTaskConfirmation :TaskId="TaskId" @fetchCategories="fetchCategories" @fetchTasks="fetchTasks" @changePage="changePage"></DeleteTaskConfirmation>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import DeleteTaskConfirmation from "../components/DeleteTaskConfirmation";
export default {
  name: "EditTaskForm",
  props: ["TaskId", "taskEditData"],
  data() {
    return {
      TaskDetailId: this.TaskId,
      task: {
        title: this.taskEditData.title,
        description: this.taskEditData.description,
        due_date: this.taskEditData.due_date
      }
    }
  },
  methods: {
    editTask() {
      axios({
          url: `http://localhost:3000/tasks/${this.TaskId}`,
          method: "PUT",
          headers: {
              access_token: localStorage.getItem("access_token")
          },
          data: this.task
      })
      .then(({data}) => {
          this.$emit("fetchCategories", "fetchTasks");
          this.$emit("changePage", "main-page")
          Swal.fire (
              "Edited",
              "The task has been edited.",
              "success"
          );
      })
      .catch((err) => {
          console.log(err);
      })
    },
    fetchCategories() {
      this.$emit("fetchCategories");
    },
    fetchTasks() {
      this.$emit("fetchTasks");
    },
    changePage() {
      this.$emit("changePage", "main-page");
    }
  },
  components: {
    DeleteTaskConfirmation
  },
}
</script>
<style>
  
</style>