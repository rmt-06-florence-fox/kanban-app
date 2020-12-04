<template>
  <div>
    <b-button id="show-btn" @click="showModal">add</b-button>
    <form @submit.prevent="lemparNewOrganization">
        <b-modal ref="my-modal" hide-footer title="add new organization">
        <div class="d-block text-center">
            <h3>Organization Name</h3>
        <input v-model="organizationName" class=" text-center" type="text" placeholder="your organization name">
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="lemparNewOrganization">add</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
  export default {
    name: "addOrganization",
    data(){
        return{
            organizationName: ''
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
      lemparNewOrganization(){
          this.$emit('lemparNewOrganization', this.organizationName)
          this.hideModal()
      }
    }
  }
</script>