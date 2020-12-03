<template>
  <div>
    <section id="homepage">
      <br />
      <div class="container mt-4 mb-5">
        <div class="row">
          <TaskBoard v-for="task in dataTask" :key="task.id" :task='task' @changeEditStatus="editStatusToTrue" @changeAddStatus='addStatusToTrue' @deleteTask='deleteThisTask'
          @updateTask='updateThisTask'></TaskBoard>
        </div>
      </div>
    </section>
    <FormEditTask @closeEditTaskForm='editStatusToTrue' @editTaskSubmit='editThisTask' v-if="editStatus" :editForm="editForm"></FormEditTask>
    <FormAddTask v-if="addStatus" @closeAddForm='addStatusToTrue' :Category="Category" @createTask="addNewTask" ></FormAddTask>
    <FormUpdateTask v-if="updateStatus" @closeUpdateForm='updateThisTask' :updateId="updateId" @updateThisTask='updateTask'></FormUpdateTask>
  </div>
</template>

<script>
import TaskBoard from './TaskBoard'
import FormEditTask from './FormEditTask'
import FormAddTask from './FormAddTask'
import FormUpdateTask from './FormUpdateTask'

export default {
  name: "BoardList",
  data() {
    return {
      editStatus: false,
      addStatus: false,
      updateStatus: false,
      updateId: {},
      Category: {},
      editForm: {}
    }
  },
  methods: {
    editStatusToTrue(id) {
      this.editForm = id
      this.editStatus = !this.editStatus
    },
    addStatusToTrue(task) {
      this.Category = task
      this.addStatus = !this.addStatus
    },
    addNewTask(newTask) {
      // console.log(newTask, '<<< dari BoardList')
      this.$emit('createNewTask', newTask)
    },
    deleteThisTask(id) {
      this.$emit('deleteTask', id)
    },
    editThisTask(editTask) {
      this.$emit('editTask', editTask)
    },
    updateThisTask(id) {
      this.updateId = id
      this.updateStatus = !this.updateStatus
    },
    updateTask(id) {
      this.$emit('updateThisTask', id)
    }
  },
  props: ['dataTask', 'task'],
  components: {
    TaskBoard,
    FormEditTask,
    FormAddTask,
    FormUpdateTask,
  }
}
</script>

<style>

</style>