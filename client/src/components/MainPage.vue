<template>
    <section id="mainsection">
        <nav class="navbar navbar-light fixed-top" style="background-color: #8c8b9b4a;">
            <div class="container">
                <a class="navbar-brand" style="color:#0058E0; padding-left: 9px; padding-top: 1px; padding-bottom: 1px; padding-right: 9px; box-shadow: 0px 0px 2px black; border-radius: 15px">kanban-app</a>
                <form class="form-inline">
                    <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" id="btn-signOut" @click="logout">Sign Out</button>
                </form>
            </div>
        </nav>

        <div class="container main">
            <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" style="margin-bottom: 2%"><i class="fa fa-tasks" aria-hidden="true"></i> New Task</button>
            <div class="row">
                <div class="col" style="margin-right: -1%" v-for="task in tasks.cat" :key="task.id">
                    <div class="card border-secondary" style="max-width: 15rem;" >
                        <div class="card-header" style="background-color: #D5FDFF; color: black;">
                            {{task.categoryName}}
                        </div> 
                        <div class="card-body" id="todo-list" style="height: 50vh; overflow-y: auto; padding: 8px;">
                            <!-- di isi fetch -->
                            <div v-for="task2 in tasks.dataTask" :key="task2.id">
                                <div class="btn-group" style="margin-bottom: 5%" v-if="task.id == task2.CategoryId">
                                    <button type="button" class="btn btn-outline-info" style="width: 20vh;">{{task2.title}}
                                        <p><small>by {{task2.User.name}}</small></p>

                                    </button>
                                    <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button>
                                    <div class="dropdown-menu" style="text-align: center;">
                                        <button type="button" class="btn btn-outline-primary" @click="undoTask({CategoryId: task2.CategoryId - 1, id: task2.id})"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                                        <button type="button" class="btn btn-outline-warning" data-target="#exampleModal2" data-toggle="modal" @click="editTask(task2.title)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                        <button type="button" class="btn btn-outline-danger" @click="deleteTask(task2.id)"><i class="fa fa-trash-o" aria-hidden="true" ></i></button>
                                        <button type="button" class="btn btn-outline-success" @click="nextTask({CategoryId: task2.CategoryId + 1, id: task2.id})"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer" style="text-align: center">
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
                                        </div>
                                        <div class="modal-body">
                                            <form @submit.prevent="addTask">
                                                <div class="form-group">
                                                    <label for="title" class="col-form-label">title:</label>
                                                    <input type="text" class="form-control" id="recipient-name" v-model="title">
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-outline-success" >add task</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 


                        <div class="card-footer" style="text-align: center">
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">edit title</h5>
                                        </div>
                                        <div class="modal-body">
                                            <form @submit.prevent="addTask">
                                                <div class="form-group">
                                                    <label for="title" class="col-form-label">title:</label>
                                                    <input type="text" class="form-control" id="recipient-name" v-model="title">
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-outline-success" >save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 

                    <div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MainPage",
    props: ["tasks"],
    data() {
        return {
            title: ""
            // tasks: []
        }
    },
    methods: {
        logout() {
            this.$emit("logout")
        },
        addTask() {
            const payload = {
                title: this.title
            }
            this.$emit("addTask", payload)
        },
        deleteTask(id) {
            this.$emit("deleteTask", id)
        },
        nextTask(id) {
            this.$emit("nextTask", id)
        },
        undoTask(id) {
            this.$emit("nextTask", id)
        }
    },
}
</script>

<style>

</style>