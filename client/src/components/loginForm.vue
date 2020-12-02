<template>
  <div class="container row col-12 justify-content-center align-items-center" style="height:93%;">
      <div v-if="showLogin" class="card" style="min-height: 400px;width: 400px;">
                <div class="card-body">
                    <!-- form login -->
                    <div class="row align-items-center justify-content-between">
                        <h6>LOGIN:</h6>
                        <h6>OR</h6><button @click="showLogin = false" class="btn btn-success">REGISTER</button>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="">Email address</label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                    <p>OR SIGN IN with</p>
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
                </div>
            </div>
            <div v-if="!showLogin" class="card" style="min-height: 400px;min-width: 400px;">
                <div class="card-body">
                    <!-- form register -->
                    <div class="row align-items-center justify-content-between">
                        <h6>REGISTER:</h6>
                        <h6>OR</h6><button @click="showLogin = true" class="btn btn-primary">LOGIN</button>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="">Email address</label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-success">Register</button>
                    </form>
                    <p>OR SIGN IN with</p>
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
                </div>
            </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showLogin: true
        }
    },
    methods:{
        //login
        //register
        //googleLogin
    }
}
</script>

<style>

</style>