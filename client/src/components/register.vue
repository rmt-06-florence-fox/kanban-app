<template>
  <section class="register-container" id="register_form">
    <div class="register-form">
      <h1 id="judul-register-form">REGISTER PAGE</h1>
      <form @submit.prevent="registerEmit">
        <div class="form-group">
          <label>Organization :</label><br>
          <select v-model="organizationSelected" id="organization_input_register" required >
            <option select disabled>select</option>
            <option v-for="element in organizations" :key="element.id" >{{element.name}}</option>
          </select>
        </div>
        <div>
          <span>not in the list?</span>
          <addOrganization @lemparNewOrganization="lemparNewOrganization"></addOrganization>
          </div>
        <div class="form-group">
          <label>Email address :</label><br>
          <input v-model="email" id="email-register" type="email" name="email" required><br>
        </div>
        <div class="form-group">

          <label>Password :</label><br>
          <input v-model="password" id="password_input_register" type="password" name="password" required><br>
        </div>

        <button class="register-btn btn-primary" id="button_register" type="submit">Register</button>
      </form>
      <span>Already have account? <a id="button_signin" href="">Sign In</a></span>
    </div>
  </section>
</template>

<script>

import addOrganization from './addOrganization'
export default {
    name: "registerPage",
    props: ['organizations'],
    components: {
      addOrganization
    },
    data(){
        return {
            email: '',
            password: '',
            organizationSelected: ''
        }
    },
    methods: {
      lemparNewOrganization(payload){
        this.$emit('lemparNewOrganization', payload)
      },
      registerEmit(){
          let payload = {
              email: this.email,
              password: this.password,
              organization: (this.organizationSelected == '') ? 'null': this.organizationSelected
          }
          this.$emit('registerEmit', payload)
      }
    }

}
</script>

<style>

</style>