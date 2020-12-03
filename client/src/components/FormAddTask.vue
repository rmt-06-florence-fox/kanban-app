<template>
	<div id="formAddTask" class="modal" style="display: block">
		<form class="modal-content animate" id="add-task-form">
			<div class="container card">
				<h2 class="text-center mt-4">Add New Task to {{Category.name}}</h2>
				<label for="task_title" class="mt-2 form-group font-weight-bold"
					>Task Title</label
				>
				<input
					type="text"
					class="form-control"
					placeholder="Enter Title"
					name="title"
					id="title_input"
					required
          v-model="newTask.taskTitle"
				/>
				<br />
				<label for="task_description" class="form-group"
					><b>Task Description</b></label
				>
				<input
					type="text"
					class="form-control"
					placeholder="Enter Description"
					name="task_description"
          required
          v-model="newTask.taskDescription"
				/>
				<br />
				<button @click.prevent="createTask" class="btn btn-success" type="submit">Submit</button>
			</div>
			<div class="container" style="background-color: #f1f1f1">
				<button
					type="button"
					class="btn btn-danger mt-4 mb-4"
          @click.prevent="closeAddForm"
				>
					Cancel
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "FormAddTask",
  data() {
    return {
      newTask: {
        taskTitle: '',
        taskDescription: '',
        taskCategoryId: this.Category.id
      }
    }
  },
  methods: {
    closeAddForm() {
      this.$emit('closeAddForm')
    },
    createTask() {
      if (!this.newTask.taskTitle || !this.newTask.taskDescription) {
        Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please fill in title and description!',
				})
      } else {
        this.$emit('createTask', this.newTask)
        this.$emit('closeAddForm')
      }
    }
  },
  props: ['Category'],
  computed: {
  }
}
</script>

<style>

</style>