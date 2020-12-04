<template>
    <div class="container" :orderTask="requestTask" @submit.prevent="editForm(requestTask)">
        <form >
            <textarea name="edit" id="" cols="33" rows="5" v-model="requestTask.title" placeholder="enter title">
            </textarea>
            <button type="submit" class="btn btn-outline-primary bg-dark mb-2"> edit</button>
        </form>
            <button class="btn btn-outline-danger bg-dark" @click="cancelEdit">Cancel
            </button>
    </div>
</template>

<script>
export default {
    name: "EditPage",
    props: ["requestTask"],
    data(){
        return{
            title: ''
        }
    },
    methods: {
        editForm(value){
            this.$emit("emitInEdit", value, "none")
        },
        cancelEdit(){
            this.$emit("displayNone", 'none')
        }
    }
}
</script>

<style>

</style>