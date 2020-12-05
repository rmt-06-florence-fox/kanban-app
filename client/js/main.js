var app = new Vue({
    el: '#app',
    data: {
        pageName: "login-page",
        userLogin: {
            email: "",
            password: ""
        },
        userRegister: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        },
        userFullName: "",
        TaskId: 0,
        CategoryId: 0,
        task: {
            title: "",
            description: "",
            due_date: "",
            CategoryId: 0
        },
        category: {
            name: "",
            color: "",
        },
        addTaskForm: false,
        editTaskForm: false,
        delTaskConfirm: false,
        addCatForm: false,
        editCatForm: false,
        delCatConfirm: false,
        categories: [],
        tasks: [],
        isError:false
    },
    methods: {
        changePage(pageName) {
            this.pageName = pageName;
        },
        login() {   
            axios({
                url: "http://localhost:3000/login",
                method: "POST",
                data: this.userLogin
            })
            .then(({data}) => {
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("fullName", data.fullName);
                this.pageName="main-page";
                this.fetchCategories();
                this.fetchTasks();
                Swal.fire(
                    'Logged In!',
                    "Welcome!",
                    'success'
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.userLogin.email = "";
                this.userLogin.password = "";
            });
        },
        logout() {
            this.pageName = "login-page";
            localStorage.clear();
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function() {
            console.log('User signed out.');
            });
        },
        register(){ 
            axios({
                url: "http://localhost:3000/register",
                method: "POST",
                data: this.userRegister
            })
            .then(({data}) => {
                this.pageName = "login-page";
                Swal.fire (
                    "Registerd",
                    "Please log in!",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.userRegister.first_name = "";
                this.userRegister.last_name = "";
                this.userRegister.email = "";
                this.userRegister.password = "";
            });
        },
        fetchCategories() {
            axios({
                url: `http://localhost:3000/categories`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(({data}) => {
                this.categories = data;
            })
            .catch((err) => {
                console.log(err);
            })
        },
        fetchTasks() {
            axios({
                url: `http://localhost:3000/tasks`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(({data}) => {
                this.tasks = data;
            })
            .catch((err) => {
                console.log(err);
            })
        },
        showAddCatForm() {
            this.addCatForm = true;
            this.category.name = "";
            this.category.color ="#ff3b30";
        },
        showAddTaskForm(CategoryId) {
            this.task.CategoryId = CategoryId;
            this.addTaskForm = true;
            this.task.title = "";
            this.task.description = "";
            this.task.due_date = "";
        },
        showEditCatForm(CategoryId) {
            this.CategoryId = CategoryId;
            axios({
                url: `http://localhost:3000/categories/${CategoryId}`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(({data}) => {
                console.log(data)
                this.category.name = data.name,
                this.category.color = data.color
            })
            .catch((err) => {
                console.log(err);
            })
            this.editCatForm = true;
        },
        showDelCatConfirm(CategoryId) {
            this.CategoryId = CategoryId;
            this.delCatConfirm = true;
        },
        showEditTaskForm(TaskId) {
            this.TaskId = TaskId;
            axios({
                url: `http://localhost:3000/tasks/${TaskId}`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(({data}) => {
                this.task.title = data.title;
                this.task.description = data.description;
                this.task.due_date = data.due_date;
                this.task.CategoryId = data.CategoryId;
            })
            .catch((err) => {
                console.log(err);
            })
            this.editTaskForm = true;
        },
        showDelTaskConfirm() {
            this.delTaskConfirm = true;
        },
        toggleAddTaskForm() {
            this.addTaskForm = !this.addTaskForm;
        },
        toggleEditTaskForm() {
            this.editTaskForm = !this.editTaskForm;
        },
        toggleAddCatForm() {
            this.addCatForm = !this.addCatForm;
        },
        toggleEditCatForm() {
            this.editCatForm = !this.editCatForm;
        },
        toggleDelTaskConfirm() {
            this.delTaskConfirm = !this.delTaskConfirm;
        },
        toggleDelCatConfirm() {
            this.delCatConfirm = !this.delCatConfirm;
        },
        addTask() {
            axios({
                url: "http://localhost:3000/tasks",
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: this.task
            })
            .then(({data}) => {
                this.toggleAddTaskForm();
                $("#add-task-modal").modal("hide");
                this.fetchCategories();
                this.fetchTasks();
                Swal.fire (
                    "Added",
                    "A new task has been added.",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.task.title = "";
                this.task.description = "";
                this.task.due_date = "";
                this.task.CategoryId = 0;
                this.CategoryId = 0;
            });
        },
        editTask() {
            axios({
                url: `http://localhost:3000/tasks/${this.TaskId}`,
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: this.task
            })
            .then(({data}) => {
                this.toggleEditTaskForm();
                $("#edit-task-modal").modal("hide");
                this.fetchCategories();
                this.fetchTasks();
                Swal.fire (
                    "Edited",
                    "The task has been edited.",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.task.title = "";
                this.task.description = "";
                this.task.due_date = "";
                this.task.CategoryId = 0;
            });
        },
        deleteTask() {
            console.log(this.TaskId)
            axios({
                url: `http://localhost:3000/tasks/${this.TaskId}`,
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
            })
            .then(({data}) => {
                this.toggleDelTaskConfirm();
                $("#delete-task-confirm").modal("hide");
                this.fetchCategories();
                this.fetchTasks();
                Swal.fire (
                    "Deleted",
                    data.message,
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.task.title = "";
                this.task.description = "";
                this.task.due_date = "";
                this.task.CategoryId = 0;
                this.TaskId = 0;
            });
        },
        addCategory() {
            axios({
                url: "http://localhost:3000/categories",
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: this.category
            })
            .then(({data}) => {
                this.toggleAddCatForm();
                $("#add-category-modal").modal("hide");
                this.fetchCategories();
                this.fetchTasks();
                Swal.fire (
                    "Added",
                    "A new category has been added.",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.category.name = "";
                this.category.color = "#ff3b30";
            });
        },
        editCategory() {
            axios({
                url: `http://localhost:3000/categories/${this.CategoryId}`,
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: this.category
            })
            .then(({data}) => {
                this.toggleEditCatForm();
                $("#edit-category-modal").modal("hide");
                this.fetchCategories();
                this.fetchTasks();
                Swal.fire (
                    "Edited",
                    "The category has been edited.",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.category.name = "";
                this.category.color ="#ff3b30";
                this.CategoryId = 0;
            });
        },
        deleteCategory() {  
            axios({
                url: `http://localhost:3000/categories/${this.CategoryId}`,
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(({data}) => {
                this.toggleDelCatConfirm();
                $("#delete-category-confirm").modal("hide");
                this.fetchCategories();
                this.fetchTasks();
                Swal.fire (
                    "Deleted",
                    data.message,
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.category.name = "";
                this.category.color ="#ff3b30";
                this.CategoryId = 0;
                this.CategoryId = 0;
            });
        },
        formatDueDate(due_date) {
            let months = new Array();
                months[1] = "Jan";
                months[2] = "Feb";
                months[3] = "Mar";
                months[4] = "Apr";
                months[5] = "May";
                months[6] = "Jun";
                months[7] = "Jul";
                months[8] = "Aug";
                months[9] = "Sep";
                months[10] = "Oct";
                months[11] = "Nov";
                months[12] = "Dec";
    
            let d = new Date(due_date),	// Convert the passed timestamp to milliseconds
            mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
            date
	
            let monthName = months[Number(mm)];
            date= `${dd} ${monthName}`;

            return date;
        },
        formatUpdatedAt(updatedAt) {
            let months = new Array();
                months[1] = "Jan";
                months[2] = "Feb";
                months[3] = "Mar";
                months[4] = "Apr";
                months[5] = "May";
                months[6] = "Jun";
                months[7] = "Jul";
                months[8] = "Aug";
                months[9] = "Sep";
                months[10] = "Oct";
                months[11] = "Nov";
                months[12] = "Dec";

            let d = new Date(updatedAt),	// Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
            ampm = 'AM',
            time,
            timeStamp

            if (hh > 12) {
                h = hh - 12;
                ampm = 'PM';
            } else if (hh === 12) {
                h = 12;
                ampm = 'PM';
            } else if (hh == 0) {
                h = 12;
            }
            
            let monthName = months[Number(mm)];
            time = h + ':' + min + ' ' + ampm;
            timeStamp= `${dd} ${monthName} ${yyyy}, ${time}`;
            
            return timeStamp;
        },
        onSignIn(googleUser) {
            var googleToken = googleUser.getAuthResponse().id_token;
            axios({
                url: "https://fancytodorud.herokuapp.com/googleLogin",
                method: "POST",
                data: {
                    googleToken
                }
            })
            .then(({data}) => {
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("fullName", data.fullName);
                this.pageName="main-page";
                Swal.fire(
                    'Logged In!',
                    "Welcome!",
                    'success'
                );
            })
            .catch((err) => {
                console.log(err);
            });
        }    
    },
    created() {
        if (localStorage.getItem("access_token")) {
            this.pageName = "main-page";
            this.fetchCategories();
            this.fetchTasks();
        } else {
            this.pageName = "login-page"
        }
    }
});