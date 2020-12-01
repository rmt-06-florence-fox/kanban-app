function onSignIn(googleUser) {
	const googleToken = googleUser.getAuthResponse().id_token;
	console.log(googleToken);
	$.ajax({
		url: 'http://localhost:3000/googleLogin',
		method: 'POST',
		data: {
			googleToken,
		},
	})
		.done((response) => {
			console.log(response.access_token);
			localStorage.setItem('access_token', response.access_token);
		})
		.fail((err) => {
			console.log(err);
		});
}

function logout() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log('User signed out.');
	});
	localStorage.clear();
}
