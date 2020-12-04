<template>
  <section class="container custom-bg">
        <div class="row justify-content-center mt-5">
            <div class="col-4">
                <div class="shadow-lg p-5 mb-5 bg-white rounded">
                    <div class="mb-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--PcIPuAiSJnzvYl0nvbuptU8lGQBa4Z79Q&usqp=CAU" alt="login" class="img-fluid">
                    </div>
                    <h4 class="mb-4"><b>Login</b></h4>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="login-email">Email address</label>
                            <input type="email" class="form-control" v-model="email" placeholder="Your email">
                        </div>
                        <div class="form-group">
                            <label for="login-password">Password</label>
                            <input type="password" class="form-control" v-model="password" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                    <br>
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>         
                    <br>
                    <button id="back-register" class="btn btn-secondary btn-block">don't have account yet?</button>
                </div>
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
            password: ""
        }
    },
    methods: {
        login () {
            localStorage.setItem("access_token", 12345)
            this.$emit("changeCurrentPage", "MainPage")
        }
    }
}
</script>

<style>

</style>