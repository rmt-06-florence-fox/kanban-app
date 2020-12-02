const { User } = require('../models')
const { generateJwt } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')
const {OAuth2Client} = require('google-auth-library')


class UserController{
    static async postRegister(req,res,next){
        let obj = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            let newUser = await User.create(obj)
            res.status(201).json({id: newUser.id , email: newUser.email})
        } catch (err) {
            next(err)
        }
    }
    static async postLogin(req,res,next){
        let obj = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            let loginUser = await User.findOne({
                where: {
                    email: obj.email
                }
            })
            if(loginUser){
                if(comparePassword(obj.password , loginUser.password)){
                    let access_token = generateJwt({ id: loginUser.id , email: loginUser.email})
                    res.status(200).json({access_token})
                }else{
                    throw{
                        status: 400,
                        msg: 'Invalid email/password'
                    }
                }
            }else{
                throw {
                    status: 400,
                    msg: 'User Not Found'
                }
            }
        } catch (err) {
            next(err)
        }
    }
    static async loginGoogle(req,res,next){
        const client = new OAuth2Client(process.env.CLIENT_ID);
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.token,
                audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            let isRegistered = await User.findOne({
                where:{
                    email: payload.email
                }
            })
            if(isRegistered){
                let access_token = generateJwt({ id: isRegistered.id , email: isRegistered.email})
                res.status(200).json({access_token})
            }else{
                let obj = {
                    email: payload.email,
                    password: process.env.gugelPW
                }
                let newUser = await User.create(obj)
                let access_token = generateJwt({ id: newUser.id , email: newUser.email})
                res.status(200).json({access_token})
            }
        } catch (error) {
            next(err)
        }
    }  
}

module.exports = UserController