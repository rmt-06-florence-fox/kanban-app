<template>
  <div class="kanban-col">
    <div class="card-list">
      <div class="card-list-header">
        <h6>{{category.name}}</h6>
      </div>
      <!-- Tasks -->
      <div class="card-list-body">
        <!-- Title -->
        <Task
          v-for="task in filterCategory" 
          :key="task.id"
          :task="task"
        ></Task>
        
      </div>
      <div class="card-list-footer">
        <button class="btn btn-link btn-sm text-small" data-toggle="modal" data-target="#task-add-modal">Add task</button>
      </div>
      <form class="modal fade" id="task-add-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">New Task</h5>
              <button type="button" class="close btn btn-round" data-dismiss="modal" aria-label="Close">
                <i class="material-icons">close</i>
              </button>
            </div>
            <!--end of modal head-->
            <div class="modal-body">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="task-add-details" role="tabpanel">
                  <div class="form-group row align-items-center">
                    <label class="col-3">Name</label>
                    <input class="form-control col" type="text" placeholder="Task name" name="task-name" />
                  </div>
                </div>
              </div>
            </div>
            <!--end of modal body-->
            <div class="modal-footer">
              <button role="button" class="btn btn-primary" type="submit">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'Category',
  props: ['category','tasks'],
  components: {Task},
  data() {
    return {
    }
  },
  computed: {
    filterCategory() {
      return this.tasks.filter(item => item.CategoryId == this.category.id)
    }
  }
}
</script>

<style>

</style>