<template>
  <div>
    <div class="modal fade" id="delete-task-confirm" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true">
        <div v-if="error">
          <ErrorMessage :message="message" ref="error"></ErrorMessage>
        </div>
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Delete Confirmation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span @click="closeDeleteTaskConfirmation" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this task?</p>
                </div>
                <div class="modal-footer">
                    <button @click="closeDeleteTaskConfirmation" type="button" class="btn btn-secondary">Cancel</button>
                    <button @click="deleteTask" type="button" class="btn btn-danger" id="delete-confirm-btn">Delete</button>
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
  name: "DeleteTaskConfirmation",
  props: ["TaskId"],
  data() {
    return {
      error: false,
      message: "",
    }
  },
  methods: {
    deleteTask() {
      axios({
          url: `https://kanbanrud.herokuapp.com/tasks/${this.TaskId}`,
          method: "DELETE",
          headers: {
              access_token: localStorage.getItem("access_token")
          },
      })
      .then(({data}) => {
          this.$emit("fetchCategories");
          this.$emit("fetchTasks");
          this.$emit("close-delete-task-confirmation");
          this.$emit("close-task-details");
          Swal.fire (
              "Deleted",
              data.message,
              "success"
          );
      })
      .catch((err) => {
          console.log(err);
          this.message = err.response.data.message;
          this.error = true;
          this.$nextTick(()=> {
             this.$refs.error.$el.scrollIntoView();
          });
      })
    },
    closeDeleteTaskConfirmation() {
      this.$emit("close-delete-task-confirmation");
      this.error = false;
    }
  },
  components: {
    ErrorMessage
  }
}
</script>
<style>
  
</style>