const {User} = require('../models')
const {compare} = require('../helper/bcrypt')
const {makeToken} = require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.googleClientSECRET);

class UserController {
  static async register(req, res, next) {
    try {
      let obj = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password
      }
      const data = await User.create(obj)
      const listData = {
        id : data.id,
        fullname : data.fullname,
        email : data.email
      }
      res.status(201).json(listData)
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      let obj = {
        email : req.body.email,
        password : req.body.password
      }
      const data = await User.findOne({where : {email : obj.email}})
      if (data) {
        const compared = compare(obj.password, data.password)
        if (compared) {
          const listData = {
            id : data.id,
            fullname : data.fullname,
            email : data.email
          }
          const access_token = makeToken(listData)
          const fullname = data.fullname
          res.status(200).json({access_token, fullname})
        } else {
          throw {
            status : 401,
            message : `invalid email/password`
          }
        }
      } else {
        throw {
          status : 401,
          message : `invalid email/password`
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async googleLogin(req,res,next){
    try {
      
      const ticket = await client.verifyIdToken({
        idToken: req.body.googleToken,
        audience: process.env.googleClientID
      });
      const payload = ticket.getPayload();
      const findUser = await User.findOne({where: { email : payload.email}})
      if (findUser) {
        let obj = {
          id : findUser.id,
          firstName : findUser.firstName,
          lastName : findUser.lastName,
          email : findUser.email
        }
        const access_token = makeToken(obj)
        const fullname = findUser.fullname
        res.status(200).json({access_token, fullname})
      } else {
        let sign = {
          firstName : payload.given_name,
          lastName : payload.family_name,
          email : payload.email,
          password : process.env.googlePASSWORD
        }
        const data = await User.create(sign)
        let obj = {
          id : data.id,
          firstName : data.firstName,
          lastName : data.lastName,
          email : data.email
        }
        const access_token = makeToken(obj)
        const fullname = data.fullname
        res.status(201).json({access_token, fullname})
      }
    } catch (error) {
      next(error)
    }
  }  
}

module.exports = UserController