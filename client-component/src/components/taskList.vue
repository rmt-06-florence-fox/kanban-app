<template>
    <div class="card-body">
        <h5 class="card-title">{{ listData.title }}</h5>
        <p class="card-text">{{ listData.desc }}</p>
        <a class="btn btn-primary" @click.prevent="edit(listData.id)">Edit</a>
        <a class="btn btn-danger" @click.prevent="deleteId(listData.id)">Delete</a><br>
        <a class="btn btn-success" v-if="listData.category !== 'Backlog'" @click.prevent="patchLeft(listData)">Left</a>
        <a class="btn btn-success" v-if="listData.category !== 'Done'" @click.prevent="patchRight(listData)">Right</a>
        <p class="card-text"><small>Owner = {{ listData.User.email }}</small></p>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'TaskList',
    props: ['listData'],
    methods: {
        edit(data){
            this.$emit('edit', data)
        },
        deleteId(data){
            this.$emit('deleteId', data)
        },
        patchLeft(data){
            this.$emit('patchLeft', data)
        },
        patchRight(data){
            this.$emit('patchRight', data)
        }
    }
}
</script>

<style>

</style>