const { Task } = require('../models')

module.exports = async (req, res, next)=>{
  try{
    const data = await Task.findOne({
      where:{
        id: req.params.id,
        UserId: req.loginUser.id
      }
    })
    if(data) next()
    else{
      throw{
        status: 401,
        message: `You aren't authorized to access this task`
      }
    }
  }catch(err){
    next(err)
  }
}