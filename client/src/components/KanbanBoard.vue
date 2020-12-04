<template>
    <div class="row">
        <div class="col-md-3 col-sm-6 mt-4" v-for="(category) in kanbanBoard" :key="category.id">
            <TaskComp
                :category="category"
                @add="add"
                @removeTask="removeTask"
                @editTask="editTask"
            ></TaskComp>
        </div>
    </div>
</template>

<script>
import TaskComp from "./TaskComponent";

export default {
    name: "KanbanBoard",
    props: ['kanbanBoard'],
    data(){
        return {

        }
    },
    methods:{
        add(payload){
            console.log(payload);
            this.$emit("add", payload);
        },
        editTask(payload){
            // console.log(payload);
            this.$emit("editTask", payload);
        },
        removeTask(id){
            this.$emit("removeTask", id);
        }
    },
    components: {
        TaskComp
    }
}
</script>

<style>

</style>