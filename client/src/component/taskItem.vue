<template>
    <div class="card mt-3 shadow">
        <div class="card-body">
            <h5 class="card-title" style="color: black">{{data.title}}</h5>
            <p class="card-text" style="color: black">{{data.description}}</p>
            <a href="#" class="btn btn-primary">edit</a>
            <!-- <a href="#" class="btn btn-primary">delete</a> -->
            <button type="button" class="btn btn-primary" @click.prevent="deleteData(data.id)">delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tasksItem',
    props: ['data'],
    methods: {
        deleteData(id) {
            this.$emit('deleteId', id)
        }
    }
}
</script>

<style>

</style>