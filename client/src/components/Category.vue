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
          @deleteTask="deleteTask"
        ></Task>
        
      </div>
      <div class="card-list-footer">
        <button @click="getCategoryId(category.id)" class="btn btn-link btn-sm text-small" data-toggle="modal" :data-target="'#taskAddModal-'+ category.id">Add task</button>
      </div>
      <form @submit.prevent="addTask(category.id)" class="modal fade" :id="'taskAddModal-'+ category.id" tabindex="-1" aria-hidden="true">
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
                    <input v-model="title" class="form-control col" type="text" placeholder="Task name" name="task-name" />
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
      title: '',
    }
  },
  methods: {
    getCategoryId(id) {
      this.getId = id
    },
    addTask(id) {
      const payload = {
        id: id,
        title: this.title
      }
      this.$emit('addTask', payload)
    },
    deleteTask(id) {
      this.$emit('deleteTask', id)
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