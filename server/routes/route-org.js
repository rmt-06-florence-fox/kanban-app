const { ControllerOrganization } = require ('../controllers')
const org = require('express').Router()


org.get('/', ControllerOrganization.getOrgList)
org.post('/add', ControllerOrganization.addOrg)



module.exports = org