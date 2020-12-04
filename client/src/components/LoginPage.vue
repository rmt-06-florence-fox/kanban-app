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
				<br>
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
			</form>
			<small
					id="logpref"
					class="form-text text-black text-center mt-4 mb-3"
					>- or login with your google account -</small
				>
			<div style="text-align: center;"><button v-google-signin-button="clientId" class="google-signin-button"><i class="fa fa-street-view fa-fw"></i>Continue with Google</button></div>
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
				<br>
				<button @click.prevent="register" type="submit" class="btn btn-success">Register</button>
				<button
					@click="haveAccount"
					type="button"
					class="btn btn-warning"
					id="sreg"
				>
					I Have an Account
				</button>
			</form>
			<small
					id="logpref"
					class="form-text text-black text-center mt-4 mb-3"
					>- or login with your google account -</small
				>
			<div style="text-align: center;"><button v-google-signin-button="clientId" class="google-signin-button"><i class="fa fa-street-view fa-fw"></i>Continue with Google</button></div>
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  name: "LoginPage",
  data() {
    return {
      url: 'https://kanban-app-amp.herokuapp.com',
      name: 'Login Page',
      registerStatus: true,
      email_input: '',
      password_input: '',
      newEmail_input: '',
			newPassword_input: '',
			clientId: '961197718284-p6f9vfbgottj78pug3ate437ar11ls6a.apps.googleusercontent.com'
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
		},
		OnGoogleAuthSuccess (idToken) {
			// console.log(idToken)
			axios({
        method: 'POST',
        url: `${this.url}/googleLogin`,
        data: {
					googleToken: idToken
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
				// console.log(response)
      })
      .catch((err) => {
        Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong, Check again your Google Account!',
				})
				console.log(err)
      })
    },
    OnGoogleAuthFail (error) {
			console.log(error)
			Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Are You Sure with your Google Account?',
				})
    }
  }
}
</script>

<style>

</style>