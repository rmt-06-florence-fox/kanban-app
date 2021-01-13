<template>
  <div id="taskUpdateForm" class="modal" style="display: block">
		<form class="modal-content animate" id="edit-task-form">
			<div class="container card p-4">
				<label for="task_category" class="form-group"
					><b>Task Category</b></label
				>
				<div class="d-flex">
					<input
						type="radio"
						id="backlog"
						name="taskCategory"
						value="1"
						v-model="updateTask"
					/>
					<label class="mr-5 ml-1" for="backlog">Back Log</label>
					<input
						type="radio"
						id="todo"
						name="taskCategory"
						value="2"
						v-model="updateTask"
					/>
					<label class="mr-5 ml-1" for="todo">Todo</label>
					<input
						type="radio"
						id="ongoing"
						name="taskCategory"
						value="3"
						v-model="updateTask"
					/>
					<label class="mr-5 ml-1" for="ongoing">On Going</label>
					<input
            :checked="updateId.categoryId === 4"
						type="radio"
						id="done"
						name="taskCategory"
						value="4"
						v-model="updateTask"
					/>
					<label class="mr-5 ml-1" for="done">Done</label>
				</div>
				<br />
				<button @click.prevent="updateTaskSubmit" class="btn btn-success" type="submit">Submit</button>
			</div>
			<div class="container" style="background-color: #f1f1f1">
				<button
					type="button"
					class="btn btn-danger mt-4 mb-4"
          @click="closeUpdateTaskForm"
				>
					Cancel
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
  name: "FormUpdateTask",
  data() {
    return {

      updateTask: this.updateId.categoryId
    }
  },
  methods: {
    closeUpdateTaskForm() {
      this.$emit('closeUpdateForm')
    },
    updateTaskSubmit() {
      const updatedTask = {
        id: this.updateId.id,
        CategoryId: this.updateTask
      }
      this.$emit('updateThisTask', updatedTask)
      this.closeUpdateTaskForm()
    }
  },
  props: ['updateId']

}
</script>

<style>

</style>