<template>
  <div class="col-3 card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="d-flex flex-column justify-content-around">
    <div class="card-header"><strong>{{ category.name.toUpperCase() }}</strong></div>
      <TaskCard v-for="data in filteredTask" :key="data.id" @destroyTask="removeTask" :data='data' @editTask="goEdit"></TaskCard>
    </div>
</template>

<script>
import TaskCard from './TaskCard'
export default {
  data() {
    return {
    }
  },
  components: {
    TaskCard
  },
  props: ['dataTask', 'category'],
  methods: {
    removeTask(id) {
      this.$emit('destroyTask', id)
    },
    goEdit() {
      this.$emit('editTask')
    }
  },
  computed: {
    filteredTask() {
      // console.log(this.category.name)
      var filterDataTask = this.dataTask.filter(e => e.category == this.category.name)
      console.log(filterDataTask)
      return filterDataTask
    }
  }
}
</script>

<style>

</style>