<template>
  <div class="container">
    <form @submit.prevent="doSignIn">
      <div class="form-group">
        <label for="exampleInputEmail1">Email: </label>
        <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter your email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password: </label>
        <input type="password" class="form-control" v-model="password" placeholder="Enter your password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn-color-navbar btn btn-signin text-color ml-5"><strong>Sign In</strong></button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { email: '', password: '' }
  },
  methods: {
    doSignIn() {
      console.log(this.email, this.password)
      this.$api({
        method: 'POST',
        url: 'signin',
        data: {
          email: this.email,
          password: this.password
        }
      })
      console.log(this.email, this.password)
      .then(response => {
        console.log(response)
        localStorage.setItem('access_token'. response.access_token)
        console.log('berhasil', response)
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.email = ''
        this.password = ''
      })
    }
  }
}
</script>

<style>

</style>