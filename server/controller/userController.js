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

        const email = req.body.email
        const password = req.body.password

        try {
            const loginUser = await User.findOne({
                where : {
                    email
                }
            })

            if(loginUser){
                if(comparePassword(password,loginUser.password)){
                    const access_token = getToken({
                        id : loginUser.id,
                        email : loginUser.email
                    })
                    res.status(200).json({
                        access_token
                    })
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
}

module.exports  = UserController