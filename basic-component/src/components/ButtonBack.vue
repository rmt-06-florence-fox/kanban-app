<template>
    <button @click="back" class="btn-back" style="font-size: 15px; border-radius: 15px; border: none; outline: none;"><</button>
</template>

<script>
export default {
    name: 'ButtonBack',
    props: [ 'fetch' ],
    methods: {
        back(){
            this.$emit("PleaseEditCategory")
        }
    },
    created(){
        this.fetch
    }
}
</script>

<style>

</style>