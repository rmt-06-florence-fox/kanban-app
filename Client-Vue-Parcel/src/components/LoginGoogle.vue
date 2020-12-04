<template>
  <div class="container-oauth">
    <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
  </div>
</template>

<script>
  import GoogleSignInButton from 'vue-google-signin-button-directive'
  export default {
    data: () => ({
      clientId: '319018481967-djr87oommhegmh2ksuqv4alnc80am47d.apps.googleusercontent.com'
    }),
    methods: {
      OnGoogleAuthSuccess (idToken) {
        console.log(idToken)
        // Receive the idToken and make your magic with the backend
        this.$emit('googleToken', idToken)
      },
      OnGoogleAuthFail (error) {
        console.log(error)
      }
    }
  }
</script>

<style>
.google-signin-button {
  color: white;
  background-color: #cc8a9d;
  height: 30px;
  font-size: 16px;
  border-radius: 10px;
  padding: 5px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>