<template>
    <div 
        class="p-3 my-2 max-w-sm mx-2 bg-white shadow-md flex items-center space-x-4 hover:shadow-lg hover:bg-green-300">
            <div class="grid-cols-1 divide-y divide-pink-300 w-full">
                <div class="max-h-28 mb-4 overflow-ellipsis overflow-hidden">
                    <h4 class="text-base font-medium text-black">
                        {{task.title}}
                    </h4>
                    <p class="text-gray-500 text-sm  ">
                        {{task.description}}
                    </p>
                </div>
                <div>
                    <small>Assignee: {{task.User.username}}</small>
                </div>
                <div class="flex items-center justify-between mt-2 pt-1">

                    <div>
                        <i class="fa fa-arrow-circle-left transform scale-100 hover:scale-125 "></i>
                    </div>

                    <div class="flex space-x-4">
                        <i class="fa fa-trash transform scale-100 hover:scale-125 "></i>
                        <i class="fa fa-wrench transform scale-100 hover:scale-125 "></i>
                    </div>

                    <div>
                        <i class="fa fa-arrow-circle-right transform scale-100 hover:scale-125 "></i>
                    </div>

                </div>
            </div>

    </div>
</template>

<script>
export default {
    name: 'task',
    props: [],

}
</script>

<style>

</style>