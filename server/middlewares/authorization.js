const { Task } = require("../models");

module.exports = async (req, res, next) => {
  try {
    const find = await Task.findOne({
      where: {
        id: +req.params.id,
      },
    });
    if (find.UserId === req.loggedin.id) {
      next();
    } else {
      throw {
        status: 401,
        message: "You're not privileged",
      };
    }
  } catch (error) {
    next(error);
  }
};
