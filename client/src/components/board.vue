<template>
    <div 
        class="flex-none  mb-4 max-w-xs bg-white shadow overflow-hidden sm:rounded-lg rounded shadow-md hover:shadow-2xl hover:bg-gray-50 lg:mb-0 " >
            <div class="flex justify-between bg-gradient-to-r from-gray-600 to-pink-600 sticky top-0 " >
                <div  class="self-center place-items-center w-8 py-3 text-right" >
                        <i class="fa fa-trash transform scale-100 text-white hover:scale-125 " v-if="onEdit == false" @click="deleteCat"></i>
                </div>
                <div   class="self-center " style="min-width:15vw;">
                    <h4 class="text-base leading-6 font-semibold text-white text-center py-3" v-if="onEdit == false" @click="onEdit = true">
                    {{cat.name}} 
                    </h4>
                    <div v-if="onEdit" v-on-clickaway="closeEdit" class="flex flex-row space-x-1">
                        <div>
                        <form @submit.prevent="editBoardName" id="catEdit">
                        <input id="title" name="title" type="text" required class="appearance-none rounded-none block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md 
                        my-1.5
                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        v-model="catName" >
                        </form>
                        </div>
                        <div>
                        <button type="submit" class="group relative w-full my-1.5 flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    form="catEdit">
                                    Submit
                                    </button>
                        </div>
                    </div>
                </div>
                <div  class="self-center place-items-center w-8 py-3">
                    <i :class="changeIcon" @click="showAdd = !showAdd"  v-if="onEdit == false"></i>
                </div>
                
            </div>
                <div class="border-t border-gray-200 overflow-y-auto" style="max-height: 62vh; min-height: 5vh;" >
                    <taskAdd v-if="showAdd"
                             @postAdd="postNewTask"
                             v-on-clickaway="closeAdd">
                    </taskAdd>
                    <draggable :list="tasks" group="taskgroup" @change="updateCat">
                    <task   v-for="task in tasks" 
                            :key="task.id"
                            :task='task'
                            :optionInfo="{li:optionInfo.li, fi:optionInfo.fi, ci:cat.id}"
                            @catDownTask="catDownBoard"
                            @deleteThisTask="deleteThisBoard"
                            @editThisTask="editThisBoard"
                            @catUpTask="catUpBoard">
                    </task>
                    </draggable>
                </div>
            <!-- <task   :tasks="tasks"
                    :categories="categories">
            </task> -->
    </div>
</template>

<script>
import task from './task.vue'
import taskAdd from './taskAdd'
import { directive as onClickaway } from 'vue-clickaway';
import draggable from 'vuedraggable'

export default {
    name: 'board',
    components: {
        task,
        taskAdd,
        draggable
    },
    props: ['tasks', 'cat', 'optionInfo'],
    directives: {
    onClickaway: onClickaway,
    }, 
    data () {
        return {
            showAdd: false,
            icon: 'fa fa-minus transform scale-100 hover:scale-125 text-white',
            onEdit: false,
            catName: ''
        }
    },
    methods: {
        postNewTask (title, des) {
            console.log(title, des, this.cat.id, 'from board')
            this.$emit('postNewTask', title, des, this.cat.id)
        },
        catDownBoard (taskId) {
            this.$emit('catDownBoard', taskId, (+this.cat.id)-1)
            console.log(taskId, this.cat.id, (+this.cat.id)-1, 'dari board catDownBoard')
        },
        deleteThisBoard (taskId) {
            this.$emit('deleteThisBoard', taskId, this.cat.id)
            console.log(taskId, this.cat.id, (+this.cat.id), 'dari board deleteThisBoard')
        },
        editThisBoard (task) {
            this.$emit('editThisBoard', task, this.cat.id)
            console.log(task, this.cat.id, (+this.cat.id), 'dari board editThisBoard')
        },
        catUpBoard (taskId) {
            this.$emit('catUpBoard', taskId, (+this.cat.id)+1)
            console.log(taskId, this.cat.id, (+this.cat.id)+1, 'dari board catUpBoard')
        },
        closeEdit() {
            this.onEdit = false
            this.catName = this.cat.name
        },
        editBoardName () {
            console.log(this.catName, this.cat.id)
            this.$emit('editBoardName', this.catName, this.cat.id)
        },
        updateCat(evt) {
            console.log(evt.added.element.id, evt.added.element.title, this.cat.id,)
            this.$emit('updateCat', evt.added.element.id, this.cat.id)
        },
        closeAdd(){
            this.showAdd = false
        },
        deleteCat() {
            this.$emit('deleteCat', this.cat.id)
        }

    },
    mounted: function() {
        this.catName = this.cat.name
    },
    computed: {
        changeIcon () {
            if (this.showAdd) {
                return 'fa fa-minus transform scale-100 hover:scale-125 text-white'
            } else {
                return 'fa fa-plus transform scale-100 hover:scale-125 text-white'
            }
        },
        // checkIndex () {
        //     let data = this.optionInfo
        //     data.ci = this.cat.id
        //     return data
        // }
    }
}
</script>

<style>

</style>