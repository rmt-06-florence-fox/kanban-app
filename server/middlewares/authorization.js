const {Todo} = require('../models')

const authorization = async (req, res, next) => {
  const id = +req.params.id
  try {
    const todo = await Todo.findByPk(id)

    if (!todo) {
      throw {msg: 'Todo not found', status: 404}
    } else if (todo.UserId !== req.loggedInUser.id) {
      throw {msg: 'You are not authorized', status: 401}
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authorization