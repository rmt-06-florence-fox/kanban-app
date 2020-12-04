const {User} = require('../models');
const {generateToken} = require('../helpers/jswebtoken');
const {checkPassword} = require('../helpers/bcrypt');
class Controller {

    static async login (req, res){
        const loginAccount = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const foundUser = await User.findOne({where: {email: loginAccount.email}})
            if(foundUser && checkPassword(loginAccount.password, foundUser.password)){
                const payload = {
                    id: foundUser.id,
                    email: foundUser.email
                }
                const access_token = generateToken(payload);
                res.status(200).json({access_token});
            } else {
                throw {
                    status: 400,
                    message: "Email or Password Incorrect"
                }
            }
        } catch (error){
            if(error.status){
                res.status(error.status).json({message: error.message});
            } else {
                res.status(500).json({error});
            }
        }
    }

    static async register(req, res){
        const newAccount = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const newUser = await User.create(newAccount);
            res.status(201).json({id: newUser.id, email: newUser.email});
        } catch (error){
            if(error.errors[0]){
                res.status(400).json(error.errors);
            } else {
                res.status(500).json(error);
            }
        }
    }
}

module.exports = Controller