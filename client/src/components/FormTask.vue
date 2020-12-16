<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"> 
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Add New Task</h5>
              </div>
              <div class="modal-body">
                  <form @submit.prevent="addTask()"> 
                      <div class="form-group">
                          <label for="title" class="col-form-label">title:</label>
                          <input type="text" class="form-control" v-model="title">
                      </div>
                      <div class="form-group">
                      </div>
                          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-outline-success">add task</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FormTask',
  data () {
    return {
      title: ""
    }
  },
  methods: {
    addTask () {
      const payload = {
        title: this.title
      }
      this.$emit("addTask", payload)
      $('#exampleModal').modal('hide');
      this.title = ""
    }
  },
}
</script>

<style>

</style>