const { User } = require('../models')
const { comparePwd } = require('../helpers/password')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

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

  static googlesignin(req, res, next) {
    let payload
    client.verifyIdToken({
      idToken: req.body.google_token,
      audience: process.env.GOOGLE_CLIENT
    })
      .then(ticket => {
        payload = ticket.getPayload()
        return User.findOne({ where: { email: payload.email } })
      })
      .then(user => {
        if (user) return user
        else {
          return User.create({
            email: payload.email,
            password: process.env.GOOGLE_PASSWORD
          })
        }
      })
      .then(data => {
        const access_token = generateToken({ id: data.id, email: data.email })
        res.status(200).json({ email: data.email, access_token })
      })
      .catch (error => next(error))
  }
}

module.exports = UserController