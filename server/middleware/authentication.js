const {User} = require('../models')
const {decode} =  require('../helper/jwt')

module.exports = async (req,res,next) => {
  try {
    if (req.headers.access_token) {
      const {access_token} = req.headers
      const decoded = decode(access_token)
      const found = await User.findOne({where: {id: decoded.id}})
      if (found) {
        req.userLogin = decoded
        next()
      } else {
        throw {
          status : 401,
          message : `You must login first`
        }
      }
    } else {
      throw {
        status : 401,
        message : `You must login first`
      }
    }
  } catch (error) {
    next(error)
  }
}