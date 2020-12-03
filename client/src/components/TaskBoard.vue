<template>
    <div class="col-sm-3 shadow content-div">
			<div
				class="mt-3 p-3 backlog-title text-white rounded font-weight-bold" :class="backgroundColor()"
      >
				{{task.name}}

      <button class="btn-add" @click.prevent="addTask">+ Add Task</button>
			</div>
			<div class="backlog-content content overflow-auto">
        <TaskItem v-for="task in task.Tasks" :key="task.id" :task='task' :dataTask='dataTask' :taskCategory='taskCategory' @changeEditStatus='edit' @deleteTask='deleteThisTask'
        @updateTask='updateThisTask'></TaskItem>
			</div>
		</div>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: 'TaskBoard',
  data() {
    return {
      taskCategory: this.task.name
    }
  },
  components: {
    TaskItem
  },
  methods: {
    edit(task) {
      this.$emit('changeEditStatus', {task, category: this.task.id })
    },
    addTask() {
      this.$emit('changeAddStatus', this.task)
    },
    deleteThisTask(id) {
      this.$emit('deleteTask', id)
    },
    backgroundColor() {
      if (this.taskCategory === 'Back-log') {
        return 'bg-success text-dark'
      } else if (this.taskCategory === 'Todo') {
        return 'bg-secondary text-white'
      } else if (this.taskCategory === 'Ongoing') {
        return 'bg-warning text-dark'
      } else if (this.taskCategory === 'Done') {
        return 'bg-primary text-white'
      }
    },
    updateThisTask(id) {
      this.$emit('updateTask', {id, categoryId: this.task.id})
    }
  },
  props: ['dataTask', 'task']
}
</script>

<style>

</style>