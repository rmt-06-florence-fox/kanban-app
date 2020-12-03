<template>
    <!-- Create -->
    <div class="modal" id="createTask" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true" v-if= "seen">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createTaskLabel">Create Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form class="p-2" @submit.prevent = "createTask">
            <div class="form-group">
              <label for="createTask">Task:</label>
              <input type="text" class="form-control" id="createTask" v-model = "title">
            </div>
            <div class="form-group">
              <label for="selectCategory">Category</label>
              <select class="form-control" id="category" v-model = "category">
                <option value = 'Backlog'>Backlog</option>
                <option value = 'Todo'>Todo</option>
                <option value = 'Doing'>Doing</option>
                <option value = 'Done'>Done</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title : '',
      category : '',
      seen : true
    }
  },
  methods : {
    createTask(){
      this.seen = false
      let obj = {
        title : this.title,
        category : this.category
      }
      this.$emit('requestCreateTask', obj)
    }
  }
}
</script>

<style>

</style>