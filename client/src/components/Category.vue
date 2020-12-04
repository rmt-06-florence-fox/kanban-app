<template>
    <div class="container main">
        <div class="row">

            <div class="col" v-for="category in categories" :key="category.id">
                <div class="card bg-light mb-3" style="max-width: 15rem;">
                    <div class="card-header" style="display: flex; justify-content: space-between">
                        {{category}}
                        <i class="fa fa-plus-square-o" style="font-size:24px"></i>
                    </div>

                    <div class="card-body" style="height: 80vh; overflow-y: auto; background-color: #dcdde1;">
                        <div v-for="task in tasks" :key="task.id">
                            
                            <div class="card" style="width: 12rem; margin-bottom: 5%;" v-if="category == task.category">
                                <div class="card-body">
                                    <h5 class="card-title">{{task.title}}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">by {{task.User.email}}</h6>

                                    <a href="#" class="card-link">Edit</a>
                                    <a @click="deleteTask(task.id)" href="#" class="card-link">Delete</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ["tasks", "categories"],

    methods: {
        deleteTask(id) {
            
            this.$emit("deleteTask", id)
        }
    },
}
</script>

<style>

</style>