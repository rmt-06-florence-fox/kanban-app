const { User } = require("../models/index")
var bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const { createToken } = require("../helpers/createAndVerifyToken")

class ControllerUser {
    static registerUser(req, res, next) {
        let objUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
        User.create(objUser)
            .then(data => {
                res.status(201).json({ name: data.fullName(), email: data.email, id: data.id })
            })
            .catch(err => {
                next(err)
            })
    }

    static loginUser(req, res, next) {
        let email = req.body.email
        let password = req.body.password

        User.findOne({
            where: {
                email
            }
        })
            .then(data => {
                let dataBasePasswordUser = data.password
                console.log(dataBasePasswordUser)
                if(bcrypt.compareSync(password, dataBasePasswordUser)) {
                    let acces_token = createToken({ name: data.fullName(), email: data.email, id: data.id })
                    res.status(200).json({acces_token: acces_token})
                }else {
                    throw {
                        status: 400,
                        message: "Password/Email invalid"
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLOgin(req, res, next) {
        let tmpPayload = null
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.CLIENT_ID, 
        })
            .then((ticket) => {
                let payload = ticket.getPayload();
                tmpPayload = payload 
                // console.log(payload, "---------------")
                let email = payload.email

                return User.findOne({
                            where: {
                                email
                            }
                })
            })
            .then(user => {
                if(user) {
                    return user
                } else {
                    // console.log(tmpPayload)
                    return User.create({
                        firstName: tmpPayload.given_name,
                        lastName: tmpPayload.family_name,
                        email: tmpPayload.email,
                        password: process.env.GOOGLE_SECRET
                    })
                }
            }) 
            .then(user => {
            
                const acces_token = createToken({ email: user.email, id: user.id, fullName: user.fullName()})
                res.status(200).json({acces_token})
            })

            .catch(err => {
                next(err)
            })
    }

}

module.exports = ControllerUser