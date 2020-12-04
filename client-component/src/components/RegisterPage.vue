<template>
    <div class="container">
    <div id="register-page" class="bg-light col mt-5 rounded">
        <form id="register-form" class="input-margin" @submit.prevent="register">
            <h1>Register</h1>
            <div class="row">
                <div class="col">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" name="first_name" id="create-first_name" placeholder="First Name" v-model="registerAkun.first_name">
                </div>
                <div class="col">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" name="last_name" id="create-last_name" placeholder="Last Name" v-model="registerAkun.last_name">
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="create-email" class="form-control" placeholder="email" v-model="registerAkun.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="create-password" class="form-control" placeholder="password" v-model="registerAkun.password">
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "RegisterPage",
    data () {
        return {
            registerAkun: {
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        register(){
            axios({
                url: 'https://robby-kanban.herokuapp.com/register',
                method: 'post',
                data: this.registerAkun
                
            })
            .then(response=>{
                this.$emit("changeCurrentPage", "login")
            })
            .catch(e=>{
                console.log(e)
            })
            .finally(_ =>{
                this.registerAkun.first_name = '',
                this.registerAkun.last_name = '',
                this.registerAkun.email = '',
                this.registerAkun.password = ''
            })
        },
    }
}
</script>

<style>

</style>