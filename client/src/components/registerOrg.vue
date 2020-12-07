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
                ADD ORGANIZATION
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                You can Add 4 up to 8 Boards to your Organization
            </p>
            </div>
            <div class="flex flex-wrap items-center place-content-center space-x-2">

                <form class="mt-8 space-y-6" @submit.prevent="addOrg">
                    <!-- <input type="hidden" name="remember" value="true"> -->
                    <div class="rounded-md shadow-sm -space-y-px">
                        <h4 class="font-bold pb-3">Add your Organization Name here:</h4>
                        <div>
                        <label for="email-address" class="sr-only">Organization Name</label>
                        <input id="email-address" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Organization Name"
                        v-model="organization" >
                        </div>
                    </div>
                    
                        <h4 class="font-bold">Add your Boards here:</h4>
                    <div class="rounded-md shadow-sm -space-y-px grid grid-cols-2 gap-1">
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tl-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 1"
                        v-model="board1" >
                        </div>
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tr-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 2"
                        v-model="board2" >
                        </div>
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 3"
                        v-model="board3" >                        </div>
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 4"
                        v-model="board4" >
                        </div>
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 5"
                        v-model="board5" >
                        </div>
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 6"
                        v-model="board6" >
                        </div>
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-bl-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 7"
                        v-model="board7" >
                        </div>
                        <div>
                        <label for="email-address" class="sr-only">Boards Name</label>
                        <input id="email-address" type="text" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-br-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Board 8"
                        v-model="board8" >
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Add Organization
                        </button>
                        <!-- <errorBox v-if="errorData"
                                    :errorData="errorData"
                                    @setTime="setTime"
                        ></errorBox> -->
                    </div>
                </form>
                
            </div>
        </div>
        <div class="absolute top-10 right-16">
        <button class="transform  bg-gray-800 py-2 px-5 text-white font-bold rounded-md hover:shadow-lg hover:translate-y-1 transition duration-200"
            @click="cancelSelect">
            Cancel
        </button>
        <button class="transform  bg-red-500 py-2 px-5 text-white font-bold rounded-md hover:shadow-lg hover:translate-y-1 transition duration-200"
                @click="logout">
            Log Out
        </button>
        </div >

    </div>
</template>

<script>
export default {
    name:'registerOrgAdd',
    data() {
        return {
            organization: '',
            board1: '',
            board2: '',
            board3: '',
            board4: '',
            board5: '',
            board6: '' ,
            board7: '',
            board8: ''
        }
    },
    methods: {
        addOrg () {
            const data = {
                name: this.organization,
                board: []
            }
            if (this.board1) {
                data.board.push({name: this.board1})
            }
            if (this.board2) {
                data.board.push({name: this.board2})
            }
            if (this.board3) {
                data.board.push({name: this.board3})
            }
            if (this.board4) {
                data.board.push({name: this.board4})
            }
            if (this.board5) {
                data.board.push({name: this.board5})
            }
            if (this.board6) {
                data.board.push({name: this.board6})
            }
            if (this.board7) {
                data.board.push({name: this.board7})
            }
            if (this.board8) {
                data.board.push({name: this.board8})
            }
            // console.log(data)
            this.$emit('addNewOrg', data)
        },
        cancelSelect() {
            this.$emit('cancelSelect')
        },
        logout(){
            this.$emit('logout')
        }
    }

}
</script>

<style>

</style>