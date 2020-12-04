<template>
  <div>
    <mdb-navbar color="indigo">
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
      </mdb-navbar-brand>
    </mdb-navbar>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <img src="./assets/hacktiv8.png">
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
        <button v-if="pageName === 'Home Page'" @click.prevent="logout" type="button" class="btn btn-logout" id="btn-logout">Logout</button>
      </div>
    </nav>
  </div>

  
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout()  {
      this.$emit('logoutButton')
    }
  }
}
</script>