<template>
      <div  class="main-page fixed-top">
          <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand text-muted "> <img src="img/rsz_m-removebg-preview.png" id="logo" alt=""></a>
              <button @click = "logout" class="btn my-2 my-sm-0 text-white" style="background-color: #0eaef8;"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
          </nav>
      </div>

</template>

<script>
export default {
    name: 'navBar',
    methods :{
        logout(){
            this.$emit('logout')
        }
    }

}
</script>

<style>

</style>