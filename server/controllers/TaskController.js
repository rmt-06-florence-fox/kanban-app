class TaskController {
  static add(req, res, next) {
    res.send('add')
  }

  static getAll(req, res, next) {
    res.send('getAll')
  }

  static edit(req, res, next) {
    res.send('edit')
  }

  static delete(req, res, next) {
    res.send('delete')
  }
} 

module.exports = TaskController