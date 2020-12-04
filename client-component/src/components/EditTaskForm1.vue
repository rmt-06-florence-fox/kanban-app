<template>
  <div>
    <div class="modal fade" id="edit-task-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content" style="background-color:transparent;border:none">
                <div class="add-edit-task-form-content">
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
                        <button data-dismiss="modal" type="button" class="btn mt-2 add-edit-cancel-btn">Close</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- <DeleteTaskConfirmation :TaskId="TaskId" @fetchCategories="fetchCategories" @fetchTasks="fetchTasks"></DeleteTaskConfirmation> -->
  </div>
</template>
<script>
import axios from "axios";
import DeleteTaskConfirmation from "../components/DeleteTaskConfirmation";
export default {
  name: "EditTaskForm",
  data() {
    return {

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
          $("#edit-task-modal").modal("hide");
          this.$emit("fetchCategories", "fetchTasks");
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
    }
  },
  components: {
    DeleteTaskConfirmation
  },
}
</script>
<style>
  
</style>