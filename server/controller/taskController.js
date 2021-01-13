const { Task, User, Category } = require('../models');

class TaskController {
	static create(req, res, next) {
		const newTask = {
			title: req.body.title,
			description: req.body.description,
			CategoryId: req.body.CategoryId,
			UserId: req.loggedInUser.id,
		};
		Task.create(newTask)
			.then((data) => {
				res.status(201).json(data);
			})
			.catch((err) => {
				next(err);
			});
	}

	static getAllTasks(req, res, next) {
		Task.findAll({
			order: [['id', 'ASC']],
			include: {
				model: User,
				attributes: ['email'],
			},
		})
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				next(err);
			});
	}

	static getTask(req, res, next) {
		const id = req.params.id;
		const userId = req.loggedInUser.id;
		Task.findOne({
			where: {
				id,
			},
			include: {
				model: User,
				attributes: ['email'],
			},
		})
			.then((data) => {
				if (!data) {
					const errorName = 'TaskNotFound';
					next({
						name: errorName,
					});
				} else {
					res.status(200).json(data);
				}
			})
			.catch((err) => {
				next(err);
			});
	}

	static updateTask(req, res, next) {
		const id = req.params.id;
		const updateTask = {
			CategoryId: req.body.CategoryId,
		};

		if (!req.body.CategoryId) {
			const errorName = 'CategoryCannotBeNull';
			next({
				name: errorName,
			});
		}
		Task.findByPk(id)
			.then((data) => {
				if (data) {
					return Task.update(updateTask, {
						where: {
							id,
						},
						returning: true,
					});
				} else {
					const errorName = 'TaskNotFound';
					next({
						name: errorName,
					});
				}
			})
			.then((data) => {
				res.status(200).json(data[1][0]);
			})
			.catch((err) => {
				next(err);
			});
	}

	static editTask(req, res, next) {
		const id = req.params.id;
		const editTask = {
			title: req.body.title,
			description: req.body.description,
			CategoryId: req.body.CategoryId,
			UserId: req.loggedInUser.id,
		};

		Task.findOne({
			where: {
				id,
			},
		})
			.then((data) => {
				if (!data) {
					const errorName = 'TaskNotFound';
					next({
						name: errorName,
					});
				} else {
					return Task.update(editTask, {
						where: {
							id,
						},
						returning: true,
					});
				}
			})
			.then((data) => {
				res.status(200).json(data[1][0]);
			})
			.catch((err) => {
				next(err);
			});
	}

	static deleteTask(req, res, next) {
		const id = req.params.id;
		Task.findByPk(id)
			.then((data) => {
				if (data) {
					return Task.destroy({
						where: {
							id,
						},
					});
				} else {
					const errorName = 'TaskNotFound';
					next({
						name: errorName,
					});
				}
			})
			.then((data) => {
				const message = 'Task Success To Delete';
				res.status(200).json({
					message,
				});
			})
			.catch((err) => {
				next(err);
			});
	}

	static getCategories(req, res, next) {
		Category.findAll({
			attributes: ['id', 'name'],
			include: {
				model: Task,
				attributes: ['id', 'title', 'description', 'createdAt'],
				include: {
					model: User,
					attributes: ['email'],
				},
			},
		})
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = TaskController;
