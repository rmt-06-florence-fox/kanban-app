const {Task} = require('../models')
const createError = require('http-errors')
console.log('start in authorization.js');
const authorization = async (req, res, next) => {
  const id = +req.params.id
  try {
    const todo = await Task.findByPk(id)

    if (!todo) {
      throw createError(404, 'Todo not found')
    } else if (todo.UserId !== req.loggedInUser.id) {
      throw createError(401, 'You are not authorized')
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authorization
console.log('end in authorization.js');