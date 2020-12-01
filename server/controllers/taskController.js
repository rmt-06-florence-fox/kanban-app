const {Task} = require('../models/index')

class TaskController {
   static async readAllTask(req,res){
      try {
         const tasks = await Task.findAll();
         res.status(200).json({data:tasks})
      } catch (error) {
         console.log(error)
      }
   }

   static async createTask(req,res){
      const payload={
         title:req.body.title,
         CategoryId:req.body.CategoryId,
         UserId:req.loggedIn.id
      }

      try {
         let task = await Task.create(payload,{returning:true})
         res.status(201).json({data:task})
      } catch (error) {
         console.log(error)
      }
   }

   static async deleteTask(req,res){
      const id = +req.params.id
      
      try {
         let deleted = await Task.destroy({where:{id},returning:true})   
         if(!deleted)
            throw{
               status:404,
               message:'Not Found'
            }
         else
            res.status(200).json({data:deleted,message:'resource deleted sucessfully'})
      } catch (error) {
         console.log(error)
      }
   }

   static async updateTask(req,res){
      const payload={
         title:req.body.title,
         CategoryId:req.body.categoryId,
         UserId:req.loggedIn.id
      }

      const id = +req.params.id

      try {
         let updated = await Task.update(payload,{where:{id:id},returning:true})
         console.log(updated)
         if(updated[0]===0)
            throw{
               status:404,
               message:'Not Found'
            }
         else
            res.status(200).json({data:updated})
      } catch (error) {
         console.log(error);
      }
   }

   
}

module.exports = TaskController