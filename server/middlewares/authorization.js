const { Task } = require('../models/index')

const authorization = (req, res, next) => {
  const taskId = req.params.id;
  const userId = req.userData.id;

  Task.findByPk(taskId)
  .then(task => {
    if(task.UserId !== userId) {
      next({name: 'FORBIDDEN_ACCESS'})
    } else {
      next()
    }
  })
  .catch(next)
}

module.exports = authorization