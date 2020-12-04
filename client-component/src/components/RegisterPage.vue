<template>
      <div id="register-page" class="row">
        <div class="col-md-8">
          <div id="demo" class="carousel slide" data-ride="carousel">
  
            <!-- Indicators -->
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://cdn.dribbble.com/users/3014280/screenshots/6043082/kanban-2.jpg" alt="Los Angeles" width="1200px" height="920px">
              </div>
              <div class="carousel-item">
                <img src="https://www.elpando.com/img_solutions/project_management_system/pic7.jpg" alt="Chicago" width="1200px" height="920px">
              </div>
              <div class="carousel-item">
                <img src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/497_449074_management.hero.jpg" alt="New York" width="1200px" height="920px">
              </div>
            </div>
            
            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
          
          <!-- <img src="https://cdn.dribbble.com/users/3014280/screenshots/6043082/kanban-2.jpg" style="width: 100%;"> -->
        </div>
        <div class="col-md-4">
          <div v-if="errors && typeof(errors) !== 'string'">
              <div class="alert alert-danger mt-2 ml-4 alert-dismissible fade show" role="alert" v-for="(error, index) in errors" :key="index">
                <strong>Error!</strong> {{error}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
          </div>
          <div v-else-if="errors && typeof(errors) == 'string'">
            <div class="alert alert-danger mt-2 ml-4 alert-dismissible fade show" role="alert">
                <strong>Error!</strong> {{errors}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
          </div>
          <div class="text-center mt-5">
            <img src="../../assets/0b1424c1-f11c-46f7-a9c9-6bd21211dc5e_200x200.png" style="width: auto;" class="mx-auto">
            <h3 style="font-family: 'Russo One', sans-serif; color: #5ec0ca; font-size: xx-large;">Register</h3>
           </div><br>
              <form id="submit-register-form" class="mr-5 ml-5">
                <div class="text-center">
                  <span>Already have an account?<a href="#" @click="$emit('emitChangePage', 'LoginPage')"> Login here</a></span>
                </div><br>
                <div class="form-group">
                  <input type="email" class="form-control" id="email-register" placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="pwd-register" placeholder="Enter password" v-model="password">
                </div>
                <button type="submit" class="btn btn-info" @click="$emit('emitRegister', email, password)">Register</button>
              </form>
        </div>
      </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: null,
      password: null
    };
  },
  props: ['errors'],
  components : {
    
  }
};
</script>

<style scoped>
</style>
