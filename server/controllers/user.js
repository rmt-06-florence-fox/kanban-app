const { User } = require('../models/index')
const bcrpyt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client("34835216493-or0mom6ienh92v74csfvga2tbp9lnvd2.apps.googleusercontent.com")

class UserController {
    
    static async login(req,res,next){
        try {
            const data = await User.findOne({
                where:{
                    email: req.body.email
                }
            })
            if(data){
                if(bcrpyt.compareSync(req.body.password, data.password)){
                    const access_token = jwt.sign({id: data.id, email: data.email}, 'SECRET')

                    res.status(200).json({access_token})
                }else{
                    throw {
                        status: 400,
                        message: 'Invalid Password'
                    }
                }  
            }else{
                throw {
                    status: 400,
                    message: 'Invalid Email'
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async register(req,res,next){
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        try {
            const data = await User.create(newUser)

            res.status(201).json({id: data.id, email: data.email})
        } catch (error) {
            next(error)
        }
    }

    static async googlelogin(req, res, next){
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.googletoken,
                audience: "34835216493-or0mom6ienh92v74csfvga2tbp9lnvd2.apps.googleusercontent.com"
            })
            const payload = ticket.getPayload()
            const isDataExist = await User.findOne({
                where:{
                    email: payload.email
                }
            })
            console.log(isDataExist)
            if(isDataExist){
                const access_token = jwt.sign({id: isDataExist.id, email: isDataExist.email}, 'SECRET')
                res.status(200).json({access_token})
            } else {
                const newData = await User.create({
                    name: payload.name,
                    email: payload.email,
                    password: '12345'
                })
                const access_token = jwt.sign({id: newData.id, email: newData.email}, 'SECRET')
                res.status(200).json({access_token})
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController