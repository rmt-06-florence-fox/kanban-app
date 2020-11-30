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
    res.send('edit')
  }

  static delete(req, res, next) {
    res.send('delete')
  }
} 

module.exports = TaskController