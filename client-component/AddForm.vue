<template>
  <section class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-4">
                <div class="shadow-lg p-5 mb-5 bg-white rounded">
                    <h5 class="mb-4"><b>Add Kanban</b></h5>
                    <form id="form-add">
                        <div class="form-group">
                            <label for="add-title">Title</label>
                            <input type="text" class="form-control" id="title-input">
                        </div>
                        <div class="form-group">
                            <label for="add-category">Category</label>
                            <select class="form-control" id="category-input">
                                <option selected disabled>Select Category</option>
                                <option>Backlog</option>
                                <option>Todo</option>
                                <option>Doing</option>
                                <option>Done</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                    <br>
                    <button id="back-add" class="btn btn-secondary btn-block">Back</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AddForm",
    task: {
        title: "",
        description: ""
    }
}
</script>

<style>

</style>