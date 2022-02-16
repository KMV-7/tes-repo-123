const express = require('express');
const router = express.Router();
const CustomerAdminAPI = require('../../controllers/admin/CustomerController');
const ProjectAdminAPI = require('../../controllers/admin/ProjectController');
const PentestAdminAPI = require('../../controllers/admin/PentestController');
const AssetAdminAPI = require('../../controllers/admin/AssetController');

//Customers
createCustomerRequest = router.post(`/admin/customers/new`, CustomerAdminAPI.createCustomer);


//Projects
createProjectRequest = router.post(`/admin/projects/:client/new`, ProjectAdminAPI.createProject);

//Pentest
createProjectRequest = router.post(`/admin/:projectname/pentest/new`, PentestAdminAPI.createPentest);

//Asset
createAssettRequest = router.post(`/admin/assets/:projectname/new`, AssetAdminAPI.createAsset);




module.exports = router;
