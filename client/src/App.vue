<template>
	<div>
		<LoginPage
			v-if = "curentPage == 'login-page'"
			@changePage= "toPage"
			@login = "login"
			@onSuccess = "onSuccess"
		></LoginPage>
		<RegisterPage
			v-else-if = "curentPage == 'register-page'"
			@changePage= "toPage"
			@register= "register"
		></RegisterPage>
		<MainPage
			@addTask = "addTasks"
			@editTask = "editTasks"
			@addCategory = "addCategory"
			v-else-if = "curentPage == 'main-page'"
			@logout = "logout"
			:tasks = "tasks"
			@deleteTask = "deleteTask"
			@nextTask = "nextTask"
			@undoTask = "undoTask"
			@deleteCategory = 'deleteCategory'
		></MainPage>
	</div>
</template>

<script>
const URL = "http://localhost:3000"
import axios from 'axios'
const access_token = localStorage.getItem("access_token");
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage' 
import MainPage from './components/MainPage' 

export default {
	name: "App",
	data() {
		return {
			curentPage: "login-page",
			tasks: []
		}
	},
	components: {
		RegisterPage,
		LoginPage,
		MainPage
	},
	methods: {
		toPage(page) {
			this.curentPage = page
		},
		register(payload) {
			axios({
				method: "POST",
				url: URL + "/register",
				data: payload
			})
			.then(({data}) => {
				this.$swal(
					"Register Success",
					`${data.email}, please login`,
					"success"
				);
				this.curentPage = "login-page"
			})
			.catch(err => {
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.error[0]}`,
					"error"
				);
			});
		},
		login(payload) {
			axios({
				method: "POST",
				url: URL + "/login",
				data: payload
			})
			.then(({data}) => {
				localStorage.setItem("access_token", data.access_token);
				localStorage.setItem("name", data.name);
				this.$swal(
					"",
					`welcome, ${data.name}`,
					"success"
				);
				this.curentPage = "main-page"
				this.fetch()
			})
			.catch(err => {
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.message}`,
					"error"
				);
			});
		},
		logout() {
			this.curentPage = "login-page";
			localStorage.clear();
		},
		fetch() {
			axios({
				method: "GET",
				url: URL + "/tasks",
				headers: { access_token }
			})
			.then(({ data }) => {
				this.tasks = data;
			})
			.catch(err => {
				this.$swal(
						"",
						`error ${err.response.status} : failed to show task, ${err.response.data.message}`,
						"error"
				);
			});
		},
		onSuccess(idToken) {
			axios({
				method: "POST",
				url: URL + "/googleLogin",
				data: { idToken }
			})
			.then(({data}) => {
				localStorage.setItem("access_token", data.access_token);
				this.$swal(
					"",
					`welcome`,
					"success"
				);
				this.curentPage = "main-page"
				this.fetch()
			}).
			catch(err => {
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.message}`,
					"error"
				);
			});
		},
		addTasks(data) {
			axios({
				url: URL + "/tasks",
				method: "POST",
				data: {
					title: data.title,
					CategoryId: data.CategoryId
				},
				headers: { access_token }
			})
			.then(({data}) => {
				this.$swal(
					"",
					`${data.title} success menambahkan task new`,
					"success"
				);
				this.fetch()
			})
			.catch(err => {
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.message}`,
					"error"
				);
			});
		},
		addCategory(payload) {
			axios({
				url: URL + "/categories",
				method: "POST",
				data: payload,
				headers: { access_token }
			})
			.then(({data}) => {
				this.$swal(
					"",
					`${data.categoryName} success menambahkan task new`,
					"success"
				);
				this.fetch()
			})
			.catch(err => {
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.message}`,
					"error"
				);
			});
		},
		editTasks(data) {
			const access_token = localStorage.getItem("access_token")
			axios({
				url: URL + `/tasks/${data.id}`,
				method: "PUT",
				data: {
					title: data.updateTitle,
				},
				headers: { access_token }
			})
			.then(({data}) => {
				this.$swal(
					"",
					`task id: ${data.id} success to edit`,
					"success"
				);
				this.fetch()
			})
			.catch(err => {
				console.log(err.response.data);
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.message}`,
					"error"
				);
			});
		},
		deleteTask(data) {
			const swalWithBootstrapButtons = this.$swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: true
			})
			swalWithBootstrapButtons.fire({
			title: `Are you sure?`,
			text: `delete task: "${data.title}"`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes delete it!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
			}).then((result) => {
				if (result.isConfirmed) {
					axios({
					method: "DELETE",
					url: URL + `/tasks/${data.id}`,
					headers: { access_token }
					})
					.then(() => {
						this.fetch()
						swalWithBootstrapButtons.fire(
							'Deleted!',
							'Your file has been deleted.',
							'success'
						)
					}).catch((err) => {
						console.log(err);
					})
				} else {
					swalWithBootstrapButtons.fire(
					'Cancelled',
					'cancel delete , Your imaginary file is safe :)',
					'error'
					)
				}
			})
		},
		nextTask(id) {
			axios({
				method: "PATCH",
				url: URL + `/tasks/${id.id}`,
				data: {
					CategoryId: id.CategoryId
				},
				headers: { access_token }
			})
			.then(() => {
				this.fetch()
			}).catch((err) => {
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.message}`,
					"error"
				);
			});
		},
		undoTask(id) {
			axios({
				method: "PATCH",
				url: URL + `/tasks/${id.id}`,
				data: {
					CategoryId: id.CategoryId
				},
				headers: { access_token }
			})
			.then(() => {
				this.fetch()
			}).catch((err) => {
				this.$swal(
					"",
					`error ${err.response.status} :  ${err.response.data.message}`,
					"error"
				);
			});
		},
		deleteCategory (data) {
			const swalWithBootstrapButtons = this.$swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: true
			})
			swalWithBootstrapButtons.fire({
			title: `Are you sure?`,
			text: `delete Category: "${data.id}"`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes delete it!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
			}).then((result) => {
				if (result.isConfirmed) {
					axios({
					method: "DELETE",
					url: URL + `/categories/${data.id}`,
					headers: { access_token }
					})
					.then(() => {
						this.fetch()
						swalWithBootstrapButtons.fire(
							'Deleted!',
							'Your file has been deleted.',
							'success'
						)
					}).catch((err) => {
						console.log(err);
					});
				} else {
					swalWithBootstrapButtons.fire(
					'Cancelled',
					'cancel delete , Your imaginary file is safe :)',
					'error'
					)
				}
			})
		}
	},
	created() {
		if (access_token) {
			this.fetch();
			this.curentPage = "main-page";
		} else {
			this.curentPage = "login-page";
		}
	}
}
</script>

<style>

</style>