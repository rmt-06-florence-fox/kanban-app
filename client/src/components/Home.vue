<template>
  <div>
    <ErrorNotification v-if="errorMessage.length > 0">{{ errorMessage }}</ErrorNotification>
    <h1>Ini Home</h1>
    <AddTask></AddTask>
  </div>
</template>

<script>
import ErrorNotification from "./ErrorMessage";
import AddTask from "./AddTask";

export default {
  data() {
    return {
      errorMessage: '',
    };
  },
  components: {
    ErrorNotification,
    AddTask
  },
};
</script>

<style>
</style>