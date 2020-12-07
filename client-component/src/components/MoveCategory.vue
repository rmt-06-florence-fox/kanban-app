<template>
    <div class="modal-dialog modal-dialog-centered">
        <p :categoryId="category">{{categoryId.id}}</p>
        
    </div>
</template>

<script>
export default {
    name: "MoveCategory",
    props: ["category"]
}
</script>

<style>

</style>