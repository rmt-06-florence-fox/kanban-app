<template>
  <section id="navbar" style="display: block">
		<div class="custom-navbar">
			<div>
				<h1 class="text"><img class="foxImg" src="https://ecs7.tokopedia.net/img/attachment/2020/4/21/26999847/26999847_15e7941c-346d-4e0b-a912-28a3dc025b5c.png" alt="Hacktiv8 Fox">__</h1>
			</div>
			<div class="d-flex title-nav-bar">
				<h2><i class="fa fa-rocket fa-fw"></i>Kanban Kita Semua</h2>
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
			Swal.fire({
				title: 'Are you sure?',
				text: "You can back any time to see your task",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: "Yes, i'm leaving~"
			}).then((result) => {
				if (result.isConfirmed) {
					localStorage.removeItem('access_token')
					this.$emit('hasBeenLogout', 'loginPage')
					Swal.fire({
						icon: 'success',
						title: 'Good Bye',
						text: 'Thank you for your visit, have a nice day',
					})
				}
			})

      
    }
  }

}

</script>

<style>

</style>