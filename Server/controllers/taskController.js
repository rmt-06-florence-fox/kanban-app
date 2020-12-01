const { Task } = require('../models')

class TaskController{
  static async createTask(req, res, next){
    try{
      const payload = {
        title: req.body.title,
        category: req.body.category,
        UserId: req.loginUser.id
      }
      const result = await Task.create(payload)
      res.status(201).json(result)
    }catch(err){
      if(err.name === 'SequelizeValidationError'){
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      }else next(err)
    }
  }
  static async getAllTask(req, res, next){
    try{
      const data = await Task.findAll()
      res.status(200).json(data)
    }catch(err){
      next(err)
    }
  }
  static async findTask(req, res, next){
    try{
      const data = await Task.findOne({
        where:{
          id: req.params.id,
          UserId: req.loginUser.id
        }
      })
      res.status(200).json(data)
    }catch(err){
      next(err)
    }
  }
  static async replaceTask(req, res, next){
    try{
      const payload = {
        title: req.body.title,
        category: req.body.category
      }
      const result = await Task.update(payload, {
        where: { 
          id: req.params.id,
          UserId: req.loginUser.id 
        },
        returning: true 
      })
      res.status(200).json(result[1])
    }catch(err){
      if(err.name === 'SequelizeValidationError'){
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      }else next(err)
    }
  }
  static async modifyTask(req, res, next){
    try{
      const payload = { category: req.body.category }
      const result = await Task.update(payload, {
        where: { 
          id: req.params.id,
          UserId: req.loginUser.id 
        },
        returning: true  
      })
      res.status(200).json(result[1])
    }catch(err){
      if(err.name === 'SequelizeValidationError'){
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      }else next(err)
    }
  }
  static async deleteTask(req, res, next){
    try{
      const result = await Task.destroy({
        where: {
          id: req.params.id,
          UserId: req.loginUser.id
        }
      })
      res.status(200).json({ message: `Successfully deleted this task !`})
    }catch(err){
      next(err)
    }
  }
}

module.exports = TaskController