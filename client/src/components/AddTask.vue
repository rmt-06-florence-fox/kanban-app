<template>
    <div class="AddTask">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <label for="title" class="col-form-label">Title:</label>
                                    <input v-model="title" type="text" class="form-control" id="title">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-info">Save</button>
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
    // props: ["tasks", "categories"],
    data() {
        return {
            title: "",
            categories: "" 
        }
    },
    methods: {
        addTask() {
            const payload = {
                title: this.title,
                category: "Backlog"
            }
            // console.log('masuk add form')
            this.title=""
            this.$emit("addTask", payload)
            $('#exampleModal').modal('hide');
        }
    },
}
</script>

<style>

</style>