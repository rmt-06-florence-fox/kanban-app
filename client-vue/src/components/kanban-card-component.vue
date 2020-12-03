<template>
  <div>
    <div class="card">
      <div class="card-body mt-3 shadow-sm">
        <h5 class="card-title">{{ filterTask.title }}</h5>
        <small>author</small>
        <p class="card-text">{{filterTask.User.email.split('@')[0]}}</p>
        <div class="card-footer">
          <button @click.prevent="toggleEdit(filterTask)" type="button" class="btn btn-outline-primary far fa-edit"></button>
          <button @click.prevent="deleteTask(filterTask.id)" type="button" class="btn btn-outline-primary far fa-trash-alt"></button>
        </div>
      </div>
    </div>
    <div v-if="editToggle">
      <form @submit.prevent="edit" action="">
        <textarea v-model="editTitle" name="" id="" cols="22" rows="2" required></textarea>
        <button  type="submit" class="btn btn-outline-primary fas fa-check"></button>
        <!-- <button @click.prevent="toggleEdit(filterTask)" type="button" class="btn btn-outline-primary fas fa-times"></button> -->
      </form>
    </div>
  </div>
  
</template>

<script>
export default {
  name :  "kanban-card-component",
  props : ["filterTask"],
  methods : {
    deleteTask(id){
      this.$emit('deleteId', id)
    },
    toggleEdit(data){
      this.editToggle = !this.editToggle
      this.editTitle = data.title
      this.editData = data
    }, 
    edit(){
      const objEdit = {
        title : this.editTitle,
        category : this.editData.category
      }
      this.$emit('editTask', objEdit, this.editData.id)
      this.editToggle = false
    }
  },
  data(){
    return {
      editToggle : false,
      editTitle : '',
      editData : {}
    }
  }
}
</script>

<style>

</style>