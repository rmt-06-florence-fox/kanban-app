<template>
    <nav>
      <div class="nav-left">
        <h4>KANBAN</h4>
      </div>
      <div class="nav-right">
        <h5>hi {{name}}</h5>
        <button id="button_logout" @click="logout()">LOGOUT</button>
      </div>
    </nav>
</template>

<script>
export default {
    name: "navKanban",
    data(){
      return{
        name: localStorage.name
      }
    },
    methods: {
        logout(){
          localStorage.clear()
          this.$emit('changeLoginPage')
          let auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            $("#todo-list").empty()
            console.log('User signed out.');
          });   
        },
    }
}
</script>

<style>

</style>