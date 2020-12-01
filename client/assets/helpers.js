function showLoginPage () {
    $('#login-page').show()
    $('#home-page').hide()
}

function showHomePage () {
    $('#login-page').hide()
    $('#home-page').show()
}

function login() {
    const email = $('#login-email').val()
    const password = $('#login-password').val()
    console.log(email)
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/login",
        data: { email, password }
    })
        .done(response => {
            localStorage.setItem('access_token', response.access_token)
            showHomePage()
        })
        .fail(xhr => {
            console.log(xhr)
        })
        .always(_ => {
            $('#login-email').val('')
            $('#login-password').val('')
        })
}

function register() {
    const name = $('#register-name').val()
    const email = $('#register-email').val()
    const password = $('#register-password').val()
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/register",
        data: { name, email, password }
    })
        .done(response => {
            console.log('register success')
            showLoginPage()
        })
        .fail(xhr => {
            console.log(xhr)
        })
        .always(_ => {
            const name = $('#register-name').val('')
            const email = $('#register-email').val('')
            const password = $('#register-password').val('')
            })
}


function logout() {
    localStorage.clear()
    showLoginPage()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
}

function onSignIn(googleUser) {
    const googleToken = googleUser.getAuthResponse().id_token;

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/googleLogin",
        data: { googleToken }
    })
    .done(response => {
        console.log('masuk')
        localStorage.setItem('access_token', response.access_token)
        showHomePage()
    })
    .fail(xhr => {
        console.log(xhr)
    })
}