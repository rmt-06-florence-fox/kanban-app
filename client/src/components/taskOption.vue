<template>
    <div class="flex items-center justify-between mt-2 pt-1">

        <div>
            <i v-if="optionInfo.ci != optionInfo.fi" class="fa fa-arrow-circle-left transform scale-100 hover:scale-125 " @click="catDown"></i>
        </div>

        <div class="flex space-x-4">
            <i class="fa fa-trash transform scale-100 hover:scale-125 " @click="deleteThis"></i>
            <i class="fa fa-wrench transform scale-100 hover:scale-125 " @click="editThis"></i>
        </div>

        <div>
            <i v-if="optionInfo.li != optionInfo.ci" class="fa fa-arrow-circle-right transform scale-100 hover:scale-125 " @click="catUp"></i>
        </div>


    </div>
</template>

<script>
export default {
    name:'taskOption',
    props: ['optionInfo'],
    methods: {
        catDown () {
            this.$emit('catDown')
        },
        deleteThis () {
            this.$emit('deleteThis')
        },
        editThis () {
            this.$emit('editThis')
        },
        catUp () {
            this.$emit('catUp')
        },
    }
}
</script>

<style>

</style>