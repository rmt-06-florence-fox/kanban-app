<template>
  <div>
    <b-button class="btn-primary" @click="showModal">+ Task</b-button>
    <form @submit.prevent="lemparTitleTask">
        <b-modal ref="my-modal" hide-footer title="add new task">
        <div class="d-block text-center">
            <h3>New Task Name</h3>
            <input class="text-center" v-model="title"  type="text" required >
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="lemparTitleTask">add</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>

  <!-- <form @submit.prevent="lemparTitleTask">
      <label>Title</label>
      <input v-model="title" type="text">
      <button>add</button>
  </form> -->
</template>

<script>
export default {
    name: "addTask",
    props: ['categoryId'],
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
        lemparTitleTask(){
            let payload = {
                title: this.title,
                CategoryId: this.categoryId
            }
            this.$emit('lemparTitleTask', payload)
            this.hideModal()
        }
    }
}
</script>

<style>

</style>