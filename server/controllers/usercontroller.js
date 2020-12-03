const { User } = require('../models')
const { comparePwd } = require('../helpers/password')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static async signup(req, res, next) {
    try {
      const data = {
        email: req.body.email,
        password: req.body.password
      }
      const newUser = await User.create(data)
      const access_token = generateToken({ id: newUser.id, email: newUser.email })
      res.status(201).json({ access_token })
    } catch (error) {
      next(error)
    }
  }

  static async signin(req, res, next) {
    try {
      const verifyUser = await User.findOne({ where: { email: req.body.email } })
      // console.log(verifyUser)
      if (!verifyUser) throw { status: 404, message: 'Invalid account' }
      else if (comparePwd(req.body.password, verifyUser.password)) {
        const access_token = generateToken({ id: verifyUser.id, email: verifyUser.email})
        console.log(verifyUser)
        res.status(200).json({ access_token })
      }
      else throw { status: 400, message: 'Invalid email/password' }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController