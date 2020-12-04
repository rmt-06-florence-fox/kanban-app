<template>
    <!--------------------------------------------------------------------- register page --------------------------------------------------------------------->
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" 
        >
        <div class="max-w-md w-full space-y-8">
            <div>
            <div class="text-5xl font-extrabold mx-auto text-center select-none">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Kanbund
                </span>
                <div class="text-sm text-center	text-blue-700 text-opacity-75 mt-2 mb-2">
                    Mulai aktif ya Bund!
                </div>
            </div>
            <h2 class="mt-6 text-center text-2xl font-bold text-gray-900">
                JOIN ORGANIZATION
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Please choose your Organization
            </p>
            </div>
            <div class="flex flex-wrap items-center place-content-center space-x-2">
                <registerOrgData v-for="org in orgData"
                            :key="org.id"
                            :org="org"
                            @chooseOrg="chooseOrg">
                </registerOrgData>
                
                <div class="cursor-pointer mb-5">
                    <div class="inset-0 opacity-25 rounded-lg shadow-2xl"></div>
                    <div class=" inset-0 transform hover:-translate-y-6 transition duration-300">
                    <div class="h-full w-full text-white bg-gray-900 rounded-lg shadow-2xl text-center flex place-content-center items-center font-bold
                                py-3 px-4">Create New One</div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</template>

<script>
import registerOrgData from './register-orgData'

export default {
    name: 'registerOrg',
    props: ['orgData'],
    components: {
        registerOrgData
    },
    methods: {
        chooseOrg(orgId) {
            console.log(orgId)
            this.$emit('chooseOrg', orgId)
        }
    },
    created: function () {
        console.log('register-org created')
        this.$emit('getOrgData')
    }
    
}
</script>

<style>

</style>