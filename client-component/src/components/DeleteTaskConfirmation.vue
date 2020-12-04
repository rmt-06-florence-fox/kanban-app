<template>
  <div>
    <div class="modal fade" id="delete-task-confirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Delete Confirmation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this task?</p>
                </div>
                <div class="modal-footer">
                    <button data-dismiss="modal" type="button" class="btn btn-secondary">Cancel</button>
                    <button @click="deleteTask" data-dismiss="modal" type="button" class="btn btn-danger" id="delete-confirm-btn">Delete</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "DeleteTaskConfirmation",
  props: ["TaskId"],
  data() {
    return {

    }
  },
  methods: {
    deleteTask() {
      axios({
          url: `http://localhost:3000/tasks/${this.TaskId}`,
          method: "DELETE",
          headers: {
              access_token: localStorage.getItem("access_token")
          },
      })
      .then(({data}) => {
          this.$emit("changePage", "main-page");
          this.$emit("fetchCategories", "fetchTasks");
          Swal.fire (
              "Deleted",
              data.message,
              "success"
          );
      })
      .catch((err) => {
          console.log(err);
      })
    }
  }
}
</script>
<style>
  
</style>