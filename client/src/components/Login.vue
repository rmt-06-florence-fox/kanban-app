<template>
  
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      emailRegister: '',
      passwordRegister: ''
    }
  },
  methods: {
    switchPage(pagename) {
      this.$emit('switchPage', pagename)
    },
    register () {
      const payload = {
        email: this.emailRegister,
        password: this.passwordRegister
      }
      this.$emit('register', payload)
    }
  }
}
</script>