const { compare } = require('../helpers/bcrypt-pass')
const { User, Organization, UserOrganization } = require('../models/index')
const { getToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);



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
                        res.status(200).json({access_token, name: data.name})
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

    static async googleLogin(req, res, next) {
        let payload
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            payload = ticket.getPayload()
            return User.findOne({where: {email: payload.email}})
        })
        .then(user => {
            if(user) {
                return user
            } else {
                return User.create({name: payload.name, email: payload.email, password: process.env.GOOGLE_PASSWORD})
            }
        })
        .then(user => {
            const access_token = getToken(user)
            res.status(200).json({access_token, name: user.name})
        })
        .catch(error => {
            next(error)
        })
    }
}


module.exports = UserController