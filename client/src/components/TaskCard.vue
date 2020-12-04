<template>
  <div>
    <div v-if="showEditForm == false" class="card mt-4 col-4" style="width: 18rem">
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">{{taskData.title}}</h6>
        <a href="#" @click="toggleEditForm" class="card-link">Edit</a>
        <a href="#" @click="deleteTask" class="card-link">Delete</a>
      </div>
    </div>
    <EditForm v-else-if="showEditForm" :data="taskData"></EditForm>
  </div>
</template>

<script>
import EditForm from './EditTask';

export default {
    data() {
        return {
            showEditForm: false
        }
    },
    components: {
        EditForm
    },
    props: ['taskData'],
    methods: {
        deleteTask() {
            const id = this.taskData.id;
            console.log(id);
            this.$api({
                method: 'DELETE',
                url: `/tasks/${id}`,
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(response => {
                this.$emit('afterDelete', id);
            })
            .catch(error => {
                console.log(error);
            })
        },
        toggleEditForm() {
            this.showEditForm = !this.showEditForm;
        }
    }
};
</script>

<style>
</style>