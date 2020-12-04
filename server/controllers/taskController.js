const { Task } = require('../models')
const { User } = require('../models')

class TaskC {
  //create
  static async create(req, res, next) {
    try {
      const { title, category } = req.body
      const UserId = req.loggedin.id
      const data = await Task.create({ title, category, UserId })
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
  //read
  static async get(req, res, next) {
    try {
      const data = await Task.findAll({
        include: [ User ]
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  //update
  static async update(req, res, next) {
    try {
      const id = +req.params.id;
      const { title, category } = req.body
      const data = await Task.update({ title, category }, { where: { id } }, { returning: true })
      if (!data) throw { status: 404, message: "Data not found!" }
      else {res.status(200).json(data)}
    } catch (error) {
      next(error)
    }
  }
  //delete
  static async delete(req, res, next) {
    try {
      const id = +req.params.id;
      const data = await Task.destroy({ where: { id } })
      res.status(200).json({ data, message: "successfully deleted" })
    } catch (error) {
      next(error)
    }
  }

  static async move(req, res, next) {
    try {
      const updateCategory = {
        CategoryId: req.body.CategoryId
      }
      const moveTask = await Task.update(updateCategory, {
        where: {
          id: +req.params.id
        },
        returning: true,
      })
      if (moveTask) {
        res.status(200).json(moveTask)
      } else {
        throw {
          status: 404,
          message: "Data not found!"
        }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TaskC