<template>
   
                <div class="cursor-pointer mb-5" @click="chooseThis">
                    <div class="inset-0 opacity-25 rounded-lg shadow-2xl"></div>
                    <div class=" inset-0 transform hover:-translate-y-6 transition duration-300">
                    <div class="h-full w-full  text-white bg-gradient-to-r from-green-600 to-indigo-600 rounded-lg shadow-2xl text-center flex place-content-center items-center font-bold
                                py-3 px-4">{{org.name}}</div>
                    </div>
                </div>
    
</template>

<script>
export default {
    name:'registerOrgData',
    props: ['org'],
    methods: {
        chooseThis() {
            this.$emit('chooseOrg', this.org.id)
        }
    }
}
</script>

<style>

</style>