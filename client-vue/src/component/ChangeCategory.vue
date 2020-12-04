<template>
    <div class="change-category">
        <ul>
            <a @click="changeCategory(1)" href="#">
            <li>Move to Backlog</li>
            </a>

            <a @click="changeCategory(2)" href="#">
            <li>Move to Todo</li>
            </a>

            <a @click="changeCategory(3)" href="#">
            <li>Move to Doing</li>
            </a>

            <a @click="changeCategory(4)" href="#">
            <li>Move to Done</li>
            </a>
        </ul>

        <button @click="cancelEdit" class="btn btn-danger" > Cancel</button>
    </div>
</template>

<script>

export default {
    name : "ChangeCategory",
    methods :{
        cancelEdit(){
            this.$emit('cancelEdit',0)
        },
        changeCategory(categoryId){
            console.log(categoryId)
            this.$emit("changeCategory", categoryId)
        }
    }
}
</script>

<style>

</style>