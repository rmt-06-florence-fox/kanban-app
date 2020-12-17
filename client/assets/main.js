$(document).ready(function() {
    if (localStorage.getItem('access_token')) {
        showMainPage()
    } else {
        showRegistrationPage()
    }
    $("#back-login").click(()=> {
        showLoginPage()
    })  
    $("#back-register").click(() => {
        showRegistrationPage()
    })
    $("#registration-form").on("submit", function(e) {
        e.preventDefault()        
        register()
    })
    $("#login-form").on("submit", function(e) {
        e.preventDefault()        
        login()
    })
    $("#btn-logout").click(()=> {
        logout()
    })
    $("#btn-add").click(() => {
        showAddPage()
    })
    $("#back-add").click(()=> {
        showMainPage()
    })
    $("#form-add").on("submit", function(e) {
        e.preventDefault()        
        createTask()
    })
    $("#btn-show").click(()=> {
        fetchTask()
        showListPage()
    })
    $("#back-navbar").click(()=> {
        showMainPage()
    })
});