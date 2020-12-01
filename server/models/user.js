'use strict';
const {hash} = require('../helper/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Task, {foreignKey: "UserId", sourceKey: "id"})
    }

    get fullname() {
      return `${this.firstName} ${this.lastName}`
    }
  };
  User.init({
    firstName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `First Name musn't be null`
        },
        notEmpty : {
          msg : `First Name musn't be empty`
        }
      }
    },
    lastName: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `Email musn't be null`
        },
        notEmpty : {
          msg : `Email musn't be empty`
        },
        isEmail : {
          msg : `It must be filled with Email` 
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `Password musn't be null`
        },
        notEmpty : {
          msg : `Password musn't be empty`
        },
        isLength(value){
          if (value.length < 8) {
            throw new Error(`Minimum of password is 8 characters`);
          }
        }
      }
    }
  }, {
    hooks : {
      beforeCreate(init, opt){
        init.password = hash(init.password)
        if (init.lastName == '' || init.lastName === null) {
          init.lastName = init.firstName
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};