<template>
  <div>
    <b-button class="btn-primary" @click="showModal">+ category</b-button>
    <form @submit.prevent="lemparNewCategory">
        <b-modal ref="my-modal" hide-footer title="add new organization">
        <div class="d-block text-center">
            <h3>Category Name</h3>
            <input class="text-center" v-model="categoryTitle"  type="text" required >
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="lemparNewCategory">add</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
export default {
    name: "addCategory",
    data(){
        return {
            categoryTitle: ''
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
        lemparNewCategory(){
            let title = this.categoryTitle
            this.$emit('lemparNewCategory', title)
            this.hideModal()
        }
    }
}
</script>

<style>

</style>