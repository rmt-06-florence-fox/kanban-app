<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Kanban!</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          
         <a href="#" @click="logout" style="text-decoration:none;"
            ><GoogleLogin :params="params" :logoutButton=true class="nav-link btn btn-danger p-1 w" style="color:black">Logout</GoogleLogin><span class="sr-only">(current)</span></a>
          
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "Navbar",
  components: {
    GoogleLogin,
  },
  data(){
    return{
      params: {
        client_id:
          "166375431684-efkve6dh1ehpk1ic1m0sd818as9bpf78.apps.googleusercontent.com",
      }
    }
  },
  methods: {
    logout() {
      console.log("di logout");
      // var auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(function () {
      //   console.log("User signed out.");
      // });
      localStorage.clear();
      this.$emit("changePage", "login");
    },
  },
};
</script>
<style>

</style>