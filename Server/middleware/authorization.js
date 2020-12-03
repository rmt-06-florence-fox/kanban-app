const {Task} = require('../models/')

module.exports = async(req, res, next) =>{
  try {
    console.log("authorization");
    console.log(req.userLoggedIn);
    const task = await Task.findOne({
      where: {
        id:req.params.id
      }
    })
    if(task.UserId === req.userLoggedIn.id){
      next()
    } else {
      throw{
        status: 401,
        message: "Unauthorized ID"
      }
    }
  } catch (err) {
    next(err)
  }
}