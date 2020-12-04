const {Task} = require('../models/index')

class TaskController {
   static async readAllTask(req,res){
      try {
         const tasks = await Task.findAll();
         res.status(200).json({data:tasks})
      } catch (error) {
         res.status(500).json({message:'Server Error'})
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
         if(error.status){
            res.status(error.status).json({message:error.message})
         }else if(error.name ==='SequelizeValidationError'){
            res.status(400).json({message:error.errors[0].message})
         }else{
            res.status(500).json({message:'Server Error'})
         } 
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
         if(error.status){
            res.status(error.status).json({message:error.message})
         }else if(error.name ==='SequelizeValidationError'){
            res.status(400).json({message:error.errors[0].message})
         }else{
            res.status(500).json({message:'Server Error'})
         } 
      }
   }

   static async updateTask(req,res){
      const payload={
         title:req.body.title,
         CategoryId:req.body.CategoryId,
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
         if(error.status){
            res.status(error.status).json({message:error.message})
         }else if(error.name ==='SequelizeValidationError'){
            res.status(400).json({message:error.errors[0].message})
         }else{
            res.status(500).json({message:'Server Error'})
         } 
      }
   }

   
}

module.exports = TaskController