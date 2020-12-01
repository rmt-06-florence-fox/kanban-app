const {Task} = require('../models/index')

class TaskController {
   static getAllTask(req,res){
      try {
         const tasks = Task.findAll();
         res.status(200).json({data:tasks})
      } catch (error) {
         console.log(error)
      }
   }

   
}

module.exports = TaskController