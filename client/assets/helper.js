function showRegistrationPage() {
    $("#login-page").hide()
    $("#registration-page").show()
    $("#main-page").hide()
    $("#btn-logout").hide()
    $("#edit-page").hide()
    $("#add-form-page").hide()
    $("#list-page").hide()   
    $("#navbar").hide() 
    $("#btn-show").hide()   
}
function showLoginPage() {
    $("#login-page").show()
    $("#registration-page").hide()
    $("#main-page").hide()
    $("#btn-logout").hide()
    $("#edit-page").hide()
    $("#add-form-page").hide()
    $("#list-page").hide() 
    $("#navbar").hide()  
    $("#btn-show").hide()   
}
function showMainPage() {
    $("#login-page").hide()
    $("#registration-page").hide()
    $("#main-page").show()
    $("#btn-logout").show()
    $("#edit-page").hide()
    $("#add-form-page").hide()
    $("#list-page").hide()
    $("#navbar").show()
    $("#back-navbar").hide()
    $("#btn-show").show()   
}
function showAddPage() {
    $("#login-page").hide()
    $("#registration-page").hide()
    $("#main-page").hide()
    $("#btn-logout").show()
    $("#edit-page").hide()
    $("#add-form-page").show()
    $("#list-page").hide()
    $("#navbar").show()
    $("#back-navbar").show()
    $("#btn-show").hide()   
}
function showListPage(response) {
    $("#login-page").hide()
    $("#registration-page").hide()
    $("#main-page").hide()
    $("#btn-logout").show()
    $("#edit-page").hide()
    $("#add-form-page").hide()
    $("#navbar").show()   
    $("#back-navbar").show()   
    $("#btn-show").hide()   
    $("#list-page").show() 
    response.forEach(task => {
        $("#list-page").append(`
            <div class="row mt-4">
                <div class="col-md-3 col-sm-6">
                    <div class="p-3 bg-primary rounded">
                        Backlog
                    </div>
                    <div class="card shadow">
                        <div class="card-body">
                            <h4 class="card-title">${task.title}</h4>
                            <p class="card-text">${task.category}</p>
                            <a href="#" class="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="p-3 bg-secondary rounded">
                        Todo
                    </div>
                    <div class="card shadow">
                        <div class="card-body">
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-text">abcabcabc</p>
                            <a href="#" class="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="p-3 bg-info rounded">
                        Doing
                    </div>
                    <div class="card shadow">
                        <div class="card-body">
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-text">abcabcabc</p>
                            <a href="#" class="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="p-3 bg-danger rounded">
                        Done
                    </div>
                    <div class="card shadow">
                        <div class="card-body">
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-text">abcabcabc</p>
                            <a href="#" class="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
            </div> 
        `) 
    })
}
function showEditPage(task) {
    $("#login-page").hide()
    $("#registration-page").hide()
    $("#main-page").hide()
    $("#btn-logout").show()
    $("#add-form-page").hide()
    $("#list-page").show() 
    $("#navbar").show() 
    $("#back-navbar").show()
    $("#btn-show").hide()   
    $("#edit-page").show()
    $("#edit-page").append(`
        <h2>Form Edit Task</h2>
        <form id="form-edit" onsubmit="updateTask(${task.id})">
            <div class="form-group">
                <label for="title-edit">Title</label>
                <input type="text" class="form-control" id="title-edit" value="${task.title}">
            </div>
            <div class="form-group">
                <label for="category-edit">Category</label>
                <select class="form-control" id="category-edit" value="${task.category}">
                    <option selected disabled>Select Category</option>
                    <option>Backlog</option>
                    <option>Todo</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button></br></br>
        </form>
    `)      
}
function register() {
    const email = $("#register-email").val()
    const password = $("#register-password").val()
    $.ajax({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: {
            email,
            password
        }
    })
    .done(response => {
        showLoginPage()
    })
    .fail((xhr, textStatus) => {
        console.log(xhr, textStatus)
    })
    .always(() => {
        $("#register-email").val("")
        $("#register-password").val("")
    })
}
function login() {
    const email = $("#login-email").val()
    const password = $("#login-password").val()
    $.ajax({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
            email: email,
            password: password
        }
    })
    .done(response => {
        localStorage.setItem('access_token', response.access_token)
        showMainPage()
    })
    .fail((xhr, textStatus) => {
        console.log(xhr, textStatus)
    })
    .always(() => {
        $("#login-email").val("")
        $("#login-password").val("")
    })
}
function logout() {
    localStorage.clear()
    showLoginPage()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
function createTask () {
    const title = $("#title-input").val()
    const category = $("#category-input").val()
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/tasks",
        headers: {
            access_token: localStorage.getItem('access_token')
        },
        data: {
            title,
            category
        }
    })
    .done(response => {
        showMainPage()
    })
    .fail(xhr => {
        console.log(xhr)
    })
    .always(() => {
        $("#title-input").val("")
        $("#description-input").val("")
        $("#status-input").val("")
        $("#duedate-input").val("")
    })
}
function fetchTask() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/tasks",
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    })
    .done(response => {
        $("#list-page").empty()
        showListPage(response)              
        // response.forEach(task => {
        //     $("#list-page").append(task.title,' | ', task.category,' | ', `<button onclick="editTask(${task.id})">Edit</button>`,' | ' ,`<button onclick="deleteTask(${task.id})">Delete</button>`,`</br>`)
        // })
    })
    .fail (xhr => {
        console.log(xhr)
    })
}
function editTask(id) {
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/tasks/${id}`,
        headers:{
            access_token: localStorage.getItem('access_token')
        }
    })
    .done(response => {
        $("#edit-page").empty()              
        showEditPage(response)
    })
    .fail(xhr => console.log(xhr))
}
function updateTask(id) {
    const title = $('#title-edit').val()
    const category = $('#category-edit').val()
    $.ajax({
        method: 'PUT',
        url: `http://localhost:3000/tasks/${id}`,
        headers:{
            access_token: localStorage.getItem('access_token')
        },
        data:{
            title,
            category
        }
    })
    .done(() => {
        showListPage()
    })
    .fail(xhr => console.log(xhr))
    .always(_ => $('#edit-page').trigger('reset'))
}
function deleteTask(id) {
    $.ajax({
        method: 'DELETE',
        url: `http://localhost:3000/tasks/${id}`,
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    })
    .done(response => {
        fetchTask()
    })
    .fail(xhr => {
        console.log(xhr)
    })
}
function onSignIn(googleUser) {
    const googleToken = googleUser.getAuthResponse().id_token;
    $.ajax({
        url: 'http://localhost:3000/googleLogin',
        method: 'POST',
        data: {
            googleToken
        }
    })
    .done(response => {
        localStorage.setItem('access_token', response.access_token)
        showMainPage()
    })
    .fail(err => {
        console.log(err)
    })
}
