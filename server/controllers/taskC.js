const { where } = require('sequelize/types')
const { Task } = require('../models')

class TaskC {
  //create
  static async create(req, res, next) {
    try {
      const { title, category } = req.body
      const data = await Task.create({ title, category })
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
  //read
  static async get(req, res, next) {
    try {
      const data = await Task.findAll({
        where: { UserId: req.loggedin.id }
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
    
  }
}

module.exports = TaskC