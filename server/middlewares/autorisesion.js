
const { verifyToken } = require("../helpers/jwt")
const {User,Task} = require('../models')

module.exports = async (req,res,next) => {
  try {
   
    const loggedUserId = req.loginUser.id
    
    let id = +req.params.id

      let data = await Task.findOne({where: {id: id}})
      // console.log(data)
      console.log(loggedUserId, `======` , data.UserId )
      if (data.UserId === loggedUserId) {
        next()
      }
      else {
        throw {
          status: 401,
          message: `You Dont Have Permission to Do this Action`}
      
      }
    
  }
  catch(error){
    console.log(error)

    next(error)

  }

}