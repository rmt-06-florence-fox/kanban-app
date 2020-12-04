const { Task } = require("../models/index.js")

function authorization(req, res, next){
  Task.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(task => {
    if(!task){
      throw({
        status: 404,
        message: "Error! Data not found"
      })
    }
    else {
      if (task.UserId === req.loggedInUser.id){
        next()
      }
      else {
        throw({
          status: 401,
          message: "You are not authorized to access this page"
        })
      }
    }
  })
  .catch(err => {
    console.log(err.message + " <<< ini dari authorization")
    next(err)
  })
}

module.exports = authorization