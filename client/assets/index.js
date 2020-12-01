$(document).ready(() => {
    if (localStorage.getItem('access_token')) {
        showHomePage()
    } else {
        showLoginPage()
    }
    
    $('#register').on('submit', (e) => {
        e.preventDefault()
        register()
        showLoginPage()
    })

    $('#login').on('submit', (e) => {
        e.preventDefault()
        login()
    })

})