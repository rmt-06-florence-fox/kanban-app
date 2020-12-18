<template>
  <div>
    <nav class="navbar navbar-dark h1" id="navbar-custom">
      <a class="navbar-brand kanban mr-auto " href="#" @click="refresh">Kanban</a>
      <a class="btn btn-danger" @click="logout">Logout</a>
    </nav>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: "Navbar",
  methods: {
    logout() {
      swal({
        title: 'Waitt!!',
        text: 'do you want to leave me??',
        icon: 'warning',
        buttons: ['No', 'Yes'],
        dangerMode: true
      })
      .then(confirmLogout => {
        if(confirmLogout) {
          localStorage.clear();
          this.$emit('successLogout')
        }
      })
    },
    refresh() {
      this.$emit('refresh')
    }
  }
};
</script>

<style lang="stylus">
#navbar-custom {
  background: #292827;
}
</style>