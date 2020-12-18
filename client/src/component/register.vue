<template>
    <div>
        <div class="col-4 p-0 text-center mx-auto mt-5">
          <h1 class="h3 mb-3 font-weight-normal">Please register here</h1>
            <form @submit.prevent="register">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="emailRegister" id="emailRegis"
                        placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="passwordRegister" id="passwordRegis"
                        placeholder="Enter password">
                </div>
                <button type="submit" class="btn btn-outline-success mx -2">Register</button>
                <a class="btn btn-outline-warning" @click="cancelRegister">Cancel</a>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    name: "Register",
    data() {
        return {
            baseUrl: "https://kanban-adnkamil.herokuapp.com",
            emailRegister: "",
            passwordRegister: "",
        }
    },
    methods: {
        register() {
        let email = this.emailRegister;
        let password = this.passwordRegister;

        axios({
            method: "post",
            url: this.baseUrl + "/register",
            data: { email, password }
        })
            .then(respon => {
                // console.log(respon.data, '<<<<<<< data register');
                localStorage.setItem('accesstoken', respon.data.token)
                this.$emit('successLogin')
            })
            .catch(err => {
                swal('Uppsss!!', 'Pleas input email & password', {
                    buttons: false,
                    timer: 2000
                })
                console.log(err, "<< err");
            });
        },
        cancelRegister() {
            this.$emit("toLogin")
        }
    }
}
</script>