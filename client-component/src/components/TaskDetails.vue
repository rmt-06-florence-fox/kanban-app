<template>
  <div>
    <div class="modal fade" id="edit-task-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
     <div v-if="error">
        <ErrorMessage v-for="(message, index) in messages" :key="index" :message="message" ref="error"></ErrorMessage>
      </div>
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" style="background-color:transparent;border:none">
              <div class="add-edit-task-form-content">
                  <div class="add-edit-task-form-title">
                      <h1>Task Details</h1>
                  </div>
                  <form class="add-edit-task-form">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input v-model="task.title" type="text" class="form-control" id="add-task-title" name="title">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Description</label>
                        <textarea v-model="task.description" class="form-control text-area"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="due_date">Due Date</label>
                        <input v-model="task.due_date" type="date" class="form-control" id="add-task-due_date" name="due_date">
                    </div>
                    <button type="submit" @click.prevent="editTask" class="btn mt-4 add-edit-task-btn">Edit</button>
                    <button @click="showDeleteTaskConfirmation" type="button" class="btn btn-danger mt-2 delete-task-btn">Delete</button>
                    <button @click="$emit('close-task-details')" type="button" class="btn mt-2 add-edit-cancel-btn">Close</button>
                </form>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
export default {
  name: "TaskDetails",
  props: ["TaskId", "taskEditData"],
  data() {
    return {
      task: {
        title: this.taskEditData.title,
        description: this.taskEditData.description,
        due_date: this.taskEditData.due_date
      },
      error: false,
      messages: []
    }
  },
  methods: {
    editTask() {
      axios({
          url: `https://kanbanrud.herokuapp.com/tasks/${this.TaskId}`,
          method: "PUT",
          headers: {
              access_token: localStorage.getItem("access_token")
          },
          data: this.task
      })
      .then(({data}) => {
          this.$emit("fetchCategories");
          this.$emit("fetchTasks");
          this.$emit("close-task-details");
          Swal.fire (
              "Edited",
              "The task has been edited.",
              "success"
          );
      })
      .catch((err) => {
          console.log(err);
          if (err.response.data.message) {
            this.messages.push(err.response.data.message);
          } else {
            this.messages = err.response.data.messages;
          }
          this.error = true;
          this.$nextTick(()=> {
            console.log(this.$refs.error)
             this.$refs.error[0].$el.scrollIntoView();
          });
      })
    },
    fetchCategories() {
      this.$emit("fetchCategories");
    },
    fetchTasks() {
      this.$emit("fetchTasks");
    },
    showDeleteTaskConfirmation() {
      this.$emit("show-delete-task-confirmation");
      this.$emit("setTaskId", this.TaskId);
    }
  },
  mounted() {
    this.error = false;
  },
  components: {
    ErrorMessage
  }
}
</script>
<style>
  
</style>