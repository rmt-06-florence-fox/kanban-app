<template>
    <div class=".container vh-100" id="mainP">
      <navbar
        @requestLogout = "logout"
      ></navbar>

      <dashboard
        @requestCreate = "requestCreate"
        @fetchTask = "fetchTask"
        :list = "list"
        @requestEdit = "requestEdit"
        @requestDelete = 'requestDelete'
      ></dashboard>

    </div>
</template>

<script>
import navbar from "./02.navbar";
import dashboard from "./02.dashboard";

export default {
  data() {
    return {
      
    }
  },
  props : ['list'],
  components : {
    navbar,
    dashboard
  },
  methods : {
    requestCreate(nameTask){
      this.$emit('requestCreate', nameTask)
    },
    logout(){
      this.$emit('requestLogout')
    },
    fetchTask(){
      this.$emit('fetchTask')
    },
    requestEdit(obj, id) {
      this.$emit('requestEdit', obj, id)
    },
    requestDelete(id) {
      this.$emit('requestDelete', id)
    }
  }
}
</script>

<style>

</style>