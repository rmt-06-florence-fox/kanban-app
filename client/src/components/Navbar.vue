<template>
  <section id="navbar" style="display: block">
		<div class="custom-navbar">
			<div>
				<a @click.prevent="test" href="#" class="home-btn list-group-item"
					><i class="fa fa-home fa-fw"></i> Home</a
				>
			</div>
			<div class="d-flex title-nav-bar">
				<h2><i class="fa fa-briefcase fa-fw"></i>Kanban Kita Semua</h2>
			</div>
			<div>
				<a
          @click.prevent="logout"
					href="#"
					class="log-out-btn list-group-item"
					><i class="fa fa-bomb fa-fw"></i> Logout</a
				>
			</div>
		</div>
	</section>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      this.$emit('hasBeenLogout', 'loginPage')
      Swal.fire({
				icon: 'success',
				title: 'Good Bye',
				text: 'Thank you for your visit, have a nice day',
			})
    },
    test() {
      this.$emit('test')
    }
  }

}

</script>

<style>

</style>