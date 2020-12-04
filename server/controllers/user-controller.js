const {User} = require('../models')
const Helper = require('../helpers')

class UserController {

    static async loginHandler(req, res, next){
        try {
            let { email, password } = req.body
            let datum = await User.findOne({where: {
                email
            }})

            if (datum && Helper.checkPassword(password, datum.password)){
                const access_token = Helper.tokenGenerator({
                    id : datum.id,
                    email,
                })
                res.status(200).json({access_token})
            
            } else {
                throw ({
                    status : 400,
                    message : 'either your password or email is wrong'
                })
            }

        } catch (err){
            next(err)
        }
    }

    static async registerHandler (req, res, next){
        try {
            let {email, password} = req.body
            let result = await User.create({
                email,
                password
            })

            res.status(201).json({
                id : result.id,
                email : result.email
            })

        } catch (err){
            next(err)
        }
    }

    static async googleSignIn(req, res, next){
        try {
            const {email} = req.body
            const user = await User.findOne({where : {email}})

            if(user){
                const access_token = Helper.tokenGenerator({
                    id : user.id,
                    email
                })

                res.status(200).json({access_token})
            
            } else {
                const password = (Math.random()*36).toString(36).split('.')[1]
                const newUser = await User.create({email, password})
                
                const access_token = Helper.tokenGenerator({
                    id : newUser.id,
                    email
                })
                res.status(200).json({access_token})
                
            }

        } catch(err){
            next(err)
        }
    }
}

module.exports = UserController