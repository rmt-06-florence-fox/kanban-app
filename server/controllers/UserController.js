const { User } = require("../models")
const { comparePass } = require("../helper/hashPassword")
const { getToken } = require("../helper/generateToken")
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {
    static register(req, res, next) {
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(newUser)
            .then(data => {
                res.status(201).json({id: data.id, email: data.email})
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static login(req, res, next) {
        
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(data => {
                if(!data) {
                    res.status(404).json({
                        msg: "Invalid Account"
                    })
                } else {
                    const access_token = getToken({id: data.id, email: data.email})
                    if(comparePass(req.body.password, data.password)) {
                        res.status(200).json({access_token})
                    } else {
                        res.status(404).json({msg: "DataNotFound"})
                    }
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static googleLogin(req, res, next) {
        let payload
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(ticket => {
                payload = ticket.getPayload()
                // console.log(payload)
                return User.findOne({
                    where: {
                        email: payload.email
                    }
                })
            })
            .then(user => {
                if (user) {
                    return user
                } else {
                    return User.create({email: payload.email, password: process.env.GOOGLE_PASSWORD})
                }
            })
            .then(data => {
                const access_token = getToken({id: data.id, email: data.email})
                res.status(201).json({access_token})
            })
            .catch(err => {
                res.status(500).json(err)
                // console.log(err)
            })
    }
}

module.exports = UserController