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
    <!-- Pindah Category -->
    <div class="patchData" v-if="pagePatch">
      <form @submit.prevent="updateCategory(dataList.id)">
        <select name="" id="" v-model="patchCategory">
          <option selected disabled>--- Move Task Category---</option>
          <option v-if="dataList.category !== 'Backlog'" value="Backlog">Move To Backlog </option>
          <option v-if="dataList.category !== 'Todo'" value="Todo"> Move To Todo</option>
          <option v-if="dataList.category !== 'Doing'" value="Doing"> Move To Doing</option>
          <option v-if="dataList.category !== 'Done'" value="Done"> Move To Done</option>
        </select>
        <button type="submit" class="btn btn-add-task fas fa-check"><label class="ml-2">Move</label></button>
        <button type="button" class="btn btn-cancel fas fa-times" @click="cancelButton()"><label class="ml-2">Cancel</label></button>
      </form>
    </div>
    <!-- Form Edit -->
    <div class="edit-task-page" v-if="dataEdit.id === dataList.id && pageEdit">
      <form action="" @submit.prevent='updateData(dataEdit.id)'>
        <textarea class ="edit-task" name="edit-backlog" v-model="editTask"></textarea>
        <button type="submit" class="btn btn-add-task fas fa-check"><label class="ml-2">Edit Task</label></button>
        <button type="button" class="btn btn-cancel fas fa-times" @click="cancelButton()"><label class="ml-2">Cancel</label></button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskList',
    data(){
      return{
        editTask: '',
        pageEdit: false,
        pagePatch: false,
        patchCategory: ''
      }
    },
    props: ['dataList', 'dataEdit'],
    methods:{
      editData(id){
        console.log(id, '<< id untuk edit');
        this.$emit('idEdit', id)
        this.editTask = this.dataEdit.title
        this.pageEdit = true
      },
      deleteData(id){
        console.log(id, '<< id untuk delete');
        this.$emit('idDelete', id)
      },
      patchData(id){
        console.log(id, '<< id untuk patch');
        this.$emit('idPatch', id)
        this.pagePatch = true
      },
      updateData(id){
        const newData = {
          title: this.editTask,
          category: this.dataEdit.category
        }
        console.log(newData, '<<< data di update');
        this.$emit('updateData', newData, id)
        this.dataEdit = {}
        this.editTask = ''
        this.pageEdit = false
      },
      cancelButton(){
        this.pageEdit = false
      },
      updateCategory(id){
        console.log(this.patchCategory, id, '<<< data untuk patch');
        const newData = {category: this.patchCategory }
        this.$emit('updateCategory', newData, id)
        this.pagePatch = false
      }
    }
  }
</script>

<style>
  .patchData{
    display: flex;
    justify-content: center;
    font-size: 15px;
  }
</style>