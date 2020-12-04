<template>
   <section class="container"> 
        <div class="row mt-4">
            <TaskCard>
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            </TaskCard>
        </div>
    </section>
</template>

<script>
import TaskCard from "./TaskCard"

export default {
    name: "TaskList",
    props: ['tasks'],
    components: {
        TaskCard
    }
}
</script>

<style>

</style>