<template>
  <div class="container-fluid">
        <div class="row mt-3">
            <!-- Back Log -->
            <div class="col-sm-3">
                <div id="head-card" class="p-3 mb-2 bg-primary text-white">
                    <span>Backlog</span>
                    <a href="#" @click="addPage">Tambah</a>           
                </div>
                <div id="backlog">
                    <!-- DATA -->
                    <Card v-for="task in tasks" :key="task.id" :task="task"> </Card>
                </div>
            </div>
            <!-- Todo -->
            <div class="col-sm-3">
                <div class="p-3 mb-2 bg-primary text-white">
                    hallo
                </div>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Doing -->
            <div class="col-sm-3">
                <div class="p-3 mb-2 bg-primary text-white">
                    hallo
                </div>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Completed -->
            <div class="col-sm-3">
                <div class="p-3 mb-2 bg-primary text-white">
                    hallo
                </div>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./taskCard"

export default {
    name: "Task",
    props: ["tasks"],
    methods: {
        editPage(task) {
            this.$emit("EditPage", "Edit Form", task)
        },
        addPage() {
            this.$emit("AddPage", "Add Form")
        },
        deleteTask(id) {
            this.$emit("DeleteTask", id)
        }
    },
    components: {
        Card
    }
}
</script>

<style>

</style>