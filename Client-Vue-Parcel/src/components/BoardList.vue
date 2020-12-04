<template>
  <section id="main-page">
      <div class="container mt-3">
        <div class="row">
          <TaskBoard class="col-md-3 col-sm-6 mt-3" v-for="category in categories" 
            :key="category.id" :category="category" :dataTasks="dataTasks"
            @idDelete='deleteData' @createTask='createTask' @updateData='updateData'
            @updateCategory='updateCategory'>
          </TaskBoard>
      </div>
    </div>
  </section>
</template>

<script>
  import TaskBoard from './Taskboard'
  export default {
  name: 'BoardList',
  components: { TaskBoard },
  props: ['categories', 'dataTasks'],
  methods:{
    deleteData(id){
      this.$emit('idDelete', id)
    },
    updateData(newData, id){
      this.$emit('updateData', newData, id)
    },
    updateCategory(newData, id){
      this.$emit('updateCategory', newData, id)
    },
    createTask(newData){
      this.$emit('createTask', newData)
    }
  }
}
</script>

<style>

</style>