<template>
  <div class="modal" id="editForm">
         <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" style="font-family: 'Russo One', sans-serif; color: #5ec0ca; font-size: xx-large;">Edit Task</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('emitChangePage', 'MainPage')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <form id="submit-edit-form" class="mr-5 ml-5">
                 <div class="form-group">
                   Task Name
                   <input type="text" class="form-control" id="task-name-add" placeholder="Enter task name" v-model="task.title">
                 </div>
                 <div class="form-group">
                   Due Date
                   <input type="date" class="form-control" id="task-due-date-add" v-model="task.due_date">
                 </div>
                 <button type="submit" class="btn btn-info" data-dismiss="modal"  @click="$emit('emitEditTask', taskEdited)">Edit</button>
               </form>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "editForm",
  data() {
    return {
      taskEdited: {
        id: this.task.id,
        title: this.task.title,
        due_date: this.task.due_date,
        CategoryId: this.task.CategoryId
      }
    };
  },
  props: ['task']
  
};
</script>

<style scoped>
</style>