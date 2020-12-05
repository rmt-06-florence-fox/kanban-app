<template>
  <div>
    <div class="modal fade" id="add-category-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" style="background-color:transparent;border:none">
              <div class="add-edit-category-form-content">
                  <div class="add-edit-category-form-title">
                      <h1>Add Category</h1>
                  </div>
                  <form class="add-edit-category-form">
                      <div class="form-group">
                          <label for="name">Name</label>
                          <input v-model="category.name" type="text" class="form-control" id="add-edit-category-name" name="name">
                      </div>
                      <div>
                          <label for="colors">Color</label>
                          <select v-model="category.color" class="form-control color-select" name="color">
                            <option value="#ff3b30" selected>Red</option>
                            <option value="#ff9500">Orange</option>
                            <option value="#ffcc00">Yellow</option>
                            <option value="#4cd964">Green</option>
                            <option value="#5ac8fa">Teal Blue</option>
                            <option value="#007aff">Blue</option>
                            <option value="#e066ff">Purple</option>
                            <option value="#ff4d88">Pink</option>
                          </select>
                      </div>
                      <div class="category-form-btn-container">
                        <button @click.prevent="addCategory" type="submit" class="btn mt-4 add-edit-category-btn">Add</button>
                        <button @click="$emit('close-add-category-form')" data-dismiss="modal" type="button" class="btn mt-2 category-cancel-btn">Cancel</button>
                      </div>  
                  </form>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddCategoryForm",
  data() {
    return {
      category: {
        name: "",
        color: ""
      }
    }
  },
  methods: {
    addCategory() {
      axios({
          url: "http://localhost:3000/categories",
          method: "POST",
          headers: {
              access_token: localStorage.getItem("access_token")
          },
          data: this.category
      })
      .then(({data}) => {
          this.$emit("fetchCategories");
          this.$emit("fetchTasks");
          this.$emit("close-add-category-form");
          Swal.fire (
              "Added",
              "A new category has been added.",
              "success"
          );
      })
      .catch((err) => {
          console.log(err);
      })
      .finally(() => {
          this.category.name = "";
          this.category.color = "#ff3b30";
      });
    }
  }
}
</script>
<style>
  
</style>