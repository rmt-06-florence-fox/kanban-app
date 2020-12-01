'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Task extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Task.belongsTo(models.User);
		}
	}
	Task.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Title Cannot be Empty',
					},
				},
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Description Cannot be Empty',
					},
				},
			},
			category: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Category Cannot be Empty',
					},
				},
			},
			UserId: DataTypes.INTEGER,
		},
		{
			hooks: {
				beforeCreate: (instance, options) => {
					instance.category = 'backlog';
				},
			},
			sequelize,
			modelName: 'Task',
		}
	);
	return Task;
};
