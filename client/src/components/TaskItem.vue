<template>
  <div class="card mt-2 shadow bg-task" :class="borderColor()">
		<div class="card-body">
			<h5 class="card-title">{{task.title}}</h5>
			<p class="card-text">
				{{task.description}}
			</p>
			<p class="task-creator small card-text">
				*Task by: <span class="text-primary"> {{task.User.email}} </span><br />*Created at: <span class="text-success"> {{createdDate}}</span>
			</p>
      
			<div class="container d-flex flex-row-reverse">
				<div class="column">
					<button
						class="btn-warning shadow"
            @click='editTask'
					>
						<i class="fa fa-edit fa-fw"></i>
					</button>
					<button @click='deleteTask' class="btn-danger shadow">
						<i class="fa fa-trash-o fa-fw"></i>
					</button>
					<button @click='updateTask' class="btn-success shadow">
						<i class="fa fa-check-square"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "TaskItem",
  data() {
    return {
      editTitle: '',
      editCategory: '',
      createdDate: new Date(this.task.createdAt).toLocaleString('en-Us')
    }
  },
  methods: {
    editTask() {
      this.$emit('changeEditStatus', this.task)
    },
    deleteTask() {
      this.$emit('deleteTask', this.task.id)
    },
    borderColor() {
      if (this.taskCategory === 'Back-log') {
        return 'border-success'
      } else if (this.taskCategory === 'Todo') {
        return 'border-secondary'
      } else if (this.taskCategory === 'Ongoing') {
        return 'border-warning'
      } else if (this.taskCategory === 'Done') {
        return 'border-primary'
      }
    },
    updateTask() {
      this.$emit('updateTask', this.task.id)
    }
  },
  props: ['dataTask', 'task', 'taskCategory']

}
</script>

<style>

</style>

