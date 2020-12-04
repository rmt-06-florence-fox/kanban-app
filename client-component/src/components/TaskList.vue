<template>
  <div class="container mt-4">
    
                <div class="row">
    
                    <div class="col-md-3">
                        <div class="p-3 bg-primary text-white rounded">
                            backlog
                        </div>

                        <div class="card" v-for="backlog in backlogs" :key="backlog.id">
                            <h5 class="card-title">{{ backlog.title }}</h5>
                            <h5 class="card-title">{{ backlog.category }}</h5>
                            <button @click="toDelete(backlog.id)">Delete</button>
                            <button @click="toUpdate(backlog.id)">Update</button>
                        </div>
                    </div>
    
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary text-white rounded">
                            todo
                        </div>

                        <div class="card" v-for="todo in todos" :key="todo.id">
                            <h5 class="card-title">{{ todo.title }}</h5>
                            <h5 class="card-title">{{ todo.category }}</h5>
                            <button @click="toDelete(todo.id)">Delete</button>
                            <button @click="toUpdate(todo.id)">Update</button>
                        </div>
                    </div>
    
                    <div class="col-md-3">
                        <div class="p-3 bg-info text-white rounded">
                            doing
                        </div>

                        <div class="card" v-for="doing in doings" :key="doing.id">
                            <h5 class="card-title">{{ doing.title }}</h5>
                            <h5 class="card-title">{{ doing.category }}</h5>
                            <button @click="toDelete(doing.id)">Delete</button>
                            <button @click="toUpdate(doing.id)">Update</button>
                        </div>
                    </div>
    
                    <div class="col-md-3">
                        <div class="p-3 bg-dark text-white rounded">
                            done
                        </div>

                        <div class="card" v-for="done in dones" :key="done.id">
                            <h5 class="card-title">{{ done.title }}</h5>
                            <h5 class="card-title">{{ done.category }}</h5>
                            <button @click="toDelete(done.id)">Delete</button>
                            <button @click="toUpdate(done.id)">Update</button>
                        </div>
                    </div>
    
                </div>
    
            </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: ['backlogs', 'todos', 'doings', 'dones'],
    methods: {
        toDelete(id) {
            this.$emit('deleteTask', id)
        },
        toUpdate(id) {
            this.$emit('updateTask', id)
        }
    }
}
</script>

<style>

</style>