const {User} = require('../models/')
const {verifyHash} = require('../helpers/bcrypt')
const {signToken} = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

class UserController{
  static async register (req, res, next){
    try {
      const {email, password} = req.body
      const register = await User.create({
        email, password
      })

      res.status(201).json({
        id: register.id,
        email: register.email
      })
    } catch (err) {
      next(err)
    }
  }

  static async login (req, res, next){
    try {
      const {email, password} = req.body
      const login = await User.findOne({
        where: {email}
      })
      if(!login){
        throw{
          status: 400,
          msg: "wrong email/password"
        }
      } else if(verifyHash(password, login.password)){
        const access_token = signToken({
          id: login.id,
          email: login.email
        })
        res.status(200).json({
          access_token: access_token
        })
      } else {
        throw{
          status: 400,
          msg: "wrong email/password"
        }
      }
    } catch (err) {
      next(err)
    }
  }

  static async googleLogin(req, res){
    const googleToken = req.body.googleToken
    const client = new OAuth2Client(process.env.googleID)

    try {
      const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: process.env.googleID
      })

      const payload = ticket.getPayload()
      const user = await User.findOne({
        where:{
          email: payload.email
        }
      })

      if(!user){
        const newUser = {
          email: payload.email,
          password: process.env.googlePASS
        }
        const createUser = await User.create(newUser)

        const access_token = signToken({
          id: createUser.id,
          email: createUser.email
        })

        res.status(200).json({
          access_token
        })
      } else {
        const access_token = signToken({
          id: user.id,
          email: user.email
        })

        res.status(200).json({
          access_token
        })
      }
    } catch (err) {
      res.status(500).json()
      console.log(err);
    }
  }
}

module.exports = UserController