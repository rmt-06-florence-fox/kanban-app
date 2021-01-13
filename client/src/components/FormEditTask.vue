<template>
	<div id="taskEditForm" class="modal" style="display: block">
		<form class="modal-content animate" id="edit-task-form">
			<div class="container card">
				<label for="task_title" class="mt-4 form-group font-weight-bold"
					>Task Title</label
				>
				<input
					type="text"
					class="form-control"
					placeholder="Enter Title"
					name="title"
					id="title_input"
					required
          v-model="editTask.editTitle"
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
          v-model="editTask.editDescription"
				/>
				<br />
				<label for="task_category" class="form-group"
					><b>Task Category</b></label
				>
				<div class="d-flex">
					<input
						:checked="editForm.category === 'Back-log'"
						type="radio"
						id="backlog"
						name="taskCategory"
						value="1"
						v-model="editTask.editCategory"
					/>
					<label class="mr-5 ml-1" for="backlog">Back Log</label>
					<input
						:checked="editForm.category === 'Todo'"
						type="radio"
						id="todo"
						name="taskCategory"
						value="2"
						v-model="editTask.editCategory"
					/>
					<label class="mr-5 ml-1" for="todo">Todo</label>
					<input
						:checked="editForm.category === 'Ongoing'"
						type="radio"
						id="ongoing"
						name="taskCategory"
						value="3"
						v-model="editTask.editCategory"
					/>
					<label class="mr-5 ml-1" for="ongoing">On Going</label>
					<input
						:checked="editForm.category === 'Done'"
						type="radio"
						id="done"
						name="taskCategory"
						value="4"
						v-model="editTask.editCategory"
					/>
					<label class="mr-5 ml-1" for="done">Done</label>
				</div>
				<br />
				<button @click.prevent="editTaskSubmit" class="btn btn-success" type="submit">Submit</button>
			</div>
			<div class="container" style="background-color: #f1f1f1">
				<button
					type="button"
					class="btn btn-danger mt-4 mb-4"
          @click="closeEditTaskForm"
				>
					Cancel
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
  name: "FormEditTask",
  data() {
    return {
			editTask: {
				editTitle: this.editForm.task.title,
				editDescription: this.editForm.task.description,
				editCategory: this.editForm.category,
				editTaskId: this.editForm.task.id
			}
    }
  },
  methods: {
    closeEditTaskForm() {
			this.$emit('closeEditTaskForm')
		},
		editTaskSubmit() {
			this.$emit('editTaskSubmit', this.editTask)
			this.closeEditTaskForm()
		}
	},
	props: ['editForm']
}
</script>

<style>

</style>