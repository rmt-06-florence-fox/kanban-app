<template>
  <div>
    <div class="card-body rounded border border-primary">
        <p class="card-text" v-text = "list.title"></p>
        <p>made by: {{this.fullname}}</p>
        <a class="btn btn-outline-primary" data-toggle="collapse" :href= "this.href" role="button" aria-expanded="false" aria-controls="collapseExample">Edit</a>
        <a href="#" class="btn btn-outline-danger">Delete</a>
      </div>
      <div class="collapse card-body rounded border border-primary" :id= "this.cardId">
        <form @submit.prevent= "edit()">
          <div class="form-group">
            <label for="EditTask">Task:</label>
            <input type="text" class="form-control" id="EditTask1" v-model = "title">
          </div>
          <select class="form-control" id="category" v-model = "category">
            <option value = 'Backlog'>Backlog</option>
            <option value = 'Todo'>Todo</option>
            <option value = 'Doing'>Doing</option>
            <option value = 'Done'>Done</option>
          </select>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullname : `${localStorage.getItem('fullname')}`,
      href : `#editform${this.list.id}`,
      cardId : `editform${this.list.id}`,
      title : `${this.list.title}`,
      category : `${this.list.category}`
    }
  },
  props : ['list'],
  methods : {
    edit(){
      let id = this.list.id
      let obj = {
        title : this.title,
        category : this.category
      }
      this.$emit('requestEdit', obj, id)
    }
  }
}
</script>

<style>

</style>