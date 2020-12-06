<template>
  <div>
   <mdb-navbar color="indigo" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      <img class="logo" src="./assets/hacktiv8.png">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" active>Add Task</mdb-nav-item>
        <mdb-nav-item href="#">Edit Task</mdb-nav-item>
        <mdb-nav-item href="#">Logout</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
    <nav class="navbar navbar-expand-lg navbar-dark">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <button type="button" class="btn">Home</button>
          </li>
          <li class="nav-item">
          </li>
        </ul>
        <button @click.prevent="logout" type="button" class="btn btn-logout" id="btn-logout">Logout</button>
      </div>
    </nav>
  </div>

  
</template>

<script>
import {
  mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem
} from "mdbvue";

export default {
  name: 'NavBar',
  components: {
    mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem
  },
  methods: {
    logout()  {
      this.$emit('logoutButton')
    }
  }
}
</script>