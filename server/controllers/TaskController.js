const { Task, User } = require('../models')

class TaskController {
  static add(req, res, next) {
    const payload = {
      title: req.body.title,
      category: req.body.category,
      UserId: req.userData.id,
      organization: req.body.organization,
    }

    Task.create(payload)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(next)
  }

  static getAll(req, res, next) {

    Task.findAll({
      include: User
    })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(next)
  }

  static edit(req, res, next) {
    const id = Number(req.params.id)

    const payload = {
      title: req.body.title,
      category: req.body.category,
      UserId: req.userData.id,
      organization: req.body.organization
    }

    Task.update(payload, {
      where: {
        id
      }
    })
    .then(data => {
      if(data[0] != 0) {
        res.status(200).json(data)
      } else {
        next({name: "NOT_FOUND"})
      }
    })
    .catch(next)
  }

  static delete(req, res, next) {
    const id = Number(req.params.id)

    Task.destroy({
      where: {
        id
      }
    })
    .then(data => {
      if(data[0] != 0) {
        res.status(200).json({message: "Successfully delete task"})
      } else {
        next({name: "NOT_FOUND"})
      }
    })
    .catch(err => {
      next(err)
    })
  }
} 

module.exports = TaskController