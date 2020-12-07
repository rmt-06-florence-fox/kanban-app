const { User } = require('../models')
const { comparePwd } = require('../helpers/password')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


class UserController {
    static register( req, res, next) {
        let { name, email, password } = req.body
        let user = { name, email, password }
        User.create(user)
        .then(data => {
            res.status(201).json({name: data.name, email: data.email, password: data.password})
        })
        .catch(error => {
            next(error)
        })
    }
    
    static login(req, res, next) {
        User.findOne({ where: {email: req.body.email}})
        .then(data => {
            if (!data) {
                throw {status: 401, message: `Invalid account`}
            } else if (comparePwd(req.body.password, data.password)) {
                const access_token = generateToken({id: data.id, email: data.email}, )
                res.status(200).json({access_token, user:data})
            } else {
                throw {status: 401, message: `Invalid email/password`}
            }            
        })
        .catch(error => {
            next(error)
        })
    }

    static googleLogin (req, res, next) {
        let payload;
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket => {
            payload = ticket.getPayload()
            return User.findOne({ where: { email: payload.email }})
        })
        .then(user => {
            if (user) { 
                return user
            } else {
                return User.create({ email: payload.email, password: 'nanti-di-random' })
            }
        })
        .then(user => {
            const access_token = generateToken({ email:user.email, id: user.id })
            res.status(200).json({access_token, user})
        })
        .catch(error => {
            next(error)
        })
    }

}

module.exports = UserController