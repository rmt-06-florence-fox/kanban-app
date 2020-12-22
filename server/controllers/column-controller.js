const { Column } = require ('../models')

class ColumnController {
  static async create (req, res, next) {
    try {
      const { name } = req.body
      const payload = await Column.create(name)
      res.status(201).json(payload)
    } catch (err) {
      next(err)
    }
  } 
}
module.exports = ColumnController
