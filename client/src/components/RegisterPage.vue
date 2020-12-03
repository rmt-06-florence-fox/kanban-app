<template>
  <div class="hero-body bg-img img-responsive">
    <div class="container">
      <div class="columns is-centered ">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen ">
          <form class="box">
            <figure class="image container is-64x64">
              <img
                src="https://cdn150.picsart.com/upscale-236338758032212.png?type=webp&to=min&r=640"
              />
            </figure>
            <div class="mb-2">
              <h1>Register</h1>
            </div>
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  placeholder="e.g. icanq"
                  class="input"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user-secret"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. icanq@gmail.com"
                  class="input"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  type="password"
                  placeholder="*******"
                  class="input"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div>
              <a href="#">Already have an account?</a>
            </div>
            <div class="mt-2">
              <button class="button is-success">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
 name: "register page",
 data() {
    return {
      username: '',
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    onSignUp() {
      this.isLoading = true
      if(!this.username) {
        this.isLoading = false
        return Swal.fire(
          'Username Empty', 
          'Username required',
          'warning'
        )
      }
      if (!this.email) {
        this.isLoading = false
        return Swal.fire(
          'Email Empty',
          'Email is required for sign in!',
          'warning'
        )
      }
      if (!this.password) {
        this.isLoading = false
        return Swal.fire(
          'Password Empty',
          'Password is required for sign in!',
          'warning'
        )
      }
      this.$store
        .dispatch('signUp', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/kanban')
        })
        .catch(err => {
          if (err === 'DuplicateEmail')
            Swal.fire(
              'Duplicate Email',
              'This email already registered!',
              'warning'
            )
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 2em;
  text-align: center;
}
</style>