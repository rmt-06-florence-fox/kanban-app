<template>
    <div v-if="task.CategoryId === category.id" class="bg-primary text-white desc-category card">
        <div>
            {{task.title}}
        </div>
        <div>
            by {{name}}
        </div>
        <div class="category-symbol">
            <a @click.prevent="editKanban(task)" href=""><i class="material-icons pointer" style="font-size:12px">mode_edit</i></a>
            <p></p>
            <a @click.prevent="deleteKanban(task)" href=""><i class="material-icons pointer" style="font-size:12px">delete</i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskItem",
    props: [ 'task', 'category' ],
    data() {
        return {
            name: localStorage.getItem('name')
        }
    },
    methods: {
        editKanban(task) {
            this.$emit("editKanban", "Edit Kanban Page", task)
        },
        deleteKanban(task) {
            this.$emit("deleteKanban", task.id)
        }
    }
}
</script>

<style>

</style>