const { Task } = require('../models')

class TaskControl {
  static async getData(req, res, next) {
    try {
      const data = await Task.findAll()
      res.status(200).json(data)
    } catch (error) {
      next()
    }
  }

  static async postData(req, res, next) {
    try {
      const value = {
        title: req.body.title,
        description: req.body.description,
        UserId: req.signedIn.id
      }
      const data = await Task.create(value)
      res.status(200).json(data)
    } catch (error) {
      next()
    }
  }

  static async patchData(req, res, next) {
    try {
      const id = +req.params.id
      const value = {
        category: req.body.category
      }
      const data = await Task.update(value, {
        where: { id },
        returning: true
      })
      res.status(200).json(data[1][0])
    } catch (error) {
      next()
    }
  }

  static async putData(req, res, next) {
    try {
      const id = +req.params.id
      const value = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
      }
      const data = await Task.update(value, {
        where: { id },
        returning: true
      })
      res.status(200).json(data[1][0])
    } catch (error) {
      next()
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id
      const data = await Task.destroy({
        where: { id }
      })
      res.status(200).json({
        msg: `Task success to delete.`
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TaskControl