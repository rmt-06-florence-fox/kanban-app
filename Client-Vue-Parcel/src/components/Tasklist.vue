<template>
  <div>
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
    <FormPatch class="patchData" v-if="pagePatch"
      :dataList='dataList' :patchCategory='patchCategory' :pagePatch='pagePatch'
      @updateCategory='updateCategory' @buttonCancelPatch='buttonCancelPatch'
    ></FormPatch>

    <!-- Form Edit -->
    <FormEdit class="edit-task-page"  v-if="pageEdit && (currentDataEditId === 'none' || currentDataEditId == dataForEdit.id)" 
      :dataForEdit="dataForEdit" :pageEdit="pageEdit" :editTask='editTask'
      @updateData="updateData" @buttonCancelEdit="buttonCancelEdit"
    ></FormEdit>
  </div>
</template>

<script>
  import FormEdit from './FormEdit'
  import FormPatch from './FormPatch';
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
    components: { FormEdit, FormPatch },
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
      updateData(newData, id, statusPage, statusData, statusEdit){
        this.$emit('updateData', newData, id)
        this.pageEdit = statusPage
        this.dataForEdit = statusData
        this.editTask = statusEdit
      },
      buttonCancelEdit(value){
        this.pageEdit = value
      },
      buttonCancelPatch(value){
        this.pagePatch = value
      },
      updateCategory(newData, id, statusPage){
        this.$emit('updateCategory', newData, id)
        this.pagePatch = statusPage
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