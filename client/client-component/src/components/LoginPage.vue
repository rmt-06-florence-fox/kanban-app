<template>
    <section class="container" id="login-page" style="display: inline ;">
        <div class="row justify-content-center mt-5">
            <div class="col-4 mt-1">
                <div class="shadow-lg p-5 mb-5 bg-white rounded">
                    <div class="nav-item mb-2">
                        <ul class="nav-link">
                            <li class="">
                                <a href="#" style="float: right">Register</a>
                            </li>
                        </ul>
                    </div>
                    <h5 class="mb-4 text-center"><strong>KANBAN</strong></h5>
                    <form>
                    <div class="form-group">
                        <input type="email" class="form-control" id="login-email" placeholder="Your email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="login-password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                    <p class="text-muted text-center"> dont have account ?</p>
                    <div class="g-signin2 googleLogin d-inline p-2" data-onsuccess="onSignIn"></div>
                       
                    

                    </form>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LoginPage",
    data: {
        email: '',
        password: ''
    },
    methods: {
        login(){
            // localStorage.setItem('access_token', acce)
        }
    }
}
</script>

<style>

</style>