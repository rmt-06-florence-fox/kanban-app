<template>
    <div>
        <login      v-if=" showPage == 'pg-login' "
                    @goTo="goTo" >
        </login>
        <register   v-if=" showPage == 'pg-register' "
                    @goTo="goTo">
        </register>
        <homepage   v-if=" showPage == 'pg-homepage' "
                    @getData="getTaskList"
                    :organization="organization" 
                    :categories="categories"
                    @createNewTask="postTask">
        </homepage>
        
    </div>
</template>

<script>
// import login from './components/login'
import login from './components/login.vue'
import register from './components/register.vue'
import homepage from './components/homepage.vue'
import axios from 'axios';

export default {
    name: 'App',
    data () {
        return {
            showPage: 'pg-login',
            organization: '',
            categories: []
        }
    },
    components: {
        login,
        register,
        homepage
    },
    methods: {
        goTo (page) {
            this.showPage = page
        },        
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

                this.organization = {
                    id: res.data.id,
                    name: res.data.name
                }
                res.data.Categories.forEach(el => {
                    this.categories.push(el)
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
        },
        postTask(title, des, catId, orgId) {
            axios({
                method: 'post',
                url: 'http://localhost:3000/task',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title: title,
                    description: des,
                    CategoryId: catId,
                    OrganizationId: orgId
                }
                })
                .then((res) => {
                // handle success
                    console.log(res)
                    this.categories = []
                    this.getTaskList()
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
        if (localStorage.getItem('access_token')) {
            this.showPage = 'pg-homepage'
        } else {
            this.showPage = 'pg-login'
        }
    }
}
</script>

<style>

</style>