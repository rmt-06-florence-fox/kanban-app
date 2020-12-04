<template>
  <div id="card" class="card m-2 shadow-sm">
    <div class="card-body p-0 text-left">
      <h6 class="card-title p-2 m-0">{{task.title}}</h6>
      <p class="card-text p-1 m-1">
        Decription: 
        <br>{{task.description}}
      </p>
      <div class="card-header text-left p-0">
        <p class="p-1 m-0">{{task.User.name}}  <small class="text-muted font-italic">- {{task.User.Department.name}}</small></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TaskCard",
  props:["task"],
};
</script>

<style>
p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
#category-footer {
  top: 45px;
  z-index: 5;
}
#card:hover{
  zoom: 105%;
}
</style>