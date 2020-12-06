<template>
    <div class="container">
        <div class="row row-add-category">
            <div class="add-category col-sm-3">
                <input v-model="name" type="text" placeholder="Add Category" class="input-add">
                <button type="button" class="btn btn-primary single-btn" @click="addCategory"><i class="material-icons">control_point</i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCategory",
    data() {
        return {
            name: ""
        }
    },
    methods: {
        addCategory() {
            this.$emit("addCategory", this.name)
            this.name = ""
        }
    }
}
</script>

<style>

</style>