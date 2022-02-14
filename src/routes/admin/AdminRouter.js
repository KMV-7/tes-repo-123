const express = require('express');
const router = express.Router();
const CustomerAdminAPI = require('../../controllers/admin/CustomerController');
const ProjectAdminAPI = require('../../controllers/admin/ProjectController');

//Customers
getAllCustomersRequest = router.get(`/admin/customers/all`, CustomerAdminAPI.getAllCustomers);
postCustomerRequest = router.post(`/admin/customers/new`, CustomerAdminAPI.postCustomer);


//Projects
getProjectRequest = router.get(`/admin/projects/:projectTitle/:projectAttribute?/:projectAttributeName?/:findings?`, ProjectAdminAPI.getProject);
getAllProjectsRequest = router.get(`/admin/projects/all`, ProjectAdminAPI.getAllProjects);
postProjectRequest = router.post(`/admin/projects/new`, ProjectAdminAPI.postProject);
updateProjectRequest = router.patch(`/admin/projects/:projectTitle/:projectAttribute?`, ProjectAdminAPI.updateProject);


module.exports = router;
