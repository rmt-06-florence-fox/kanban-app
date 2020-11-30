const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User } = require('../models')

class UserController {
    static async register(req, res, next) {
        try {
            let payload = {
                email: req.body.email,
                password: req.body.password
            }
            let user = await User.create(payload)
            res.status(201).json({ id: user.id, email: user.email })
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            let data = await User.findOne({ where: { email: req.body.email } })
            console.log(data);
            if (!data) {
                throw {
                    status: 400,
                    message: 'Invalid Account'
                }
            } else {
                if (comparePassword(req.body.password, data.password)) {
                    let access_token = generateToken({ id: data.id, email: data.email })
                    res.status(200).json({ access_token })
                } else {
                    throw {
                        status: 400,
                        message: 'Invalid Email/Password'
                    }
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController