const { User } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { generate } = require("../helpers/jwt.js");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password });
      res.status(201).json({ id: user.id, email: user.email });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (user) {
        if (compare(req.body.password, user.password)) {
          const token = generate({ id: user.id, email: user.email });
          res.status(200).json({ access_token: token });
        } else {
          throw {
            status: 400,
            message: "Invalid username/password",
          };
        }
      } else {
        throw {
          status: 404,
          message: "Invalid account",
        };
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async googleLogin(req, res, next) {
    let payload;
    client
      .verifyIdToken({
        idToken: req.body.googleToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .then((ticket) => {
        payload = ticket.getPayload();
        return User.findOne({
          where: {
            email: payload.email,
          },
        })
          .then((user) => {
            if (user) {
              return user;
            } else {
              return User.create({
                email: payload.email,
                password: process.env.GOOGLE_PASSWORD,
              });
            }
          })
          .then((user) => {
            const access_token = generate({
              email: user.email,
              id: user.id,
            });
            res.status(200).json({ access_token });
          })
          .catch((error) => {
            next(error);
          });
      });
  }
}

module.exports = UserController;
