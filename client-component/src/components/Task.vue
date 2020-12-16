<template>
  <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-sm-3" v-for="item in category" :key="item.id">
                <div id="head-card" class="p-3 mb-2 bg-primary text-white">
                    <span>{{item}}</span>
                    <a href="#" @click.prevent="addPage">+</a>
                </div>
                <div id="column">
                    <!-- DATA -->
                    <Card
                      @ToEditPage="toEditPage"
                      @DeleteTask="deleteTask"
                      v-for="task in tasks" :key="task.id"
                      :task="task"
                      :item="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/taskCard'

export default {
    name: "Task",
    props: ["category", "tasks"],
    components: {
        Card
    },
    methods: {
        addPage() {
            this.$emit("AddPage", "Add Form")
            // console.log("hallo")
        },
        deleteTask(id) {
            // console.log(id)
            this.$emit("DeleteTask", id)
        },
        toEditPage(page, id) {
            // console.log(page, id, "Halloooo")
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