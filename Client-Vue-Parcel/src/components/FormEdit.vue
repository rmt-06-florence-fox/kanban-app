<template>
  <div>
    <form action="" @submit.prevent='updateData(dataForEdit.id)'>
      <textarea class ="edit-task" name="edit-backlog" v-model="editTask"></textarea>
      <button type="submit" class="btn btn-add-task fas fa-check"><label class="ml-2">Edit Task</label></button>
      <button type="button" class="btn btn-cancel fas fa-times" @click="cancelButton()"><label class="ml-2">Cancel</label></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormEdit',
  props: ['dataForEdit', 'pageEdit', 'editTask'],
  data(){
    return{
      editTask: ''
    }
  },
  methods:{
    updateData(id){
      const newData = {
        title: this.editTask,
        category: this.dataForEdit.category
      }
      this.pageEdit = !this.pageEdit
      this.dataForEdit = {}
      this.editTask = ''
      this.$emit('updateData', newData, id, this.pageEdit, this.dataForEdit, this.editTask)
    },
    cancelButton(){
      this.pageEdit = false
      this.$emit('buttonCancelEdit', this.pageEdit)
    }
  }
}
</script>

<style>

</style>