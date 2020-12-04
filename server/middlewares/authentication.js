const {verifyToken} = require('../helpers/jswebtoken');
const {User} = require('../models'); 
async function authentication(req, res, next){
    const {access_token} = req.headers;
    if(!access_token){
        const err = {
            status: 401,
            message: 'You need to login to have an access'
        }
        res.status(err.status).json({message: err.message});
    } else {
        try {
            const decoded = verifyToken(access_token);
            req.loggedIn = decoded;
            const foundUser = await User.findAll({where: {id: decoded.id, email: decoded.email}});
            if(foundUser.length){
                next();
            } else {
                const err = {
                    status: 401,
                    message: "We can't find any match account, make sure you are login with the right account. You can register for a new one if you don't have any"
                }
                res.status(err.status).json({message: err.message});
            }
        } catch(error){
            res.status(401).json({message: "You need to login to have an access or register for a new account"});
        }
    }
}

module.exports = {
    authentication
}