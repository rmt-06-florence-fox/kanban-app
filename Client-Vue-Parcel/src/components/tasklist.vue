<template>
  <div>
  <!-- <div class="card" v-for="data in dataList" :key="data.id"> -->
    <div class="card-body">
      <h5 class="card-title">{{ dataList.title }}</h5>
      <p class="card-text text-right"><i>Author: {{ dataList.User.name }} </i></p>
    </div>
    <div class="card-footer container-button-task" v-if="isAuthor(dataList.User.email)">
      <button type="button" class="btn far fa-edit" @click.prevent="editData(dataList)"></button>
      <button type="button" class="btn far fa-trash-alt" @click.prevent="deleteData(dataList.id)"></button>
      <button type="button" class="btn fas fa-arrows-alt" @click.prevent="patchData()" ></button>
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
    <div class="edit-task-page" v-if="pageEdit && (currentDataEditId === 'none' || currentDataEditId == dataForEdit.id)">
      <form action="" @submit.prevent='updateData(dataList.id)'>
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
        patchCategory: '',
        dataForEdit: {},
        currentDataEditId: 'none',
        dataUser:{
          id: +localStorage.getItem('id'),
          email: localStorage.getItem('email')
        }
      }
    },
    props: ['dataList'],
    methods:{
      isAuthor(email){
        if(email === this.dataUser.email) return true
        else return false
      },
      editToggleStatus(value){
        this.currentDataEditId = value
      },
      editData(data){
        this.editTask = data.title
        this.dataForEdit = data
        this.pageEdit = !this.pageEdit
        this.editToggleStatus('none')
        this.editToggleStatus(data.id)
      },
      deleteData(id){
        this.$emit('idDelete', id)
      },
      patchData(){
        this.pagePatch = !this.pagePatch
      },
      updateData(id){
        const newData = {
          title: this.editTask,
          category: this.dataForEdit.category
        }
        this.$emit('updateData', newData, id)
        this.dataForEdit = {}
        this.editTask = ''
        this.pageEdit = !this.pageEdit
      },
      cancelButton(){
        this.pageEdit = false
        this.pagePatch = false
      },
      updateCategory(id){
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
    /* font-size: 15px; */
  }
</style>