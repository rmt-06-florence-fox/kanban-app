<template>
  <div class="hero-body bg-img img-responsive">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box">
            <figure class="image container is-64x64">
              <img
                src="https://cdn150.picsart.com/upscale-236338758032212.png?type=webp&to=min&r=640"
              />
            </figure>
            <div class="mb-2">
              <h1>Login</h1>
            </div>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. icanq@gmail.com"
                  class="input"
                  v-model="email"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  type="password"
                  placeholder="*******"
                  class="input"
                  v-model="password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div>
              <a href="#">don't have any account?</a>
            </div>
            <div class="mt-2">
              <button class="button is-success" @click.prevent="doLogin">Login</button>
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
  name: "loginPage",
  props: ['changeStatus'],
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    doLogin() {
      this.isLoading = true,
      this.$api({
        method: 'POST',
        url: 'login',
        data: {
          email: this.email,
          password: this.password,
        }
      })
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token);
        Swal.fire
        this.changeStatus(true);
      })
      .catch((err) => {
        if (err === 'WrongInput')
          Swal.fire('Wrong Input', 'Email/Password is wrong', 'warning')
        this.isLoading = false
      })
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-align: center;
}
</style>