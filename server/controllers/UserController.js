const {User, Organization} = require('../models/index')
const {compare} = require('../helper/bcrypt')
const {generateToken} = require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENTIDGOOGLE);

class UserController {
    static async register(req, res, next) {
        try {
            let organizationData
            if(req.body.organizationName){
                organizationData = await Organization.findOne({
                    where: {
                        name: req.body.organizationName
                    }
                })
            }
            let user = {
                email: req.body.email,
                password: req.body.password,
                OrganizationId:  (organizationData.id) ? organizationData.id: 'null'
            }
            let data = await User.create(user)
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async login(req, res, next){
        try {
            let data = await User.findOne({
                where: {
                    email: req.body.email    
                },
                include: [Organization]
            })
            if(!data){
                throw({
                    status: 400,
                    message: `Invalid Account`
                })
            } else if(compare(req.body.password, data.password)){
                    const access_token = generateToken({id: data.id, email: data.email})
                    res.status(200).json({
                        data,
                        access_token
                    })
            } else {
                throw({
                    status: 400,
                    message: `invalid email or password`
                })
            }
        } catch (error) {
            next(error)
        }
    }
    static googleLogin(req, res, next){
        let payload
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.CLIENTIDGOOGLE
        })
        .then(ticket => {
            payload = ticket.getPayload()
            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(data => {
            if(data){
                return data
            } else {
                return User.create({
                    email: payload.email,
                    password: process.env.PASSWORD,
                    OrganizationId: 1
                })
            }
        })
        .then(user => {
            const access_token = generateToken({id: user.id, email: user.email})
            res.status(200).json({access_token})
        })
        .catch(err => {
            next(err)
        })
    }
}
module.exports = UserController