<template>
  <div class="container">
    <div class="card mt-3 shadow w-100">
      <div class="card-header bg-dark">
   <h2 class="text-center my-5 text-white "> Todo App </h2>
      </div>
  <div class="card-body">
    <div class="row justify-content-center" >
      <div class="col-md-8 col-lg-6 col-sm-12" >
        <div class="d-flex">
     <input  v-model="task" type="text" placeholder="Enter Todo" class="form-control my-3">
     <button @click="AddTodo" class="btn btn-success rounded my-3">ADD TODO </button>
   </div>
  
 <ul class="task-item p-0">

   <li
   class="task-list-item d-flex"
   v-for="(task,index) in tasks" 
   :key="index" 
   v-on:dblclick="Highlight(index)"
   :class="{highlighted: task.isHighlighted}"
   >

       <span >{{task.title}}</span>

       <span @click="CloseTask(index)">
             <span class="fa fa-close"></span>
       </span>
   </li>
 </ul>
      </div>
    </div>
    </div>
    </div>
  </div>

</template>

<script>

export default {

  data() {
    return {
      task:'',
      tasks: [
        {
        title: "vue-todo is a todo web app where users can type in their todo and also set a reminder.",
        isHighlighted : false,
        },
        {     
          title: "https://vuejsexamples.com/",
         
          isHighlighted : false,
        },
      ],
    };
  },
  methods: {
    AddTodo() {

      this.tasks.push({
        title: this.task,
        
      });
      this.task = '';
    },
    CloseTask(index) {
      this.tasks.splice(index, 1);
    },
   Highlight: function(index){
      this.tasks[index].isHighlighted=!this.tasks[index].isHighlighted

   }
  },
};
</script>
<style scoped>
.form-control:focus {
  border-color: #ced4da !important;
  box-shadow: none;
}
.task-list-item {
 border: 1px solid #ced4da;
 align-items: center;
 justify-content: space-between;
padding: 20px;
margin-bottom: 10px;
list-style-type: none;
color: white;
}
.card-body{
  background-color: rgb(7, 31, 7);
}
.btn-success{
  margin-left:5px ;
}
.highlighted{
  border: rgb(255, 238, 0) solid 3px;
}
</style>
