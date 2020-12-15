<template>
    <section>
			<div class="container reg-log" id="login-page">
				<div class="register image">
					<img src="../image/img-log.svg" class="img-reg">
				</div>
				<div class="register form">
					<form id="form-register" @submit.prevent="login">
						<h6 id="text-register">kanban sign in <i class="fa fa-pencil" aria-hidden="true"></i></h6>
						<div class="form-group">
							<small id="form-reg-email" class="form-text text-muted">Email Address</small>
							<input type="email" class="form-control form-control-sm" id="form-reg-email" v-model="email">
						</div>
						<div class="form-group">
							<small id="form-reg-password" class="form-text text-muted">Password</small>
							<input type="password" class="form-control form-control-sm" id="form-reg-password" v-model="password">
						</div>
						<p>
							<button type="submit" class="btn btn-primary" id="btn-signIn"><i class="fa fa-sign-in"
								aria-hidden="true"></i> sign in</button>
							<small>or</small>
							<!-- <button type="submit" class="btn btn-primary" id="btn-signInG">gogle signup</button> -->
						</p>
								
						<div align="center">
							<small class="form-text text-muted">don't have an account ?</small>
							<span class="btn btn-link" @click="toSignUp" style="margin-top: -15px"><small>sign up</small></span>
						</div>
					</form>
					<button v-google-signin-button="clientId" class="google-signin-button">G</button>
				</div>
			</div>
    </section>
</template>

<script>
export default {
	name: "LoginPage",
	data() {
		return {
			email: "",
			password: "",
			clientId: '491928560190-5j444ikfnl28j4ksdan45bfvdaa5hvbd.apps.googleusercontent.com'  
		}
	},
	methods: {
		login() {
			const payload = {
				email: this.email,
				password: this.password
			}
			this.$emit("login", payload)
			this.email = "";
			this.password = "";
		},
		toSignUp() {
			this.$emit("changePage", "register-page")
		},
		OnGoogleAuthSuccess (idToken) {
			this.$emit("onSuccess", idToken)
		},
		OnGoogleAuthFail (error) {
			console.log(error)
		}
	},
}
</script>

<style>
	.google-signin-button {
		width: -5px;
		background-color: #1900ff;
	}
</style>