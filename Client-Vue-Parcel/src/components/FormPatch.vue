<template>
  <div>
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
</template>

<script>
export default {
  name: 'FormPatch',
  props: ['dataList', 'patchCategory', 'pagePatch'],
  methods:{
    updateCategory(id){
      const newData = {category: this.patchCategory }
      this.pagePatch = false
      this.$emit('updateCategory', newData, id, this.pagePatch)
    },
    cancelButton(){
      this.pagePatch = false
      this.$emit('buttonCancelPatch', this.pagePatch)
    }
  }
}
</script>

<style>

</style>