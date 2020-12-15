<template>
    <div class="AddTask">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #16a085">
                            <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" style="background-color: #f7d794">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <label for="categoryName" class="col-form-label">Category</label>
                                    <input :placeholder="categoryName" type="text" class="form-control" id="title" disabled>
                                </div>
                                <div class="form-group">
                                    <label for="title" class="col-form-label">Title:</label>
                                    <input v-model="title" type="text" class="form-control" id="title">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    props: ["tasks", "categoryName"],
    data() {
        return {
            title: "",
            category: "",
            // categoryName: ""
        }
    },
    methods: {
        addTask() {
            const payload = {
                title: this.title
                // category: this.categoryName
            }
            this.title=""
            this.$emit("addTask", payload)
            $('#exampleModal').modal('hide');
        }
    },
}
</script>

<style>

</style>