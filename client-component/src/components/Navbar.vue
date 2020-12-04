<template>


  <nav class="nav justify-content-end">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">KANBAN</a>
    </div>
 
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#" @click.prevent="userLogout" ><span class="glyphicon glyphicon-user"  ></span> Logout</a></li>
    </ul>
  </div>
</nav>


</template>

<script>
export default {
  name : "Navbar",
  methods : {
    userLogout(){
      this.$emit('userLogout')
    }
  }
}
</script>

<style>
.group-left{
  display : flex;
  justify-content: center;
}
.group-left h2{
  margin-left : 20px;
  margin-bottom: 0px;
}
</style> 