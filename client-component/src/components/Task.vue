<template>
  <div class="container-fluid">
        <div class="row mt-3">
            <!-- Back Log -->
            <div class="col-sm-3" v-for="item in category" :key="item.id">
                <div id="head-card" class="p-3 mb-2 bg-primary text-white">
                    <span>{{item}}</span>
                    <a href="#" @click.prevent="addPage">Tambah</a>           
                </div>
                <div id="backlog">
                    <!-- DATA -->
                    <div class="card" v-for="task in tasks" :key="task.id">
                        <div class="card-body" v-if="item === task.category">
                            <!-- <h1>Hello</h1> -->
                            <h5 class="card-title">{{task.title}}</h5>
                            <p class="card-text">{{task.User.email}}</p>
                            <a @click.prevent="toEditPage(task.id)" class="btn btn-primary">Edit</a>
                            <a @click.prevent="deleteTask(task.id)" class="btn btn-primary">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Task",
    props: ["category", "tasks"],
    methods: {
        addPage() {
            this.$emit("AddPage", "Add Form")
            // console.log("hallo")
        },
        deleteTask(id) {
            // console.log(id)
            this.$emit("DeleteTask", id)
        },
        toEditPage(id) {
            // console.log(id, "Halloooo")
            this.$emit("ToEditPage", "Edit Form", id)
        }
    },
    computed: {
        olahTask() {
            let filterTask = this.tasks.filter((value) => {
                return value.category === "Backlog"
            })
            return filterTask
        }
    }
}
</script>

<style>

</style>