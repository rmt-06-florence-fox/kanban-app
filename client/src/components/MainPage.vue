<template>
	<section id="mainsection">
		<Navbar
			@logout = 'logout'
		></Navbar>
		<Card
			:tasks = 'tasks'
			@addCategory = 'addCategory'
			@addTask = 'addTask'
			@editTask = 'editTask'
			@nextTask = 'nextTask'
			@undoTask = 'undoTask'
			@deleteTask = 'deleteTask'
			@deleteCategory = 'deleteCategory'
		></Card>
	</section>
</template>

<script>
import Navbar from './Navbar'
import Card from './Card'

export default {
	name: "MainPage",
	props: ["tasks"],
	components: {
		Navbar,
		Card
	},
	methods: {
		logout() {
			this.$emit("logout")
		},
		addTask(data) {
			this.$emit("addTask", data)
		},
		addCategory(payload) {
			this.$emit("addCategory", payload)
		},
		deleteTask(data) {
			this.$emit("deleteTask", data)
		},
		nextTask(id) {
			this.$emit("nextTask", id)
		},
		undoTask(id) {
			this.$emit("nextTask", id)
		},
		editTask(data) {
			this.$emit("editTask", data)
		},
		deleteCategory (data) {
			this.$emit('deleteCategory', data)
		}
	}
}
</script>

<style>

</style>