const {Task, Category} = require('../models')
const createError = require('http-errors')
console.log('start in authorization.js');

class Authorization {
  static async task (req, res, next) {
    const id = +req.params.id
    try {
      const task = await Task.findOne({where: {id}}) // response null if use findByPk

      if (!task) {
        throw createError(404, 'task not found!')
      } else if (task.UserId !== req.loggedInUser.id) {
        throw createError(401, 'You are not authorized')
      } else {
        next()
      }
    } catch (error) {
      next(error)
    }
  }

  static async category (req, res, next) {
    const id = +req.params.id
    try {
      const category = await Category.findOne({where: {id}})

      if (!category) {
        throw createError(404, 'category not found!')
      } else if (category.UserId !== req.loggedInUser.id) { //! pending action
        throw createError(401, 'You are not authorized')
      } else {
        next()
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Authorization
console.log('end in authorization.js');