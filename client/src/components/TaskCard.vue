<template>
  <div class="card" style="width: 100%;">
  <div class="card-body bg-warning shadow p-3">
    <h5 class="card-title text-dark"><strong>{{data.title}}</strong></h5>
    <div v-if="User(data.UserId)">
      <button class="btn btn-link text-primary" @click="editTask"><strong>Edit</strong></button>
      <button class="btn btn-link text-danger" @click="destroyTask"><strong>Delete</strong></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      id: this.data.id
    }
  },
  props: ['data'],
  methods: {
    destroyTask(id) {
      this.$emit('destroyTask', id)
    },
    editTask() {
      this.$emit('editTask')
    },
    User(UserId) {
      console.log(UserId)
      if(data.UserId == localStorage.getItem('id')) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>