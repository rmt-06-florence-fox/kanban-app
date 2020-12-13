<template>
  <div class="alert alert-danger error" role="alert">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: "ErrorMessage",
  props: ["message"]
}
</script>
<style>
  
</style>