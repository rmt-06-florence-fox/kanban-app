const {
    User
} = require('../models/index')
const passwordHandler = require('../helpers/password')
const tokenHandler = require('../helpers/token')
const {
    OAuth2Client,
    UserRefreshClient,
    JWT
} = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CID)

class ControllerUser {
    static login(req, res, next) {
        User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(responseData => {
                if (responseData) {
                    const plainPassword = req.body.password
                    const hashedPassword = responseData.password
                    const isCorrect = passwordHandler.decrypt(plainPassword, hashedPassword)

                    if (isCorrect) {
                        req.headers.access_token = tokenHandler.create(responseData.id, responseData.email)

                        res.status(200).json({
                            message: `Hello, welcome back ${responseData.username}!`,
                            access_token: req.headers.access_token
                        })
                    } else {
                        next({
                            status: 400,
                            message: 'Email/password does not match!'
                        })
                    }
                } else {
                    next({
                        status: 404,
                        message: 'Email not found, please register first!'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static register(req, res, next) {
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        User.create(newUser)
            .then(responseData => {
                res.status(201).json({
                    message: 'User created!',
                    data: responseData
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next) {
        let generatedData
        client.verifyIdToken({
                idToken: req.body.token,
                audience: process.env.GOOGLE_CID
            })
            .then(ticket => {
                generatedData = ticket.getPayload()
                return User.findOne({
                    where: {
                        email: generatedData.email
                    }
                })
            })
            .then(response => {
                if (response) {
                    const access_token = tokenHandler.create(response.id, response.email)
                    res.status(200).json({
                        access_token
                    })
                } else {
                    const newUser = {
                        username: generatedData.given_name,
                        password: '1234567',
                        email: generatedData.email
                    }
                    return User.create(newUser)
                }
            })
            .then(response => {
                const access_token = tokenHandler.create(response.id, response.email)
                res.status(200).json({
                    access_token
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerUser