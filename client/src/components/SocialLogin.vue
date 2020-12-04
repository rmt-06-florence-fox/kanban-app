<template>
  <div class="container-fluid text-center">
    <p class="mt-2 mb-3 text-muted">&mdash; Or Login with &mdash;</p>
    <div class="d-flex justify-content-center">
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialLogin",
};
</script>

<style>

</style>
