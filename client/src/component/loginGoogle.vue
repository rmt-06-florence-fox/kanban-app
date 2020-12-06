<template>
    <div>
    <button class="google-signin-button">Login with Google</button>
    </div>
</template>

<script>

export default {
    name: 'googleLogin',
    data () {
       return clientId = '319018481967-djr87oommhegmh2ksuqv4alnc80am47d.apps.googleusercontent.com'
    },
    methods: {
        OnGoogleAuthSuccess (idToken) {
            console.log(idToken)
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
  background-color: #006c9e;
  height: 28px;
  border-radius: 8px;
  padding: 5px 20px 30px 20px;
}
</style>