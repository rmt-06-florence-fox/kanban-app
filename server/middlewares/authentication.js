const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

module.exports = async (req, res, next) => {
  try {
    const access_token = req.headers.access_token
    if (!access_token) {
      throw {
        status: 401,
        msg: `Please login first.`
      }
    } else {
      const decoded = verifyToken(access_token)
      // console.log(decoded);
      req.signedIn = decoded
      const data = await User.findOne({
        where: {
          id: decoded.id
        }
      })
      if (data) {
        next()
      } else {
        throw {
          status: 404,
          msg: `Please register account first.`
        }
      }
    }
  } catch (err) {
    next(err)
  }
}