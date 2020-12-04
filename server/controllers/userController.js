const { User } = require("../models");
const { compare } = require("../helpers/passwordHandler.js");
const { generateToken } = require("../helpers/tokenHandler.js");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
class UserC {
  //register
  static async register(req, res, next) {
    try {
      const payload = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };
      const data = await User.create(payload);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  //login
  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((data) => {
        if (!data) {
          throw {
            status: 404,
            message: "Account not found!",
          };
        } else if (compare(req.body.password, data.password)) {
          const access_token = generateToken({
            id: data.id,
            email: data.email,
          });
          res.status(200).json({ access_token });
        } else {
          throw {
            status: 401,
            message: "Invalid email/password",
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  //googleSignIn
  static async loginGoogle(req, res, next) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.id_token,
        audience: process.env.CLIENT_ID
      })
      const payload = ticket.getPayload();
      console.log(payload)
      const user = await User.findOne({
        where: {
          email: payload.email
        }
      })
      if (!user) {
        const gUser = await User.create({
          username: `${(payload.given_name).split(' ').join('_')}${(payload.family_name).split(' ').join('_')}`,
          email: payload.email,
          password: process.env.PASSWORD
        })
        const access_token = generateToken({
          id: gUser.id,
          email: gUser.email,
        });
        res.status(200).json({ access_token })
      } else {
        const access_token = generateToken({
          id: user.id,
          email: user.email,
        });
        res.status(200).json({ access_token })
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = UserC;
