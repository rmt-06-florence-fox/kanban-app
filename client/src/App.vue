<template>
  <div id="app" class="h-100">
    <Error />
    <Success />
    <router-view/>
  </div>
</template>

<script>
import Error from './components/Error.vue'
import Success from './components/SuccessMessage.vue'
export default {
  components: {
    Error,
    Success
  }
}
</script>
<style>
html, body {
  width: 100%;
  height: 100%;
}
</style>
