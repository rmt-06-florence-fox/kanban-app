$(document).ready(function(){
    if(localStorage.getItem('access_token')){
      showMainPage()
    } else {
      showLoginPage() 
    }
});