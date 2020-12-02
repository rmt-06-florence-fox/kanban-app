

function onSignIn(googleUser) {
    var tokenGoogle = googleUser.getAuthResponse().id_token;
    
}

function signOut() {
    localStorage.removeItem('access_token')
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}