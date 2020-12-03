const  { Task } = require('../models')

module.exports = async (req, res, next) => {
  try {
    const data = await Task.findOne({
      where: {
        id: req.params.id,
        UserId: req.loggedUser.id
      }
    })
    if(data) {
      next()
    } else {
      throw {
        status: 401,
        message: `You are not authorize to use this feature !`
      }
    }
  }
  catch(err) {
    next(err)
  }
}