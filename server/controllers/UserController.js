const { compare } = require('../helpers/bcrypt-pass')
const { User, Organization, UserOrganization } = require('../models/index')
const { getToken } = require('../helpers/jwt')


class UserController {
    static async register(req, res, next) {
        const obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            organization: req.body.organization
        }
        try {
            const user = await User.create(obj)
            res.status(201).json({message: 'Create Data Successful!!'})
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        const obj = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            if (!obj.email && !obj.password) {
                throw {
                    status: 400,
                    message: 'Email and Password are required!!'
                }
            } else if (!obj.email) {
                throw {
                    status: 400,
                    message: 'Email is required!!'
                }
            } else if (!obj.password) {
                throw {
                    status: 400,
                    message: 'Password is required!!'
                }
            } else {
                const data = await User.findOne({where: {email: obj.email}})
                if (data) {
                    if (compare(obj.password, data.password)) {
                        const access_token = getToken(data)
                        res.status(200).json({access_token})
                    } else {
                        throw {
                            status: 401,
                            message: 'Invalid Account!!'
                        }
                    }
                } else {
                    throw {
                        status: 404,
                        message: 'Invalid Account!!'
                    }
                }
            }
        } catch (error) {
            next(error)
        }
    }
}


module.exports = UserController