const server = "http://localhost:3000"
function showLoginPage(){
  $("#main_page").hide()
  $("#login_form").show()
  $("#register_form").hide()
  $("#button_logout").hide()
  $("#form-edit-todo").hide()
}

function showMainPage(){
  $("#main_page").show()
  $("#login_form").hide()
  $("#register_form").hide()
  $("#button_logout").show()
}
function showRegister(){
  $("#main_page").hide()
  $("#login_form").hide()
  $("#register_form").show()
  $("#button_logout").hide()
  $("#form-edit-todo").hide()
}
function showEditForm(id){
  $("#main_page").hide()
  $("#login_form").hide()
  $("#register_form").hide()
  $("#button_logout").show()
}
function logout(){
  localStorage.clear( )
  showLoginPage()
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    $("#todo-list").empty()
    console.log('User signed out.');
  });
}
function login(event){
  event.preventDefault()
  const email = $("#email_input_login").val()
  const password = $("#password_input_login").val()
  $.ajax({
    url: `${server}/login`,
    method: 'POST',
    data: {
      email,
      password
    }
  })
  .done(res => {
    localStorage.setItem('access_token', res.access_token)
    showMainPage()
  })
  .fail((xhr, textStatus) => {
    swal(`${xhr.responseJSON.message}`);
  }) 
  .always( () => {
    $("#email_input_login").val("")
    $("#password_input_login").val("")
  })
}

function onSignIn(googleUser) {
  let googleToken = googleUser.getAuthResponse().id_token;
  $.ajax({
    url: `${server}/googleLogin`,
    method: 'POST',
    data: {
      googleToken
    } 
  })
  .done(res => {
    localStorage.setItem('access_token', res.access_token)
    showMainPage( )
    console.log(res)
  })
  .fail(err => {
    swal(`error`)
  })
}

function register(){
  const email = $("#email_input_register").val()
  const password = $("#password_input_register").val()
  $.ajax({
    url: `${server}/register`,
    method: 'POST',
    data: {
      email,
      password
    }
  })
  .done(res => {
    swal(`REGISTER SUCCESS`)
    showLoginPage()
  })
  .fail((xhr, textStatus) => {
    swal(`${xhr.responseJSON.message}`)
  }) 
  .always(() => {
    const email = $("#email_input_register").val("")
    const password = $("#password_input_register").val("")
  })
}