const { User } = require("../models/index.js")
const comparePassword = require("../helpers/comparePassword")
const generateToken = require("../helpers/generateToken.js")
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

  static googleLogin(req, res, next){
    let payload;
    client.verifyIdToken({
      idToken: req.body.google_token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    .then(ticket => {
      payload = ticket.getPayload()
      
      return User.findOne({
        where: {
          email: payload.email
        }
      })
    })
    .then(user => {
      if(user){
        return user
      }
      else {
        return User.create({
          email: payload.email,
          password: process.env.GOOGLE_PASSWORD
        })
      }
    })
    .then(user => {
      const access_token = generateToken({
        id: user.id,
        email: user.email
      })
      console.log(access_token)
      res.status(200).json({
        access_token,
        email: user.email
      })
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = UserController