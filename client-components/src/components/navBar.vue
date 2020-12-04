<template>
      <div  class="main-page fixed-top">
          <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand text-muted "> <img src="img/rsz_m-removebg-preview.png" id="logo" alt=""></a>
              <button @click = "logout" class="btn my-2 my-sm-0 text-white" style="background-color: #0eaef8;"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout 
               <!-- <GoogleLogin :logoutButton=true></GoogleLogin> -->
              </button>
          </nav>
      </div>

</template>

<script>
    import GoogleLogin from 'vue-google-login';

    export default {
        name: 'navBar',
        methods :{
            logout(){
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                console.log('User signed out.');
                })
                this.$emit('logout')
  
            }
        },
        data () {
            return {
                params: {
                    client_id: "1032301583959-22amjtnotb8e2qbkd1d0vtsn5s9v1hbm.apps.googleusercontent.com"
                },
                renderParams: {
                    width: 140,
                    height: 50,
                    longtitle: false
                }
            }
        },
        components:{
            GoogleLogin
        }

}
</script>

<style>

</style>