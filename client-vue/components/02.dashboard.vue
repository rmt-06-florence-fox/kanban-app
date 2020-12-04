<template>
  <!-- Task -->
      <div class="d-flex justify-content-around d-flex align-items-center pt-4">
        <card 
        v-for = "(category, idx) in categories" :key= "idx" :name= "category"
        @fetchTask = "fetchTask"
        :list = "list"
        @requestEdit = "requestEdit"
        @requestDelete = 'requestDelete'
        ></card>
      </div>
</template>

<script>
import card from "./03.card";
export default {
  data() {
    return {
      categories : [
        "Backlog",
        "Todo",
        "Doing",
        "Done"
      ]
    }
  },
  props : ['list'],
  components : {
    card
  },
  methods : {
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