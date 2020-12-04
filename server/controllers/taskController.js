const { User, Task } = require('../models')

class taskController {
  static async addTask (req, res, next) {
    try {
      const obj = {
        title: req.body.title,
        category: req.body.category,
        UserId: req.loggedUser.id
      }
      const output = await Task.create(obj)
      res.status(201).json(output)
    }
    catch(err) {
      if(err.name === 'SequelizeValidationError') {
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      } else {
        next(err)
      }
    }
  }

  static async listAll (req, res, next) {
    try {
      const data = await Task.findAll({
        include: [ User ]
      })
      res.status(200).json(data)
    }
    catch(err) {
      next(err)
    }
  }

  static async find (req, res, next) {
    try {
      const data = await Task.findOne({
        where: {
          id: req.params.id,
          UserId: req.loggedUser.id
        }
      })
      res.status(200).json(data)
    }
    catch(err) {
      next(err)
    }
  }

  static async edit (req, res, next) {
    try {
      const obj = {
        title: req.body.title,
        category: req.body.category
      }
      const output = await Task.update(obj, {
        where: {
          id: req.params.id,
          UserId: req.loggedUser.id
        },
        returning: true
      })
      res.status(200).json({ output: output[1][0] })
    }
    catch(err) {
      if(err.name === 'SequelizeValidationError') {
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      } else {
        next(err)
      }
    }
  }

  static async modify (req, res, next) {
    try {
      const obj = {
        category: req.body.category
      }
      const output = await Task.update(obj, {
        where: {
          id: req.params.id,
          UserId: req.loggedUser.id
        },
        returning: true
      })
      res.status(200).json({ output: output[1][0] })
    }
    catch(err) {
      if(err.name === 'SequelizeValidationError') {
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      } else {
        next(err)
      }
    }
  }

  static async delete (req, res, next) {
    try {
      const output = await Task.destroy({
        where: {
          id: req.params.id,
          UserId: req.loggedUser.id
        }
      })
      res.status(200).json({ message: `Task has been successfully deleted !`})
    }
    catch(err) {
      next(err)
    }
  }
}

module.exports = taskController