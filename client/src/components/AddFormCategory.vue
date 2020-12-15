<template>
  <div class="modal fade" id="exampleModal3" tabindex="-1">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">add category</h5>
              </div>
              <div class="modal-body">
                  <form @submit.prevent="addCategory()">
                      <div class="form-group">
                          <label for="title" class="col-form-label">Category Name:</label>
                          <input type="text" class="form-control" v-model="categoryName">
                      </div>
                      <div class="form-group">
                          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" @click="closeAdd()">Close</button>
                          <button type="submit" class="btn btn-outline-success" >save</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
      return {
        categoryName: ""   
      }
  },
  methods: {
    addCategory () {
      const payload = {
        categoryName: this.categoryName
      }
      this.$emit("addCategory", payload)
      $('#exampleModal').hide()
      this.categoryName = ""
    },
    closeAdd () {
      this.categoryName = ""
    }
  }
}
</script>

<style>

</style>