<template>
  <div>
    <div class="modal fade" id="delete-category-confirm" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
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
                  <p>Are you sure you want to delete this category?</p>
                  <p>All tasks in this category will also be deleted.</p>
              </div>
              <div class="modal-footer">
                  <button @click="$emit('close-delete-category-confirmation')" type="button" class="btn btn-secondary">Cancel</button>
                  <button @click="deleteCategory" type="button" class="btn btn-danger" id="delete-confirm-btn">Delete</button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "DeleteCategoryConfirmation",
  props: ["CategoryId"],
  data() {
    return {
      
    }
  },
  methods: {
    deleteCategory() {
      axios({
          url: `http://localhost:3000/categories/${this.CategoryId}`,
          method: "DELETE",
          headers: {
              access_token: localStorage.getItem("access_token")
          }
      })
      .then(({data}) => {
          this.$emit("close-delete-category-confirmation");
          this.$emit("fetchCategories");
          this.$emit("fetchTasks");
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