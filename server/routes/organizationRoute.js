const OrganizationController = require('../controllers/OrganizationController')

const route = require('express').Router()

route.post('/', OrganizationController.createOrganization)
route.get('/', OrganizationController.getOrganization)



module.exports = route