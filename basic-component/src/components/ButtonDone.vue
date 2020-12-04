<template>
    <button class="btn-done" style="font-size: 15px; border-radius: 15px; border: none; outline: none;">✓</button>
</template>

<script>
export default {
    name: "ButtonDone",
    props: [ 'fetch' ],
    created(){
        this.fetch
    }
}
</script>

<style>

</style>