<template>
  <div class="pb-2">
    <div class="card-body rounded border border-info">
        <h6 class="card-text" v-text = "list.title"></h6>
        <ul style="list-style-type: none">
        <li><small>Task by: {{this.fullname}}<small></li>
        <li><small>Created At: {{this.date}}<small></li>
        </ul>
        <a class="btn btn-outline-primary" @click.prevent = "edit">Edit</a>
        <a href="" class="btn btn-outline-danger" @click.prevent = "destroy">Delete</a>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullname : `${this.list.User.firstName} ${this.list.User.lastName}`,
      href : `#editform${this.list.id}`,
      cardId : `editform${this.list.id}`,
      date : `${this.list.createdAt.split('T')[0]}`,
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
    },
    destroy(){
      let id = this.list.id
      this.$emit('requestDelete', id)
    }
  }
}
</script>

<style>

</style>