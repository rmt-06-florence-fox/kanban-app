<template>
    <div class="p-3 my-2 max-w-sm mx-2 bg-gray-400 shadow-md flex items-center space-x-4 hover:shadow-lg hover:bg-green-300">
        <!-- <form class="mt-8 space-y-6" @submit.prevent="login()">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"
                v-model="loginForm.email" >
                </div>
                <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
                v-model="loginForm.password" >
                </div>
            </div>

            <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Sign in
                </button>
            </div>
        </form> -->
        <form @submit.prevent="postAdd" class="w-full space-y-1 text-sm">
            <input placeholder="Title"
                        class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title" type="text"
                        v-model="title">
            <textarea placeholder="Description"
                        class="resize-y w-full shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        v-model="description"></textarea>
            <button type="submit" 
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Add New Task
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'taskAdd',
    data () {
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        postAdd () {
            this.$emit('postAdd', this.title, this.description)
        }
    }
}
</script>

<style>

</style>