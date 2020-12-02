const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        const payload = {
            email: req.body.email,
            password: req.body.password
        }

        try {
            const user = await User.create(payload)
            res.status(200).json({id: user.id, email: user.email})
        } catch (error) {
            next(error)
        }
    }
    
    static async login(req, res, next) {
        const payload = {
            email: req.body.email || '',
            password: req.body.password || ''
        }

        try {
            const user = await User.findOne({
                where: {
                    email:payload.email
                }
            })

            if (!user) {
                throw {
                    status: 400,
                    message: `Wrong Email / Password`
                }
            } else if (comparePassword(payload.password, user.password)) {
                const access_token = generateToken({id:user.id, email:user.email})
                res.status(200).json({access_token})
            } else {
                throw {
                    status: 400,
                    message: `Wrong Email / Password`
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static googleLogin(req, res, next) {
        
    }
}

module.exports = UserController