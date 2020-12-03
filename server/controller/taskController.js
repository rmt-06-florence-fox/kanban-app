const {Task} = require('../models')

class TaskController{
  static async seeList(req,res,next){
    try {
      const list = await Task.findAll()
      if (list) {
        res.status(200).json(list)
      } else {
        throw {
          status : 404,
          message: `error not found`
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async create(req,res,next){
    try {
      let obj = {
        title : req.body.title,
        category : req.body.category,
        UserId : req.userLogin.id
      }
      const created = await Task.create(obj)
      res.status(201).json(created)
    } catch (error) {
      next(error)
    }
  }

  static async seeData(req,res,next){
    let id = req.params.id
    try {
      const data = await Task.findOne({where : {id}})
      if (data) {
        res.status(200).json(data)
      } else {
        throw {
          status : 404,
          message: `error not found`
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async update(req,res,next){
    let id = req.params.id
    let obj = {
      title : req.body.firstName,
      category : req.body.category
    }
    try {
      const updated = await Task.update(obj, {where: {id}, returning: true})
      if (updated) {
        res.status(200).json(updated[1][0])
      } else {
        throw {
          status : 404,
          message: `error not found`
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async patch(req,res,next){
    let id = req.params.id
    let obj = {
      category : req.body.category
    }
    try {
      const updated = await Task.update({category: obj.category}, {where: {id}, returning: true})
      if (updated) {
        res.status(200).json(updated[1][0])
      } else {
        throw {
          status : 404,
          message: `error not found`
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async delete(req,res,next){
    let id = req.params.id
    try {
      const deleted = await Task.destroy({where: {id}})
      if (updated) {
        res.status(200).json({message : `Task is deleted`})
      } else {
        throw {
          status : 404,
          message: `error not found`
        }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TaskController