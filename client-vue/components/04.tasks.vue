<template>
  <div>
    <div class="card-body rounded border border-primary">
        <h6 class="card-text" v-text = "list.title"></h6>
        <p><small>Made by: {{this.fullname}}<small></p>
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