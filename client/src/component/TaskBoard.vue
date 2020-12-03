<template>
    <div class="col-sm">
        <div class="p-3 bg-primary text-black">
            <TaskCard
            
            ></TaskCard>

            <EditTask v-if="editedIdTask == ''" 
            
            ></EditTask>
        </div>
    </div>
</template>

<script>

import TaskCard from "./TaskCard"
import EditTask from "./EditTask"

export default {
    name : "TaskBoard",
    data(){
        return {
            editedIdTask : 2,

        }
    },
    props : ['doingtask','backlogtask','todotask','donetask'],
    components : {
      TaskCard,
      EditTask
    } 
}
</script>

<style>

</style>