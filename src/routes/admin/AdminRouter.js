const express = require('express');
const router = express.Router();
const CustomerAdminAPI = require('../../controllers/admin/CustomerController');
const ProjectAdminAPI = require('../../controllers/admin/ProjectController');
const AssetAdminAPI = require('../../controllers/admin/AssetController');

//Customers
getAllCustomersRequest = router.get(`/admin/customers/all`, CustomerAdminAPI.getAllCustomers);
postCustomerRequest = router.post(`/admin/customers/new`, CustomerAdminAPI.createCustomer);


//Projects
getProjectRequest = router.get(`/admin/projects/`, ProjectAdminAPI.getProject);
getAllProjectsRequest = router.get(`/admin/projects/all`, ProjectAdminAPI.getAllProjects);
createProjectRequest = router.post(`/admin/projects/:client/new`, ProjectAdminAPI.createProject);
updateProjectRequest = router.patch(`/admin/projects/:projectTitle/:projectAttribute?`, ProjectAdminAPI.updateProject);

//Asset
createAssettRequest = router.post(`/admin/assets/:projectname/new`, AssetAdminAPI.createAsset);


module.exports = router;
