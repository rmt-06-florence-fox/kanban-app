const { Task } = require("../models");
module.exports = async (req, res, next) => {
    try {
        const result = await Task.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!result) {
            throw {
                status: 404,
                message: "Data is not found."
            }
        } else if(result.UserId === req.loggedInUser.id) {
            next();
        } else {
           throw {
               status: 401,
               message: "Unauthorized Access!"
           }
        }
    } catch (err) {
        next(err);
    }
}