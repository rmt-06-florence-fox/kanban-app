<template>
  <div id="app" class="h-100">
    <Error />
    <router-view/>
  </div>
</template>

<script>
import Error from './components/Error.vue'
export default {
  components: {
    Error
  }
}
</script>
<style>
html, body {
  width: 100%;
  height: 100%;
}
</style>
