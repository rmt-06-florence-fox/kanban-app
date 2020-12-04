<template>
  <div>
    <b-button class="btn-primary" @click="showModal">Edit</b-button>
    <form @submit.prevent="lemparEditTitle">
        <b-modal ref="my-modal" hide-footer title="add new task">
        <div class="d-block text-center">
            <h3>Edit Task Name</h3>
            <input class="text-center" v-model="taskTitle"  type="text" required >
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="lemparEditTitle">add</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
export default {
    name: "editTask",
    props:['taskTitle'],
    data() {
        return {
            title: ''
        }
    },
    methods: {
    showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
        lemparEditTitle(){
            let title = this.taskTitle
            this.$emit('lemparEditTitle', title)
            this.hideModal()
        }
    }
    
}
</script>

<style>

</style>