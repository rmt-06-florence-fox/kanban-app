const { ControllerOrganization } = require ('../controllers')
const org = require('express').Router()


org.get('/', ControllerOrganization.getOrgList)
// org.get('/', ControllerOrganization.getOrg)



module.exports = org