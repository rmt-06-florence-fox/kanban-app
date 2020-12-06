<template>
  <div class="category">
            <div class="p-2 alert alert-secondary">
            <h3>{{category.name}}</h3>
            
            <draggable
                class="list-group kanban-column"
                :list="[category]"
                group="tasks"
            >
                <Task :allTasks="allTasks" :category="category" @changePage="changePage"  v-for="(element, i) in filteredTask"
                :key="i" :task="element" @deleteTask="deleteTask" @editTask="editTask" @patchLeft="patchLeft" @patchRight="patchRight"></Task>
            </draggable>
            </div>
        </div>
</template>

<script>

import Task from "./Task"
import draggable from "vuedraggable";

export default {
    name: "Category",
    props: ["allTasks", "category"],
    data() {
        return {
            
        }
    },
    components: {
        draggable,
        Task
    },
    methods: {
        changePage(page) {
            this.$emit('changePage', page)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        editTask(task) {
            this.$emit('editTask', task)
        },
        patchLeft(category, id) {
            this.$emit('patchLeft', category, id)
        },
        patchRight(category, id) {
            this.$emit('patchRight', category, id)
        }
    },
    computed: {
        filteredTask() {
            let tasks = []
            this.allTasks.forEach(task => {
                if (task.category === this.category.name) {
                    tasks.push(task)
                }
            })
            console.log(this.category);
            return tasks
        },
        
    }
}
</script>

<style>

</style>