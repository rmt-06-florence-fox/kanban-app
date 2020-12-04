const {Task} = require('../models')

module.exports = async (req, res, next) => {
    try {
      let paramsId = req.params.id
      let userId = req.userLogin.id
      const task = await Task.findOne({where: {id:paramsId}})
      if (task) {
        if (task.UserId === userId) {
          next()
        } else {
          throw {
            status : 401,
            message : `You're not authorized`
          }
        }
      } else {
        throw {
          status : 401,
          message : `You're not authorized`
        }
      }
    } catch (error) {
      next(error)
    }
}