<template>
  <div class="loginBox" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">
    <div class="row justify-content-center my-auto">
        <div class="row justify-content-center px-3 mb-3">
            <img id="logos" src="https://www.freepnglogos.com/uploads/logo-mobile-legend-png/logo-mobile-legend-tcash-apapun-operatornya-semua-bisa-paketcash-18.png">
        </div>
        <div class="col-md-8 col-10 my-5">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label class="form-control-label text-muted">Email</label>
                    <input v-model="email" type="text" id="email" name="email" placeholder="Enter your email" class="form-control"> </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Password</label>
                    <input v-model="password" type="password" id="psw" name="psw" placeholder="Enter your password" class="form-control"> </div>
                <div class="row justify-content-center my-3 px-3">
                    <button class="btn-block btn-color">Join us!</button>
                </div>
                    <p class="buah row justify-content-center" style="font-size: 12px" @click="changePage">cancel</p>
            </form>
        </div>
    </div>
  </div>
</template>

<script>

import axios from "axios"

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    }, 
    methods: {
        changePage() {
            this.$emit('changePage', 'login')
        },
        register() {
            axios({
                method: 'post',
                    url: 'https://kanbaban.herokuapp.com/register',
                    data: {
                        email: this.email,
                        password: this.password
                    }
            })
            .then(response => {
                localStorage.setItem('access_token', this.password)
                this.$emit('changePage', 'home')
            })
        },
    }

}
</script>

<style>

#logos {
  position: absolute;
  top: -120px;
  left: -72px;
  width: 500px;
  /* margin-bottom: 50px; */
}

  .loginBox {
    min-width: 250px !important;
    margin-top: 10px;
}

@media screen and (max-width: 600px;

) {
    body {
        background-size: cover;
        : fixed
    }
}

.buah:hover {
    cursor: pointer;
    color: red
}

#particles-js {
    height: 100%
}

.loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    min-height: 200px;
    background: #ffffff;
    border-radius: 10px;
    padding-top: 80px;
    box-sizing: border-box
}

.user {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px
}

h3 {
    margin: 0;
    padding: 0 0 20px;
    color: #59238F;
    text-align: center
}

.loginBox input {
    width: 100%;
    margin-bottom: 20px
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
    border: none;
    border-bottom: 2px solid #262626;
    outline: none;
    height: 40px;
    color: #fff;
    background: transparent;
    font-size: 16px;
    padding-left: 20px;
    box-sizing: border-box
}



input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #007991 !important;
    outline-width: 0;
    font-weight: 400
}

.inputBox {
    position: relative
}

.inputBox span {
    position: absolute;
    top: 10px;
    color: #262626
}

.loginBox input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    font-size: 16px;
    background: #59238F;
    color: #fff;
    border-radius: 20px;
    cursor: pointer
}

.loginBox a {
    color: #262626;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: block
}

a:hover {
    color: #00ffff
}

p {
    color: #0000ff
}
</style>