const {User} = require('../models')
const {getToken} = require('../helper/jwt')
const {comparePassword} =require('../helper/encryptPass')

class UserController {


    static async register(req,res,next){
        console.log('===========Get New User')
        const newUser = {
            email : req.body.email,
            password : req.body.password
        }
        console.log(newUser)
        try {
            const registerUser = await User.create(newUser)
            console.log('=================Register New User')
            console.log(registerUser)
            res.status(200).json({email : registerUser.email})
        } catch (error) {
            next(error)
        }
    }

    static async login(req,res,next){
        console.log(req.body)
        const email = req.body.email    
        const password = req.body.password
        console.log(email,password)
        try {
            console.log('========== Login')
            const loginUser = await User.findOne({
                where : {
                    email
                }
            })
            console.log(loginUser)
            if(loginUser){
                console.log('===========get user')
                if(comparePassword(password,loginUser.password)){
                    const access_token = getToken({
                        id : loginUser.id,
                        email : loginUser.email
                    })
                    res.status(200).json({
                        access_token
                    })
                }else {
                    throw {
                        code : 400,
                        msg : 'wrong email/password'
                    }
                }
            }else {
                throw {
                    code : 400,
                    msg : 'wrong email/password'
                }
            }
        } catch (error) {
            next(error)
        }

    }

    static async googleLogin(req,res,next){
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.google_token,
                audience: process.env.google_oauth
            });
            const payload = ticket.getPayload();
            const user = await User.findOne( {
                where : {
                    email : payload.email
                }
            })

            if(user){
                const access_token = getToken({
                    id : loginUser.id,
                    email : loginUser.email
                })
                console.log(user)
                console.log('============Get Token Google User ===========')
                console.log(access_token)
                res.status(200).json(access_token)
            }else {
                const newUser = {
                    name : payload.name,
                    email : payload.email,
                    password : process.env.google_password
                }
                const createUSer = await User.create(newUser)
                console.log(createUSer)
                const access_token = getToken({
                    id : loginUser.id,
                    email : loginUser.email
                })
                console.log('============Create Token Google User ===========')
                console.log(access_token)
                res.status(200).json(access_token)
            }
        } catch (error) {
            next(error)
        } 

        
    }
    
}

module.exports  = UserController