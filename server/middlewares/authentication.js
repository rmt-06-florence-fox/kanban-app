const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(request, response, next) {
    console.log("Masuk Authentication");
    const token = request.headers.access_token;
    console.log(request.headers);
    try {
        if(!token) {
            throw { name: 'AuthenticationFailed' }
        } else {
            const decoded = verifyToken(token);
            console.log(decoded);
            const user = await User.findOne({
                where: {
                    email: decoded.email
                }
            });
            if(!user) {
                throw { name: 'AuthenticationFailed' }
            } else {
                request.loggedInUser = decoded;
                console.log("Auth Next");
                next();
            }
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
}

module.exports = authentication;