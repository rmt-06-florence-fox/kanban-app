const {User} = require('../models')
const {compare} = require('../helper/bcrypt')
const {makeToken} = require('../helper/jwt')

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
}

module.exports = UserController