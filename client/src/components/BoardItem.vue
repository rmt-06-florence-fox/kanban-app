<template>
    <div class="card-body">
        <div class="card px-3 py-3">
            <h6 class="card-title">{{ task.title }}</h6>
            <div class="container">
                <div class="row justify-content-end">
                    <div class="card-subtitle">
                        <a href="#" @click.prevent="changeCategory">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right mr-2"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </a>
                        <a href="#" @click.prevent="editTask">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil mr-2"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        </a>
                        <a href="#" @click.prevent="deleteTask">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2'
    import 'regenerator-runtime/runtime'

    export default {
        name: 'BoardItem',
        data() {
            return {}
        },
        props: ['task'],
        methods: {
            async editTask() {
                const { value: editValues} = await Swal.fire({
                    title: 'Edit Task',
                    html: 
                        `
                        <label for="title">Title</label>
                        <input id="title" class="swal2-input" value="${this.task.title}">
                        <label for="category">Category</label>
                        <select id="category" class="swal2-input">
                            <option value="backlog" ${ this.task.category === 'backlog'? 'selected': ''}>Backlog</option>
                            <option value="todo" ${ this.task.category === 'todo'? 'selected': ''}>Todo</option>
                            <option value="doing" ${ this.task.category === 'doing'? 'selected': ''}>Doing</option>
                            <option value="done" ${ this.task.category === 'done'? 'selected': ''}>Done</option>
                        </select>
                        `,
                    focusConfirm: false,
                    showCancelButton: true,
                    preConfirm: () => {
                        return [
                            document.getElementById('title').value,
                            document.getElementById('category').value
                        ]
                    }
                })

                if (editValues) {
                    // console.log(editValues);
                    this.$emit('passEditTaskId', this.task.id, editValues)
                }
            },

            deleteTask() {
                this.$emit('passDeleteTaskId', this.task.id)
            },

            changeCategory() {
                this.$emit('passPatchTaskId', this.task.id, this.task.category)
            }
        },
        computed: {
            taskByCategory: function () {

            }
        }
    }
</script>

<style>

</style>