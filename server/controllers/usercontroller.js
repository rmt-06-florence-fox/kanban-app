const { User } = require ("../models")
const bcrypt = require ('bcryptjs')
const { generateToken } = require ('../helpers/jwt.js')
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(process.env.CLIENTID);

class UserController {

    static async register (req, res, next) {
        try {
            let data = {
                email : req.body.email,
                password : req.body.password
            }
            const newUser = await User.create(data)
            res.status(201).json({
                email : newUser.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        try {
            let email = req.body.email
            const user = await User.findOne ({where : {email}})
            if (!user) {
                throw {
                    status : 401,
                    msg : "Invalid Account"
                }
            } else  {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const token = generateToken({id: user.id, email: req.body.email})
                    res.status(200).json({token})
                } else {
                    throw {
                        status : 401,
                        msg : "Invalid Username/Password"
                    }
                }
            }
        } catch (err) {
            next(err)
        }
    } 

    static googlelogin (req, res, next) {
        
    }
}

module.exports = UserController