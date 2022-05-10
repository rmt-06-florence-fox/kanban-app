const {Task} = require('../models')
const createError = require('http-errors')

class TaskController {
  static async create (req, res, next) {
    try {
      const {title, CategoryId} = req.body
      const UserId = req.loggedInUser.id
      const task = await Task.create({title, CategoryId, UserId})
      res.status(201).json({task})
    } catch (error) {
      next(error)
    }
  }

  static async show (req, res, next) {
    try {
      const task = await Task.findAll({
        attributes: ['id', 'title', 'CategoryId']
      })
      res.status(200).json(task)
    } catch (error) {
      next(error)
    }
  }

  static async move (req, res, next) {
    try {
      const id = +req.params.id
      const category = +req.body.CategoryId
      const moved = await Task.update({CategoryId: category}, {where: {id}, returning: true})

      if (moved[0] !== 1) throw createError (404, 'move category failed')
      else res.status(200).json({category: moved[1]})
    } catch (error) {
      next(error)
    }
  }

  static async edit (req, res, next) {
    try {
      const {title} = req.body
      const id = +req.params.id
      const task = await Task.update({title}, {where: {id}, returning: true})

      if (task[0] !== 1) throw createError (404, 'update title failed')
      else res.status(200).json({task: task[1]})
    } catch (error) {
      next(error)
    }
  }

  static async delete (req, res, next) {
    try {
      const id = +req.params.id
      const destroy = await Task.destroy({where: {id}, returning: true})

      if (destroy == 1) res.status(200).json({message: 'task success to delete'})
      else throw createError (404, 'delete task failed')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TaskController