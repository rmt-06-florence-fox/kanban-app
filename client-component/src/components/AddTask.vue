<template>
    <div class="container">
        <form @submit.prevent="addTaskSubmit" :orderTask="requestTask">
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
    props: ["requestTask"],
    data(){
        return{
            title:'',
            CategoryId: this.requestTask.CategoryId,
            UserId: this.requestTask.UserId
        }
    },
    methods: {
        addTaskSubmit(){
            this.$emit("submitAdd", "none", this.title, this.CategoryId, this,UserId)
        },
        cancelAdd(){
            console.log(this.CategoryId, this.UserId)
            this.$emit("cancelAddForm", "none")
        }
    }
}
</script>

<style>

</style>