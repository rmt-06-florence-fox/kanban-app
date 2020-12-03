<template>
  <div>
  <!-- <div class="card" v-for="data in dataList" :key="data.id"> -->
    <div class="card-body">
      <h5 class="card-title">{{ dataList.title }}</h5>
      <p class="card-text text-right"><i>Author: {{ dataList.User.name }} </i></p>
    </div>
    <div class="card-footer container-button-task">
      <button type="button" class="btn far fa-edit" @click.prevent="editData(dataList.id)"></button>
      <button type="button" class="btn far fa-trash-alt" @click.prevent="deleteData(dataList.id)"></button>
      <button type="button" class="btn fas fa-arrows-alt" @click.prevent="patchData(dataList.id)" ></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskList',
    props: ['dataList'],
    methods:{
      editData(id){
        console.log(id, '<< id untuk edit');
        this.$emit('idEdit', id)
      },
      deleteData(id){
        console.log(id, '<< id untuk delete');
        this.$emit('idDelete', id)
      },
      patchData(id){
        console.log(id, '<< id untuk patch');
        this.$emit('idPatch', id)
      }
    }
  }
</script>

<style>

</style>