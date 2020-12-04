function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
}

function signOut() {
  auth2.signOut().then(function() {
    console.log("User signed out.");
  });
}

module.exports = { onSignIn, signOut };
