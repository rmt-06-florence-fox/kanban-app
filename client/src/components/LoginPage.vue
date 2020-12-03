<template>
	<!-- Login Form -->
  <section id="login-form" v-if="registerStatus">
		<br /><br />
		<h2 class="text-black" style="text-align: center">
			Login with Your Account
		</h2>
		<div class="container border-success bg-primary text-white rounded">
			<form
				id="formlogin"
				class="container card-body mt-4 mr-4 mb-4"
			>
				<div class="form-group">
					<label for="emaillog">Email address</label>
					<input
						type="email"
						class="form-control"
						id="emaillog"
						placeholder="Your Email Here"
						v-model="email_input"
					/>
					<small
						id="logpref"
						class="form-text text-black text-left mt-1 mb-3"
						>*We never share your email</small
					>
				</div>
				<div class="form-group">
					<label for="passwordlog">Password</label>
					<input
						type="password"
						class="form-control"
						id="passwordlog"
						placeholder="Your Password Here"
						v-model="password_input"
					/>
				</div>
				<div id="error-log"></div>
				<button @click.prevent="login" type="submit" class="shadow btn btn-success">
					Login
				</button>
				<button
					@click="haveAccount"
					type="button"
					class="shadow btn btn-danger"
					id="slog"
				>
					I Don't Have an Account
				</button>
				<small
					id="logpref"
					class="form-text text-black text-left mt-4 mb-3"
					>- or login with your google account -</small
				>
				<div class="g-signin2 mt-3" data-onsuccess="onSignIn"></div>
			</form>
		</div>
	</section>

  <!-- Register Form -->
  <section id="register-form" v-else>
		<br /><br />
		<h2 style="text-align: center">Register Your New Account</h2>
		<div class="container border-success bg-primary text-white rounded">
			<form
				id="formregister"
				class="container card-body mt-4 mr-4 mb-4"
			>
				<div class="form-group">
					<label for="emailreg">Email address</label>
					<input
						type="email"
						class="form-control"
						id="emailreg"
						placeholder="Your new email"
						v-model="newEmail_input"
					/>
					<small
						id="logpref"
						class="form-text text-black text-left mt-1 mb-3"
						>*We never share your email</small
					>
				</div>
				<div class="form-group">
					<label for="passwordreg">Password</label>
					<input
						type="password"
						class="form-control"
						id="passwordreg"
						placeholder="Your password, sshh, it must be your own secret"
						v-model="newPassword_input"
					/>
				</div>
				<button @click.prevent="register" type="submit" class="btn btn-success">Register</button>
				<button
					@click="haveAccount"
					type="button"
					class="btn btn-warning"
					id="sreg"
				>
					I Have an Account
				</button>
				<div id="errorlog"></div>
				<small
					id="logpref"
					class="form-text text-black text-left mt-4 mb-3"
					>- or login with your google account -</small
				>
				<div
					class="g-signin2 mx-auto justify-content-center rounded"
					data-onsuccess="onSignIn"
				></div>
			</form>
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: "LoginPage",
  data() {
    return {
      url: 'http://localhost:3000',
      name: 'Login Page',
      registerStatus: true,
      email_input: '',
      password_input: '',
      newEmail_input: '',
      newPassword_input: ''
    }
  },
  methods: {
    haveAccount() {
      this.registerStatus = !this.registerStatus
    },
    login() {
      axios({
        method: 'POST',
        url: `${this.url}/login`,
        data: {
          email: this.email_input,
          password: this.password_input
        }
      })
      .then((response) => {
				localStorage.setItem('access_token', response.data.access_token)
				Swal.fire({
					icon: 'success',
					title: `Hi ${this.email_input}`,
					text: 'Welcome to Kanban Apps ',
				})
        this.$emit('changeCurentPage', 'mainPage')
      })
      .catch((err) => {
        Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				})
				console.log(err)
      })
		},
		register() {
			axios({
				method: 'POST',
				url: `${this.url}/register`,
				data: {
					email: this.newEmail_input,
					password: this.newPassword_input
				}
			})
			.then((response) => {
				this.registerStatus = !this.registerStatus
				Swal.fire({
					icon: 'success',
					title: 'Nice !',
					text: 'Your new email has been registered',
				})
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				})
				console.log(err)
			})
		}
  }
}
</script>

<style>

</style>