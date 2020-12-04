const {
    User
} = require('../models')
const {
    createToken
} = require('../helpers/jwt')
const {
    generatePw,
    comparePw
} = require('../helpers/password')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID);

class UserController {
    static home(req, res) {
        res.status(200).json({
            message: 'Welcome to kanban app!'
        })
    }

    static register(req, res, next) {
        const obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        User.create(obj)
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(data => {
                if (!data) {
                    throw {
                        status: 401,
                        message: 'Invalid account'
                    }
                } else if (comparePw(req.body.password, data.password)) {
                    const access_token = createToken({
                        id: data.id,
                        email: data.email
                    })
                    res.status(200).json({
                        access_token, UserId: data.id
                    })
                } else {
                    throw {
                        status: 401,
                        message: 'Invalid email/password'
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next){
        let payload
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.GOOGLE_CLIENTID
        })
        .then(ticket => {
            payload = ticket.getPayload()
            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(user => {
            if (user){
                return user
            } else {
                return User.create({
                    name: payload.name,
                    email: payload.email,
                    password: generatePw(process.env.GOOGLE_PW)
                })
            }
        })
        .then(user => {
            const access_token = createToken({
                id: user.id,
                email: user.email
            })
            res.status(201).json({access_token})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController