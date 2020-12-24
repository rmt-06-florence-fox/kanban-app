const { Column } = require ('../models')

class ColumnController {
  static async create (req, res, next) {
    try {
      const { colName } = req.body
      const payload = await Column.create({ colName })
      res.status(201).json(payload)
    } catch (err) {
      next(err)
    }
  }
  
  static async get (req, res, next) {
    try {
      const columns = await Column.findAll({
        attributes: ['id', 'colName']
      })
      res.status(200).json(columns)
    } catch (err) {
      next(err)
    }
  }
}
module.exports = ColumnController
