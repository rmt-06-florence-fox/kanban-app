const {verifyToken} = require('../helpers/jwt')
const {User} = require('../models')
const createError = require('http-errors')
console.log('star in authentication.js');
const authentication = async (req, res, next) => {
  console.log('enter in authentication');
  const {access_token} = req.headers
  try {
    if (!access_token) {
      throw createError(407, 'Authentication required')
    } else {
      const decoded = verifyToken(access_token)
      const user = await User.findOne({where: {email: decoded.email}})
      
      if (!user) {
        throw createError(407, 'Authentication required')
      } else {
        req.loggedInUser = decoded
        next()
      }
    }
  } catch (error) {
    next(error) 
  }
}

module.exports = authentication
console.log('end in authentication.js');