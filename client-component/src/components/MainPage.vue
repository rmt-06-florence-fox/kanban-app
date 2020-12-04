<template>
    <div>
    <Navbar @changePage="changePage"></Navbar>
    <AddCategory @addCategory="addCategory"></AddCategory>
    <div class="container-category container-fluid">
        <div class="row row-category">
            <div v-for="(category, index) in categories" :key="index" class="col-sm-3">
                <div class="bg-warning text-white title-category">
                    <h6 class="pointer"><a @click.prevent="addKanban(category)" href="">{{category.name}}</a></h6>
                </div>
                <div v-for="(task, index) in tasks" :key="index" class="category">
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
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
import Navbar from "./Navbar"
import AddCategory from "./AddCategory"

export default {
    name: "MainPage",
    props: [ 'tasks', 'categories' ],
    data() {
        return {
            name: localStorage.getItem('name')
        }
    },
    components: {
        Navbar,
        AddCategory
    },
    methods: {
        changePage(page) {
            this.$emit("changePage", page)
        },
        addCategory(name) {
            this.$emit("addCategory", name)
        },
        addKanban(category) {
            this.$emit("addKanban", "Add Kanban Page", category.id)
        },
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