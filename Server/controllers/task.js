const {Task} = require('../models/')

class TaskController{

  static async getAllTask(req, res, next){
    try {
      const tasks = await Task.findAll()
      res.status(200).json(tasks)

    } catch (err) {
      next(err)
    }
  }

  static async createTask(req, res, next){
    try {
      const {title, description, category, deadline} = req.body
      const UserId = req.userLoggedIn.id
      const task = await Task.create({
        title, description, category, deadline, UserId
      })
      res.status(201).json(task)
    } catch (err) {
      next(err)
    }
  }

  static async getTaskById(req, res, next){
    try {
      const {id} = req.params
      const task = await Task.findByPk(id)
      res.status(200).json(task)

    } catch (err) {
      next(err)
      
    }
  }

  static async editById(req, res, next){
    try {
      const {id} = req.params
      const {title, description, category, deadline} = req.body
      const task = await Task.update({
        title, description, category, deadline
      }, {
        where:{
          id
        }, returning: true
      })
      
      res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }

  static async editCategoryById(req, res, next){
    try {
      const {id} = req.params
      const {category} = req.body
      const task = await Task.update({category},{where:{id}, returning: true})
      
      console.log(task);
      res.status(200).json(task[1][0])
    } catch (err) {
      next(err)
    }
  }

  static async deleteTask(req, res, next){
    try {
      const {id} = req.params
      const task = Task.destroy({
        where: {
          id
        }
      })

      res.status(200).json("Task is deleted")

    } catch (err) {
      next(err)
    }
  }
  

}

module.exports = TaskController