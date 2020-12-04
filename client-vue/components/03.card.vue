<template>
  <div class="card" style="width: 20rem;">
    <h5 class="card-header text-center bg-primary text-white" v-text = "name"></h5>
    <div class="mh-100 overflow-auto p-1" style="height: 70vh;">
      <tasks 
      v-for = "(task, idx) in filteredCategory" :key= "idx" :list= "task"
      @requestEdit = "requestEdit"
      @requestDelete = 'requestDelete'
      ></tasks>
    </div>
  </div>
</template>

<script>
import tasks from './04.tasks'
export default {
  data(){
    return {

    }
  },
  props : ['name', 'list'],
  components : {
    tasks
  },
  methods : {
    fetchTask() {
      this.$emit('fetchTask')
    },
    requestEdit(obj, id) {
      this.$emit('requestEdit', obj, id)
    },
    requestDelete(id){
      this.$emit('requestDelete',id)
    }
  },
  created() {
    this.fetchTask()
  },
  computed : {
    filteredCategory : function () {
      return this.list.filter(e => {return e.category == this.name})
    }
  }
}
</script>

<style>

</style>