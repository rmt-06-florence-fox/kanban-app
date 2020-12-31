<template>
    <div class="container">
        <form @submit.prevent="addTaskSubmit" :orderTask="requestTask" :category="categories">
            <textarea v-model="title" id="" cols="33" rows="5"></textarea>
            <button type="submit" class="btn btn-outline-primary bg-dark mb-2">Add</button>
        </form> 
        <button class="btn btn-outline-danger bg-dark" @click="cancelAdd">Cancel
        </button>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    props: ["requestTask", "categories"],
    data(){
        return{
            title:'',
        }
    },
    methods: {
        addTaskSubmit(){
            this.$emit("submitAdd", "none", this.title)
        },
        cancelAdd(){
            console.log(this.requestTask)
            this.$emit("cancelAddForm", "none")
        }
    }
}
</script>

<style>

</style>