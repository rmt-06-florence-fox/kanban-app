<template>
    <div 
        class="flex-none  mb-4 max-w-xs bg-white shadow overflow-hidden sm:rounded-lg rounded shadow-md hover:shadow-2xl hover:bg-gray-50 lg:mb-0 " >
            <div class="bg-gradient-to-r from-gray-600 to-pink-600 sticky top-0 relative " style="min-width: 24vw;">
                <h4 class="text-base leading-6 font-semibold text-white text-center py-3 px-24">
                    {{cat.name}}
                </h4>
                <i class="fa fa-plus absolute top-4 right-12 transform scale-100 hover:scale-125 text-white"></i>
            </div>
                <div class="border-t border-gray-200 overflow-y-auto" style="max-height: 62vh; min-height: 5vh;">
                    <task   v-for="task in tasks" 
                            :key="task.id"
                            :task='task'>
                    </task>

                </div>
            <!-- <task   :tasks="tasks"
                    :categories="categories">
            </task> -->
    </div>
</template>

<script>
import task from './task'
import Task from './task.vue'

export default {
    name: 'board',
    components: {
        task
    },
    props: ['tasks', 'cat'], 
    data () {
        return {

        }
    }
}
</script>

<style>

</style>