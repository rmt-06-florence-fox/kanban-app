<template>
    <div class="col-md-3 col-sm-6">
        <div class="p-3 bg-primary text-white rounded">    
            {{ category.name }}
        </div>
        <div>
            <!-- {{tasks, 'ini tasks'}} -->
            <!-- {{category, 'ini category'}} -->
            <!-- {{tasks.filter(el => (el.category === category.name.toLowerCase))}} -->
        <KanbanItem :tasks="tasks" v-for="task in filterByCategory" :key="task.id" :task="task" 
        :category="category" @edit="edit" 
        @cancel="cancel" @deletData="deleteData"
        >
        </KanbanItem>
        </div>
    </div>
</template>

<script>
import KanbanItem from "./KanbanItem"

export default {
    data() {
        return {
            name: "KanbanBoard"
        }
    },
    props: [ "category", "tasks" ],
    components: {
        KanbanItem
    },
    methods: {
        edit(objEdit) {
            this.$emit("edit", objEdit)
            // console.log("edit", objEdit)
            // console.log("------------")
        },
        cancel() {
            // console.log("-----------------")
            this.$emit("cancel")
        },
        deleteData(id) {
            this.$emit("deleteData", id)
        }
    },
    computed: {
        filterByCategory () {
            return this.tasks.filter(el => (el.category === this.category.name.toLowerCase()))
        }
    }
}
</script>

<style>

</style>