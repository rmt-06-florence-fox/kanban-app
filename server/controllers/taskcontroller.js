const { Task } = require('../models')

class TaskController {
  static async getTask(req, res, next) {
    try {
      const data = await Task.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TaskController