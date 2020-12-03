const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class UserControl {
  static async signUp(req, res, next) {
    try {
      const value = {
        email: req.body.email,
        password: req.body.password
      }
      const data = await User.create(value)
      res.status(200).json({
        id: data.id,
        email: data.email
      })
    } catch (err) {
      next(err)
    }
  }

  static async signIn(req, res, next) {
    try {
      const data = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (!data) {
        throw {
          status: 404,
          msg: `Invalid Account.`
        }
      } else if (compare(req.body.password, data.password)) {
        const value = {
          id: data.id,
          email: data.email
        }
        const access_token = createToken(value)
        res.status(200).json({ access_token })
      } else {
        throw {
          status: 404,
          msg: `Invalid email or password.`
        }
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserControl
