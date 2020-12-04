<template>
    <div class="container-add">
        <div id="add-page" class="bg-light col mt-5 rounded">
            <form id="add-form" class="input-margin" @submit="addTask">
                <h1>Add Form</h1>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="title" type="text" class="form-control" name="title" id="add-title" placeholder="title">
                </div>
                <div class="form-group">
                    <label for="add-category">Category</label>
                    <select v-model="category" class="form-control" id="add-category">
                        <option selected disabled>Select Category</option>
                        <option value="Backlog">Backlog</option>
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="add-description">Description</label>
                    <textarea v-model="description" class="form-control" id="add-desc" placeholder="description"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
name:'AddPage',
    data() {
        return {
           title : '',
           description: '',
           category : '' 
        }
    },
    methods: {
        addTask() {
            const data = {
                title:this.title,
                description: this.description,
                category:this.category
                }
            this.$emit('addTask', data)
        }
    },
    props: ['selectedCategory'],
    created() {
        // console.log(this.selectedCategory);
        this.category = this.selectedCategory
    }
}
</script>

<style>

</style>