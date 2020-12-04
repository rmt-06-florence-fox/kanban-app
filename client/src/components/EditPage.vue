<template>
  <div class="container-edit">
        <div id="edit-page" class="bg-light col mt-5 rounded">
            <form @submit.prevent="updateTask" id="edit-form" class="input-margin">
                <h1>Edit Form</h1>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="title" type="text" class="form-control" name="title" id="edit-title" placeholder="title" >
                </div>
                <div class="form-group">
                    <label for="edit-category">Category</label>
                    <select v-model="category" class="form-control" id="edit-category">
                      <option selected disabled>Select Category</option>
                      <option value="Backlog">Backlog</option>
                      <option value="Todo">Todo</option>
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-description">Description</label>
                    <textarea v-model="description" class="form-control" id="edit-desc" placeholder="description"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
      </div>
</template>

<script>
export default {
    name: "EditPage",
    props: ["edited"],
    data() {
        return {
            title: "",
            description: "",
            category: ""
        }
    },
    methods: {
        updateTask() {
            const data = {
                id: this.edited.id,
                title: this.title,
                description: this.description,
                category: this.category
            }
            this.$emit("updateTask", data)
        }
    },
    created() {
        console.log(this.edited);
        this.title = this.edited.title,
        this.description = this.edited.description,
        this.category = this.edited.category
    }
}
</script>

<style>

</style>