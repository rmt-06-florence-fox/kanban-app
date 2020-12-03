<template>
    <div class=".container vh-100" id="mainP">
      <navbar
        @requestLogout = "logout"
      ></navbar>

      <create
        @requestCreateTask = "createTask"
      ></create>

      <dashboard
        @fetchTask = "fetchTask"
        :list = "list"
        @requestEdit = "requestEdit"
      ></dashboard>

    </div>
</template>

<script>
import navbar from "./02.navbar";
import create from "./02.create";
import dashboard from "./02.dashboard";

export default {
  data() {
    return {
      
    }
  },
  props : ['list'],
  components : {
    navbar,
    create,
    dashboard
  },
  methods : {
    logout(){
      this.$emit('requestLogout')
    },
    createTask(obj){
      this.$emit('requestCreateTask', obj)
    },
    fetchTask(){
      this.$emit('fetchTask')
    },
    requestEdit(obj, id) {
      this.$emit('requestEdit', obj, id)
    }
  }
}
</script>

<style>

</style>