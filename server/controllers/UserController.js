const { User } = require('../models/index')
const Bcrypt = require('../helpers/bcrypt')
const Jwt = require('../helpers/jwt')


class UserController {
    static async register(req, res, next) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password
            }
            const newuser = await User.create(payload)
            res.status(201).json({
                id: newuser.id,
                email: newuser.email
            })
        }
        catch(error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password
            }
            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            })
            if(!user) {
                res.status(401).json({
                    message: 'wrong password/email'
                })
            }
            else if (!Bcrypt.comparePassword(payload.password, user.password)) {
                res.status(401).json({
                    message: 'wrong password/email'
                })
            }
            else {
                const access_token = Jwt.signToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({
                    access_token
                })
            }
        }catch(error) {
            next(error)
        }
    }
}

module.exports = UserController