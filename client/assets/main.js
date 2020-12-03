var app = new Vue({
   el:'#app',
   data:{
      message:'Hello',
      currpage:'landingPage',
      seen:true,
      registerEmail:"",
      registerPassword:"",
      loginEmail:"",
      loginPassword:"",
      baseUrl:"http://localhost:3000",
      categories:[],
      addTitle:"",
      addCategories:"",
   },
   methods:{
      async register(){
        const data = {
           email:this.registerEmail,
           password:this.registerPassword
        }
        try {
           const response = await axios({
              url:this.baseUrl+'/register',
              method:'POST',
              data
           })
           this.registerEmail=""
           this.registerPassword=""
           this.currpage="loginPage"
        }catch (error) {
           console.log(error)
        }
      },
      async login(){
         const data = {
            email:this.loginEmail,
            password:this.loginPassword
         }

         try {
            const response = await axios({
               url:this.baseUrl+'/login',
               method:'POST',
               data
            })
            localStorage.setItem('access_token',response.data.access_token)
            console.log(response)
            this.loginPassword=""
            this.loginEmail=""
            this.loadHomePage()
         }catch (error) {
            console.log(error)
         }

      },
      async fetchTask(){
         try {
            const response = await axios({
               url:this.baseUrl+'/tasks',
               method:'GET',
               headers:{
                  access_token:localStorage.getItem('access_token')
               }
            })
         } catch (error) {
            console.log(error)
         }
      },
      async deleteTask(id){
         try {
            const response = await axios({
               url:this.baseUrl+`/${id}`,
               method:'DELETE',
               headers:{
                  access_token:localStorage.getItem('access_token')
               }
            })
            this.loadLandingPage();
         } catch (error) {
            console.log(error)
         }
      },
      async addTask(){
         const data = {
            title:this.addTitle,
            CategoryId:this.addCategories
         }

         try {
            const response = axios({
               url:this.baseUrl+'/tasks',
               method:"POST",
               headers:{
                  access_token:localStorage.getItem('access_token')
               },
               data
            })

            this.loadHomePage()
         } catch (error) {
            console.log(error)
         }
      },
      async fetchCategories(){
         try {
            const response = await axios({
               url:this.baseUrl+'/categories',
               method:'GET',
               headers:{
                  access_token:localStorage.getItem('access_token')
               }
            })
            console.log(response)
            this.categories = response.data.data
         } catch (error) {
            console.log(error.response.data.message)
         }
      },
      loadHomePage(){
         this.currpage = 'homePage';
         localStorage.setItem('recentPage',this.currpage)
         this.fetchTask()
      },
      loadLandingPage(){
         this.currpage = 'landingPage'
         localStorage.setItem('recentPage',this.currpage)
      },
      loadLoginPage(){
         this.currpage = 'loginPage'
         localStorage.setItem('recentPage',this.currpage)
      },
      loadRegisterPage(){
         this.currpage = 'registerPage'
         localStorage.setItem('recentPage',this.currpage)
      },
      loadAddTaskPage(){
         this.currpage = 'addPage'
         localStorage.setItem('recentPage',this.currpage)
      }
   },
   created(){
      const access_token = localStorage.getItem('access_token')
      if(access_token){
         this.currpage = localStorage.getItem('recentPage')
         this.fetchCategories();
      }else{
         this.loadLandingPage();
      }
   }
})