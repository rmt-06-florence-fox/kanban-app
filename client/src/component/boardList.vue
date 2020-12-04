<template>
    <div class="container mt-5">
        <div class="row">
            <!-- <h1>BoardList</h1> -->
            <taskBoard v-for="category in categories" :key="category.id" :category="category" :dataTasks="dataTasks"  @createTask="createTask" @deleteId="deleteData"></taskBoard>
        </div>
    </div>
</template>

<script>
    import taskBoard from './taskBoard'
export default {
    name: 'boardList',
    data () {
        return {
            categories: [
                {
                    id: 1,
                    name: 'backlog'
                },
                {
                    id: 2,
                    name: 'todo'
                },
                {
                    id: 3,
                    name: 'doing'
                },
                {
                    id: 4,
                    name: 'done'
                },
            ],
        }
    },
    components: {
        taskBoard
    },
    props: ['dataTasks'],
    methods: {
        createTask(newData) {
            this.$emit('createTask', newData)
        },
        deleteData(id) {
            this.$emit('deleteId', id)
        }
    }
}
</script>

<style>

</style>