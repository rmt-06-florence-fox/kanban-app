<template>
    <div class="container mt-4 ">
        <div class="row">
            <div class="col-md-3 col-sm-6 mt-3" v-for="category in categories" :key="category.name">
                <div class="p-3 bg-dark text-white">
                    <h5 class="text-center">{{category.name}}</h5>
                </div>
                <div class="card mt-3 shadow" v-for="task in taskFilter(category.name)" :key="task.id">
                    <KanbanList 
                    :taskList="task"
                    @toEditTask='toEditTask'
                    @deleteTask='deleteTask'
                    ></KanbanList>
                    <!-- <AddPage v-if="currentPage === 'Add Page'" @changePage="changePage"></AddPage>
                    <EditPage v-if="currentPage === 'Edit Page'" @changePage="changePage"></EditPage> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KanbanList from "./KanbanList"
// import AddPage from "./AddPage
// import EditPage from "./EditPage"

export default {
    name: "MainPage",
    currentPage: "Home Page",
    props: ["tasks", "categories"],
    data() {
        return {}
    },
    components: {
        KanbanList,
        // AddPage,
        // EditPage
    },
    methods: {
        taskFilter(category) {
            return this.tasks.filter(el => el.category === category)
        },
        // changePage(page) {
        //     this.changePage(page)
        // },
        toEditTask(data) {
            console.log(data);
            this.$emit('toEditTask', data)
        },
        // toAddTask(data) {
        //     this.$emit('toAddTask', data)
        // },
        deleteTask(data) {
            this.$emit('deleteTask', data)
        }
    }
}
</script>

<style>

</style>