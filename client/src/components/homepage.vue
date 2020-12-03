<template>
  <!------------------------------------------------------------------ Main Board Option 2 ------------------------------------------------------------------>
<div class="overflow-x-auto max min-h-screen bg-fixed lg:max-h-screen" id="page-main">
    <nav class="bg-gray-800 sticky top-0 left-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="text-2xl font-extrabold select-none">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Kanbund
                </span>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">Dashboard</a>
  
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
  
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
  
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
  
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Reports</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: bell -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
  
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </button>
                </div>
                <!--
                  Profile dropdown panel, show/hide based on dropdown state.
  
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
  
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log out</a>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <!--
                Heroicon name: menu
  
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
                Heroicon name: x
  
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!--
        Mobile menu, toggle classes based on menu state.
  
        Open: "block", closed: "hidden"
      -->
      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Dashboard</a>
  
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
  
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
  
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
  
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: bell -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>
  
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
  
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  
    <header class="bg-white shadow sticky left-0">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl font-bold leading-tight text-gray-900">
          {{organization}}'s Kanban Board
        </h1>
      </div>
    </header>
    <main class="pt-8">
    <!-- <main style="min-height: 81vh;" class="overflow-x-auto"> -->
        <div class="flex flex-row flex-nowrap gap-x-8 items-start px-8 w-max" id="main-content">

            <div v-for="cat in categories " :key="cat.id"
            class="flex-none  mb-4 max-w-xs bg-white shadow overflow-hidden sm:rounded-lg rounded shadow-md hover:shadow-2xl hover:bg-gray-50 lg:mb-0 " >
                <div class="bg-gradient-to-r from-gray-600 to-pink-600 sticky top-0 relative " style="min-width: 24vw;">
                    <h4 class="text-base leading-6 font-semibold text-white text-center py-3 px-24">
                        {{cat.name}}
                    </h4>
                    <i class="fa fa-plus absolute top-4 right-12 transform scale-100 hover:scale-125 text-white"></i>
                </div>
                <div class="border-t border-gray-200 overflow-y-auto" style="max-height: 62vh; min-height: 5vh;">
                    <div v-for="task in cat.Tasks" :key="task.id"
                    class="p-3 my-2 max-w-sm mx-2 bg-white shadow-md flex items-center space-x-4 hover:shadow-lg hover:bg-green-300">
                        <div class="grid-cols-1 divide-y divide-pink-300 w-full">
                            <div class="max-h-28 mb-4 overflow-ellipsis overflow-hidden"
                            >
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

                </div>
            </div>

        </div>
        
    </main>
    
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'homepage',
    data () {
        return {
            tasks: [],
            organization: '',
            categories: []
        }
    },
    methods: {
        getTaskList () {
            
            axios({
              method: 'get',
              url: 'http://localhost:3000/task',
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
            .then((res) => {
              // handle success
              console.log(res.data.Categories[0])

              this.organization = res.data.name
              res.data.Categories.forEach(el => {
                  this.categories.push(el)
              })
              res.data.Categories.Tasks.forEach(el => {
                  this.tasks.push(el)
              })

              // console.log(res.data[0].Organization.Categories)
              // res.data[0].Organization.Categories.forEach( el => {
              //   this.categories[el.id] = [el.id, el.name]
              // })
              // this.tasks = res.data
            })
            .catch((error) => {
              // handle error
              console.log(error);
            })
            .then(_=> {
              // always executed
            });
        }
    },
    created: function () {
        this.getTaskList ()
    }
}
</script>

<style>

</style>