const { checkPassword } = require('../helpers/bcrypt')
const { User } = require('../models')
const {createToken} = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
    static register(req, res, next) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(newUser)
        .then(data => {
            res.status(200).json({email: data.email, id: data.id})
        })
        .catch(error => {
            next(error)
        })
    }

    static login(req, res, next) {
        User.findOne({where: {email: req.body.email}})
        .then(data => {
            if(!data){
                throw {
                    status: 401,
                    message: "Invalid Account!"
                }
            } else {
                if(checkPassword(req.body.password, data.password)){
                    const obj = {
                        id: data.id,
                        email: data.email
                    }
                    res.status(200).json({token: createToken(obj), email: obj.email, id: obj.id})
                } else {
                    throw {
                        status: 404,
                        message: "Invalid Account/Pasword"
                    }
                }
            }
        })
        .catch(error => {
            console.log(error)
            next(error)
        })
    }

    static googleLogin (req, res, next) {
        let payLoad
        client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            payLoad= ticket.getPayload()
            return User.findOne({where: {email: payLoad.email}})
        })
        .then(user => {
            if(user){
                return user
            } else{
                return User.create({
                    email: payLoad.email,
                    password: process.env.passwordGOOGLE
                })
            }
        })
        .then(user => {
            const access_token = signToken({
                email: user.email,
                id: user.id
            })
            res.status(200).json({access_token})
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = UserController