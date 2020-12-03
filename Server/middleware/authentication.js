const {User} = require('../models/');
const {verifyToken} = require('../helpers/jwt')

module.exports = async(req, res, next) =>{
  try {
    const {access_token} = req.headers
    if(!access_token){
      throw{
        status: 401,
        message: "please log in"
      }
    } else {
      const decoded = verifyToken(access_token)
      const user = await User.findOne({
        where :{
          id: decoded.id
        }
      })

      if(!user){
        throw{
          status: 401,
          message: "authentication failed"
        }
      } else {
        req.userLoggedIn = decoded
        next()
      }
    }
  } catch (err) {
    next(err)
  }
}