<template>
  <div>
    <div>
      <div class="p-2 rounded task-header"><h5 class="text-center">{{ category.name }} </h5></div>
      <div class="p-1 container-overflow">
        <!-- Loop Task List -->
          <Tasklist class="card cardTaskList" v-for="data in filteredTask(category.name)" :key="data.id"
            :dataList="data"
            @idDelete='deleteData'
            @updateData='updateData'
            @updateCategory='updateCategory'>
          </Tasklist>  
      </div>
      <div class="rounded task-bottom mb-2">
        <button type="button" class="btn btn-add fas fa-plus" @click="showAdd(category.name)"><label class="ml-3">Add</label></button>
      </div>
      <!-- Form Add -->
      <FormAdd class="add-task-page" v-if="pageAdd === category.name"
        :pageAdd='pageAdd' :category='category'
        :createTask='createTask' :pageAddStatus='pageAddStatus'
      ></FormAdd>
    </div>
  </div>
</template>

<script>
  import Tasklist from './Tasklist'
  import FormAdd from './FormAdd'
  export default {
    name: 'TaskBoard',
    data(){
      return {
        pageAdd: '',
      }
    },
    props: ['category', 'dataTasks'],
    components: { Tasklist, FormAdd },
    methods:{
      filteredTask(category){
        return this.dataTasks.filter(e => e.category === category)
      },
      deleteData(id){
        this.$emit('idDelete', id)
      },
      updateData(newData, id){
        this.$emit('updateData', newData, id)
      },
      updateCategory(newData, id){
        this.$emit('updateCategory', newData, id)
      },
      showAdd(category){
        this.pageAdd = category
      },
      pageAddStatus(value){
        this.pageAdd = value
      },
      createTask(newData, value){
        this.pageAdd = value
        this.$emit('createTask', newData)
      }
    }
  }
</script>

<style>
  .cardTaskList{
    margin-left: 10px;
  }
</style>