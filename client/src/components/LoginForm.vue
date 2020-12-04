<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="loginEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            v-model="loginEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="loginPassword"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loginEmail: 'user@gmail.com',
            loginPassword: '12345'
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.loginEmail,
                password: this.loginPassword
            }
            this.$api({
                method: 'POST',
                url: '/login',
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
            .then(({data}) => {
                localStorage.setItem("access_token", data.access_token);
                this.$emit('setLogin');
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
};
</script>

<style>
</style>