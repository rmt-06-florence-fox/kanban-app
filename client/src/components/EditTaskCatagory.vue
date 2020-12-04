<template>
  <div>
    <b-button class="btn-primary" @click="showModal">Move</b-button>
    <form @submit.prevent="lemparEditCategory">
        <b-modal ref="my-modal" hide-footer title="add new task">
        <div class="d-block text-center">
            <h3>Move Category Task</h3>
        <select  v-model="categorySelected">
            <option v-for="category in categoryList" :key="category.id">{{category.title}}</option>
        </select>
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="lemparEditCategory">move</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
export default {
    name:"editTaskCatagory",
    props: ['categoryList', 'taskCategory'],
    data(){
        return {
            categorySelected: this.taskCategory
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
        lemparEditCategory(){
            console.log(this.taskCategory, `ini dr edit task`)
            this.$emit('lemparEditCategory', this.categorySelected)
            // console.log(this.categorySelected, 'ini dari edit task')
        }
    }
}
</script>

<style>

</style>