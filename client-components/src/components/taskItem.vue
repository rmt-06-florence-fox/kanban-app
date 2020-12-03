<template>
    <div v-if="categoryName.name == task.category" class="card bg-light mb-3 shadow">
        <div class="card-title">
            <div class="text-right">
                <i class="fa fa-pencil p-1 edit" aria-hidden="true"></i>
                <i @click= "destroying" class="fa fa-trash p-1 destroy" aria-hidden="true"></i>
            </div>
            <h6 class="ml-2">
                {{task.title}}
            </h6>
            <hr>
            <p class="ml-2 text-muted" style="font-size: small;" >Owner :</p>
            <p class="ml-2 text-muted" style="font-size: small;" >Created :{{task.createdAt.substr(0, 10)}}</p>
        </div>
    </div>
    

</template>

<script>
export default {
    name: "taskItem",
    props: ['categoryName', 'task'],
    methods:{
        destroying(){
            this.$emit('destroying', this.task.id)
        }
    }

}
</script>

<style>

</style>