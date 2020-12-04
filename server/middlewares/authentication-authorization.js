const { User, Task } = require("../models");
const { verify } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  // console.log(req.headers);
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw {
        status: 401,
        message: "Please login first",
      };
    } else {
      const decoded = verify(access_token);
      req.loggedInUser = decoded;
      const user = await User.findOne({ where: { id: decoded.id } });
      if (user) {
        next();
      } else {
        throw {
          status: 401,
          message: "Please login first",
        };
      }
    }
  } catch (error) {
    next(error);
  }
};

const authorization = async (req, res, next) => {
  console.log("masuk?");
  try {
    const task = await Task.findOne({
      where: { id: req.params.id },
    });
    if (task.UserId === req.loggedInUser.id) {
      next();
    } else {
      throw {
        status: 400,
        message: "Forbidden acces, You're not authorized to access this",
      };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { authentication, authorization };
