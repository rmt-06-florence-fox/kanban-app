const { User } = require("../models/index.js")
const comparePassword = require("../helpers/comparePassword")

class UserController {

  static register(req, res, next){
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.create(newUser)
      .then(user => {
        res.status(201).json(
          {
            id: user.id,
            email:user.email
          }
        )
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari user controller, fungsi register")
        next(err)
      })
  }

  static login(req, res, next){
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if(!user){
          throw {
            status: 401,
            message: "Invalid email/password"
          }
        }
        else {
          if(comparePassword(req.body.password, user.password)){
            res.status(200).json("User logged in")
          }
          else {
            throw {
              status: 401,
              message: "Invalid email/password"
            }
          }
        }
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari controller user, fungsi login")
        next(err)
      })
  }
}

module.exports = UserController