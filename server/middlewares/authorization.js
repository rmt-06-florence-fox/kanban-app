const {Task} = require('../models/index')

module.exports = async (req,res,next) =>{
   const id = +req.params.id
   const UserId = req.loggedIn.id

   try {
      const isAuthorized = await Task.findOne({
         where:{
            id,
            UserId
         }
      })
      if(isAuthorized){
        next()
      }else{
         throw{
            status:401,
            message:"Not authorized to update/delete this task"
         }
      }
   } catch (error) {
      console.log(error)
   }
}