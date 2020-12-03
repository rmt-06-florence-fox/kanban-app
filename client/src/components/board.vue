<template>
    <div 
        class="flex-none  mb-4 max-w-xs bg-white shadow overflow-hidden sm:rounded-lg rounded shadow-md hover:shadow-2xl hover:bg-gray-50 lg:mb-0 " >
            <div class="flex justify-between bg-gradient-to-r from-gray-600 to-pink-600 sticky top-0 " >
                <div class="self-center	px-4 py-3">

                </div>
                <div class="self-center	px-20">
                    <h4 class="text-base leading-6 font-semibold text-white py-3">
                    {{cat.name}}
                </h4>
                </div>
                <div class="self-center	px-4 py-3">
                    <i :class="changeIcon" @click="showAdd = !showAdd" ></i>
                </div>
                
            </div>
                <div class="border-t border-gray-200 overflow-y-auto" style="max-height: 62vh; min-height: 5vh;">
                    <taskAdd v-if="showAdd"
                             @postAdd="postNewTask">
                    </taskAdd>
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
import task from './task.vue'
import taskAdd from './taskAdd'

export default {
    name: 'board',
    components: {
        task,
        taskAdd
    },
    props: ['tasks', 'cat'], 
    data () {
        return {
            showAdd: false,
            icon: 'fa fa-minus transform scale-100 hover:scale-125 text-white',
        }
    },
    methods: {
        postNewTask (title, des) {
            console.log(title, des, this.cat.id, 'from board')
            this.$emit('postNewTask', title, des, this.cat.id)
        }
    },
    computed: {
        changeIcon () {
            if (this.showAdd) {
                return 'fa fa-minus transform scale-100 hover:scale-125 text-white'
            } else {
                return 'fa fa-plus transform scale-100 hover:scale-125 text-white'
            }
        }
    }
}
</script>

<style>

</style>