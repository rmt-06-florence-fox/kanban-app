<template>
    <div class="p-3 rounded" id="form-card-1">
        <button @click="addTask" class="button-Add">+</button>
        <div class="p-2 mb-2 bg-success text-white rounded shadow">
            {{Category.name}}
        </div> 
        <TaskCard 
        v-for="Task in filteredTask"
        :key="Task.id"
        :Task="Task"
        :fetch="fetch"
        :Category="Category.name"
        @PleaseDeleteTask="destroy"
        @PleaseEditCategory="back"
        @PleaseEditCategory="done"
        ></TaskCard>
    </div>
</template>

<script>
import TaskCard from "./taskCard"

export default {
    name:  "TaskBoard1",
    data() {
        return {
            tasks: [],
            filter: []
        }
    },
    props: ['Task', 'Category','fetch'],
    methods: {
        back(category,id){
            this.$emit("PleaseEditCategory", category, id)
        },
        done(category,id){
            this.$emit("PleaseEditCategory", category, id)
        },
        destroy(id){
            this.$emit("PleaseDeleteTask", id)
        },
        addTask(){
            this.$emit("PleaseAddTask")
        }
    },
    computed: {
        filteredTask(){
            return this.tasks.filter(task => task.category === this.Category.name)
        }
    },
    components: {
        TaskCard
    },
    created(){
        
        this.tasks = this.Task
        // this.fetch
        
    },
    mounted(){
        filter = this.filteredTask
    }
    
}
</script>

<style>
    .button-Add {
    margin-left: 10%;
    display: inline-block;
    padding: 5px 5px 5px 5px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    width: 50%;
    margin-bottom: 20px;
    outline: none;
}
.button-Add:hover {
    background-color: #3e8e41;
    outline: none;
}
.button-Add:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    outline: none;
    transform: translateY(4px);
    
}
</style>