<template>
    <div @mouseover="showEdit = true " @mouseleave=" showEdit = false "
        class="p-3 my-2 max-w-sm mx-2 bg-white shadow-md flex items-center space-x-4 hover:shadow-lg hover:bg-green-300">
            <div class="grid-cols-1 divide-y divide-pink-300 w-full">
                <div class="max-h-28 mb-4 overflow-ellipsis overflow-hidden">
                    <h4 class="text-base font-medium text-black">
                        {{task.title}}
                    </h4>
                    <p class="text-gray-500 text-sm  ">
                        {{task.description}}
                    </p>
                </div>
                <div>
                    <small>Assignee: {{task.User.username}}</small>
                </div>
                <taskOption v-if="showEdit"
                            @catDown="catDownTask"
                            @deleteThis="deleteThisTask"
                            @editThis="editThisTask"
                            @catUp="catUpTask">
                </taskOption>
            </div>
    </div>
</template>

<script>
import taskOption from './taskOption'

export default {
    name: 'task',
    props: ['task'],
    components: {
        taskOption
    },
    data () {
        return {
            showEdit: false
        }
    },
    methods: {
        catDownTask () {
            this.$emit('catDownTask', this.task.id)
            console.log(this.task.id, 'dari task.vue catDownTask')
        },
        deleteThisTask () {
            this.$emit('deleteThisTask', this.task.id)
            console.log(this.task.id, 'dari task.vue deleteThisTask')
        },
        editThisTask () {
            this.$emit('editThisTask', this.task.id)
            console.log(this.task.id, 'dari task.vue editThisTask')
        },
        catUpTask () {
            this.$emit('catUpTask', this.task.id)
            console.log(this.task.id, 'dari task.vue catUpTask')
        },
    }

}
</script>

<style>

</style>