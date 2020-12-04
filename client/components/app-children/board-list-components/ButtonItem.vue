<template>
    <div class="card-footer">
        <div v-if="task.category === 'Back Log'" class="d-flex justify-content-end">
            <i class="material-icons" style="font-size:100%px" v-for="btn in btnBackLog" :key="btn.id"> {{btn}} </i>
        </div>
        <div v-if="task.category === 'To Do'" class="d-flex justify-content-end">
            <i class="material-icons" style="font-size:100%px" v-for="btn in btnToDo" :key="btn.id"> {{btn}} </i>
        </div>
        <div v-if="task.category === 'Doing'" class="d-flex justify-content-end">
            <i class="material-icons" style="font-size:100%px" v-for="btn in btnDoing" :key="btn.id"> {{btn}} </i>
        </div>
        <div v-if="task.category === 'Done'" class="d-flex justify-content-end">
            <i class="material-icons" style="font-size:100%px" v-for="btn in btnDone" :key="btn.id"> {{btn}} </i>
        </div>      
    </div>
</template>

<script>
export default {
    name : "Buttonitem",
    data () {
        return {
            btnBackLog : ["arrow_forward", "edit","delete_forever"],
            btnToDo : ["arrow_back","arrow_forward", "edit","delete_forever"],
            btnDoing : ["arrow_back" ,"arrow_forward", "edit","delete_forever"],
            btnDone : ["arrow_back" ,"edit","delete_forever"]
        }
    },
    props : ['task']
}
</script>

<style>

</style>