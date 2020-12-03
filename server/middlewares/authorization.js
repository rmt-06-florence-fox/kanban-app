const { Task } = require('../models')

async function authorization(req, res, next) {
  try {
    const data = await Task.findOne({
      where: {
        id: req.params.id
      }
    })
    console.log(req.signedIn);
    if (data.UserId === req.signedIn.id) {
      next()
    } else {
      throw {
        status: 401,
        msg: `Invalid Authentication.`
      }
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authorization