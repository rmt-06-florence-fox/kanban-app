<template>
    <div class="col-md-3 my-3">
        <div class="card">
            <div class="card-header text-center">
                {{ category }}
            </div>
            <BoardItem v-for="task in filterByCategory" :key="task.id" 
                :task="task" 
                @passDeleteTaskId="passDeleteTaskId"
                @passEditTaskId="passEditTaskId"
                @passPatchTaskId="passPatchTaskId">
            </BoardItem>
            <div class="card-footer">
                <button class="btn btn-light btn-sm btn-block text-left" @click="addTask">+ Add Task</button>
            </div>
        </div>
    </div>

</template>

<script>
    import BoardItem from './BoardItem.vue'
    import Swal from 'sweetalert2'
    import 'regenerator-runtime/runtime'

    export default {
        name: 'BoardList',
        data() {
            return {
                pageName: ''
            }
        },
        props: ['category', 'tasks'],
        components: {
            BoardItem
        },
        methods: {
            async addTask() {
                const { value: title} = await Swal.fire({
                    title: `Add ${this.category}`,
                    input: 'text',
                    inputPlaceholder: 'Type your task here...',
                    showCancelButton: true,
                    inputValidator: value => {
                        if(!value) {
                            return 'Input cannot be empty!'
                        }
                    }
                })

                if (title) {
                    this.$emit('passInput', title, this.category)
                }
            },

            passDeleteTaskId(id) {
                this.$emit('getDeleteTaskId', id)
            },

            passEditTaskId(id, editValues) {
                this.$emit('getEditTaskId', id, editValues)
            },

            passPatchTaskId(id, category) {
                this.$emit('getPatchTaskId', id, category)
            },

            movePage(page) {
                this.$emit('movePage', page)
            }
        },
        computed: {
            filterByCategory: function () {
                return this.tasks.filter(task => task.category === this.category.toLowerCase())
            }
        }
    }
</script>

<style>

</style>