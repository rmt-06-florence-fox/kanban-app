<template>
<div>
    <div class="card border-success mb-3 shadow " style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success ">{{Task.todo}}</div>
            <div class="card-body text-success">
                <h5 class="card-title">creator: {{Task.name}}</h5>
                <p class="card-text">{{Task.description}}</p>
            </div>
        <div class="card-footer bg-transparent border-success">
            <ButtonBack v-if="Category !== 'Back-Log'"></ButtonBack>
            <ButtonDone v-if="Category !== 'Done'"></ButtonDone>
           <button class="btn-delete" style="font-size: 15px; border-radius: 15px; border: none; outline: none;">x</button>
        </div>
    </div>
</div>
    
</template>

<script>
import ButtonBack from "./ButtonBack"
import ButtonDone from "./ButtonDone"


export default {
    name: "TaskCard",
    props: [ 'Task', 'Category' ],
    components: {
        ButtonBack,
        ButtonDone
    }
}
</script>

<style>

</style>