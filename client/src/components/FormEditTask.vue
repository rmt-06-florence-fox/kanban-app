<template>
  <div class="modal fade" id="exampleModal2" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" >edit title</h5>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editTask()">
            <div class="form-group">
              <label for="title" class="col-form-label">title existing:</label>
              <input type="text" class="form-control" v-model="taskToFormEdit" disabled>
            </div>
            <div class="form-group">
              <label for="title" class="col-form-label">title:</label>
              <input type="text" class="form-control" v-model="taskEditShow">
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" @click="closeEdit">Close</button>
              <button type="submit" class="btn btn-outline-success">save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEdit',
  props: ['taskToFormEdit'],
  data () {
    return {
      taskEditShow: ''
    }
  },
  methods: {
    editTask () {
      const payload = {
        updateTitle: this.taskEditShow
      }
      this.$emit("editTask", payload)
      $('#exampleModal2').modal('hide')
      this.title = ""
    },
    closeEdit() {
      this.title = ""
    }
  }
}
</script>

<style>

</style>