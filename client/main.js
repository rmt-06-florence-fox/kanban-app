var app = new Vue({
	el: '#kanban-app',
	data: {
		pageName: 'loginPage',
		loginStatus: 'loggedIn',
		registerStatus: 'none',
		email_input: '',
		password_input: '',
		newEmail_input: '',
		newPassword_input: '',
		addTaskDisplay: 'none',
		editTaskDisplay: 'none',
		newTask: {
			addTaskTitle: '',
			addTaskDescription: '',
		},
		editTask: {
			editTaskTitle: '',
			editTaskDescription: '',
			editTaskCategory: '',
		},
	},
	methods: {
		closeAddForm() {
			this.addTaskDisplay = 'none';
			this.newTask.addTaskTitle = '';
			this.newTask.addTaskDescription = '';
		},
		showAddForm() {
			this.addTaskDisplay = 'show';
		},
		closeEditForm() {
			this.editTaskDisplay = 'none';
			this.editTask.editTaskTitle = '';
			this.editTask.editTaskDescription = '';
			this.editTask.editTaskCategory = '';
		},
		showEditForm() {
			this.editTaskDisplay = 'show';
		},
		changePageName(pageName) {
			this.pageName = pageName;
		},
		changeLoginStatus(loginStatus) {
			this.loginStatus = loginStatus;
		},
		logout() {
			localStorage.removeItem('access_token');
			this.pageName = 'loginPage';
			this.loginStatus = 'loggedOut';
		},
		register() {
			axios({
				url: 'http://localhost:3000/register',
				method: 'POST',
				data: {
					email: this.newEmail_input,
					password: this.newPassword_input,
				},
			})
				.then((response) => {
					console.log(response);
					this.pageName = 'loginPage';
					this.registerStatus = 'done';
				})
				.catch((err) => {
					console.log(err);
				})
				.finally((_) => {
					this.newEmail_input = '';
					this.newPassword_input = '';
				});
		},
		login() {
			axios({
				url: 'http://localhost:3000/login',
				method: 'POST',
				data: {
					email: this.email_input,
					password: this.password_input,
				},
			})
				.then((response) => {
					console.log(response);
					localStorage.setItem('access_token', response.data.access_token);
					this.pageName = 'homePage';
					this.loginStatus = 'loggedIn';
				})
				.catch((err) => {
					console.log(err);
				})
				.finally((_) => {
					(this.email_input = ''), (this.password_input = '');
				});
		},
	},
	created() {
		if (localStorage.getItem('access_token')) {
			this.pageName = 'homePage';
			this.loginStatus = 'loggedIn';
		} else {
			this.PageName = 'loginPage';
			this.loginStatus = 'loggedOut';
		}
	},
});
