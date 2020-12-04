const {Category} = require('../models')
const createError = require('http-errors')

class CategoryController {
  static async show (req, res, next) {
    try {
      const category = await Category.findAll()
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }

  static async create (req, res, next) {
    try {
      const {name} = req.body
      const UserId = req.loggedInUser.id
      const category = await Category.create({name, UserId})
      res.status(201).json({category})
    } catch (error) {
      next(error)
    }
  }

  static async edit (req, res, next) {
    try {
      const {name} = req.body
      const id = +req.params.id
      const category = await Category.update({name}, {where: {id}, returning: true})

      if (category[0] !== 1) throw createError (404, 'update name failed')
      else res.status(200).json({category: category[1]})
    } catch (error) {
      next(error)
    }
  }

  static async delete (req, res, next) {
    try {
      const id = +req.params.id
      const destroy = await Category.destroy({where: {id}, returning: true})

      if (destroy == 1) res.status(200).json({message: 'category success to delete'})
      else throw createError (404, 'delete category failed')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CategoryController