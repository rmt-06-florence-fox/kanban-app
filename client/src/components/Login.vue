<template>
  <section class="d-flex align-items-center justify-content-center h-100vh">
    <form @submit.prevent="login">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Kanban App</h5>

          <label for="uname"><b>Username</b></label>
          <input class="form-control" v-model="username" type="username" placeholder="Enter Username" name="uname" required id='email-username'>
          
          <label for="email"><b>Email</b></label>
          <input class="form-control" v-model="email" type="email" placeholder="Enter Email" name="email" required id='email-login'>

          <label for="psw"><b>Password</b></label>
          <input class="form-control" v-model="password" type="password" placeholder="Enter Password" name="psw" required id="email-password">
        
          <div class="text-center">
            <button class="btn btn-primary" type="submit">Login</button>
            <button class="btn btn-success" type="button" @click="register">Register</button>
            <!-- <button v-google-signin-button="clientId" class="btn btn-danger"> Continue with Google</button> -->
          </div>
        </div>
      </div>   
    </form>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      clientId: '766448362179-uav9cn6adn1rk33fj3c1tg9m75beljr7.apps.googleusercontent.com'
    }
  },
  methods: {
    login() {
      console.log(this.email,this.password," ini dari LoginPage")
      this.$emit("login", {
        username: this.username,
        email: this.email,
        password: this.password
      })
    },
    register() {
      console.log("Register");
      this.$emit("register", {
        username: this.username,
        email: this.email,
        password: this.password
      })
    },
    switchPage() {
      this.$emit("switchPage", "register")
    },
    OnGoogleAuthSuccess(idToken) {
      // console.log(idToken)
      this.$emit('googleLogIn', idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail(error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.h-100vh {
  height: 100vh;
}

.card {
  margin: auto;
}

.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>