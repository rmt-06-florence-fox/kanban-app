<template>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">{{task.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{new Date(task.createdAt).toISOString().split('T')[0]}}</h6>
    <p class="card-text text-muted">Author: {{task.User.email}}</p>
    <div class="tombol">
        <a @click="toEditPage" href="#" class="card-link"><i class='far fa-edit' style='font-size:24px'></i></a>
        <a @click.prevent="destroy" href="#" class="card-link"><i class='fas fa-trash-alt' style='font-size:24px'></i></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'TodoList',
    props: ['task'],
    methods: {
        toEditPage() {
            let payload= {
                atPage: 'editForm',
                task:this.task
            }
            this.$emit('toEditPage', payload)
        },
        destroy() {
            this.$emit('destroy', this.task.id)
        }
    }
}
</script>

<style>

</style>