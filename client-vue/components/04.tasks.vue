<template>
  <div>
    <div class="card-body rounded border border-primary">
        <p class="card-text" v-text = "list.title"></p>
        <p>made by: {{this.fullname}}</p>
        <a class="btn btn-outline-primary" @click.prevent = "edit">Edit</a>
        <a href="" class="btn btn-outline-danger" @click.prevent = "destroy">Delete</a>
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