const { Task, User } = require('../models')

class TaskController {
  static async getTask(req, res, next) {
    try {
      const data = await Task.findAll({ include: [User] })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async createTask(req, res, next) {
    try {
      const newData = {
        title: req.body.title,
        category: req.body.category,
        UserId: req.signedInUser.id
      }
      console.log(newData)
      const dataTask = await Task.create(newData)
      res.status(201).json(dataTask)
    } catch (error) {
      next(error)
    }
  }

  static async editTask(req, res, next) {
    try {
      const findId = req.params.id
      const editData = {
        title: req.body.title
      }
      const editedData = await Task.update(editData, { where: { id: findId }, returning: true })
      res.status(200).json(editedData[1][0])
    } catch (error) {
      next(error)
    }
  }

  static async deleteTask(req, res, next) {
    try {
      const findId = req.params.id
      await Task.destroy({ where: { id: findId }})
      res.status(200).json({ message: 'Task deleted' })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TaskController