<template>
    <button class="material-icons" @click="getEventListener">
        {{btnName}}
    </button>
</template>

<script>
export default {
    name : "ButtonItem",
    methods : {
       getEventListener(){
            //console.log('masuk button masss', this.btnName)
            if(this.btnName === "arrow_forward") this.$emit('changeStatus', true)
            else if (this.btnName === "arrow_back") this.$emit('changeStatus', false)
            else if (this.btnName === "edit") this.$emit('showEdit')
            else if (this.btnName === "delete_forever") this.$emit('delete')
        }
    },

    props : ['btnName']
}
</script>

<style>

</style>