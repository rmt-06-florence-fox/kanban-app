const jwtHelper = require('../helpers/jwthelper')
const { User } = require('../models')

module.exports = async (req, res, next)=>{

  const token = req.headers.access_token
  let access_token

  try {
    access_token = jwtHelper.decodeToken(token)
  } catch (error) {
    next({ status : 401 , message : "please login"})
  }
  
  try {
    if(access_token){
      const user = await User.findOne({ where : { id : access_token.id } })
      if(user){
        req.currentUser = access_token
        next()
      }else{
        throw{ status : 401 , message : "please login"}
      }
    }
  } catch (error) {
    next(error)
  }
}