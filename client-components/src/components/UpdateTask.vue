<template>
  <div>
  <b-button v-b-modal = "'task'">Launch demo modal</b-button>
  <b-modal id="task" title="BootstrapVue">
    <p class="my-4">Hello from modal! {{task}}</p>
  </b-modal>
</div>
</template>

<script>
export default {
    props: ['task']
}
</script>

<style>

</style>