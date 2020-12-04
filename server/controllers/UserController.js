const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../helpers/generateToken')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
  static signup(req, res, next) {
    const payload = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    
    User.create(payload)
    .then(data => {
      res.status(201).json({
        id: data.id, 
        email: data.email
      })
    })
    .catch(next)
  }

  static signin(req, res, next) {
    const payload = {
      email: req.body.email,
      password: req.body.password
    }

    User.findOne({
      where: {
        email: payload.email
      }
    })
    .then(data => {
      if(!data || !bcrypt.compareSync(payload.password, data.password)){
        next({name: "INVALID_EMAIL_PASS"})
      } else {
        const access_token = generateToken(data)
        res.status(200).json({access_token})
      }
    })
    .catch(next)
  }

  static googleSignIn(req, res, next) {
    let token = req.body.googleToken;
    let payload;
    client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    .then(ticket => {
      payload = ticket.getPayload();
      return User.findOne({
        where: {
          email: payload.email
        }
      })
    })
    .then(data => {
      if(!data) {
        return User.create({
          name: payload.name,
          email: payload.email,
          password: process.env.GOOGLE_PASSWORD
        })
      } else {
        return data;
      }
    })
    .then(user => {
      const access_token = generateToken({
        id: user.id,
        email: user.email
      });
      res.status(200).json({ access_token })
    })
    .catch(next)
  }

}

module.exports = UserController