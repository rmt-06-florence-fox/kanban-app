<template>
    <div class="card mt-3 shadow" >
        <div class="card-body text-center">
            <h5 class="card-title">{{ listData.title }}</h5>
            <p class="card-text">{{ listData.desc }}</p>
            <a class="btn btn-primary" @click.prevent="edit(listData.id)"><i class="fas fa-edit"></i></a>
            <a class="btn btn-danger" @click.prevent="deleteId(listData.id)"><i class="fas fa-trash-alt"></i></a><br>
            <a class="btn btn-success mt-1" v-if="listData.category !== 'Backlog'" @click.prevent="patchLeft(listData)"><i class="fas fa-arrow-left"></i></a>
            <a class="btn btn-success mt-1" v-if="listData.category !== 'Done'" @click.prevent="patchRight(listData)"><i class="fas fa-arrow-right"></i></a>
            <p class="card-text"><small>{{ listData.User.email }}</small></p>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'TaskItem',
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