const { User } = require("../models/index.js")
const comparePassword = require("../helpers/comparePassword")
const generateToken = require("../helpers/generateToken.js")

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
            let access_token = generateToken(
              {
                id: user.id,
                email: user.email
              }
            )
            res.status(200).json({ access_token })
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