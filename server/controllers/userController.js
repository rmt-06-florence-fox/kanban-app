const { User } = require('../models')
const { comparePass } = require('../helper/hash')
const { generateToken } = require('../helper/jwt')

class UserController {
    static async register(req, res, next) {
        try {
            const payload = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const data = await User.create(payload)
            res.status(201).json({ id: data.id, email: data.email })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const data = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!data) {
                throw {
                    status: 404,
                    message: "Invalid Account!"
                }
            } else if (comparePass(req.body.password, data.password)) {
                const payload = {
                    id: data.id,
                    email: data.email,
                    name: data.name
                }
                const access_token = generateToken(payload)
                res.status(200).json({ access_token })
            } else {
                throw {
                    status: 400,
                    message: "Invalid Email/Password"
                }
            }
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = UserController