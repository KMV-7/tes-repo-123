const express = require('express');
const router = express.Router();
const CustomerAdminAPI = require('../../controllers/admin/CustomerController');
const ProjectAdminAPI = require('../../controllers/admin/ProjectController');

//Customers
getAllCustomersRequest = router.get(`/api/1.0/admin/get/customers/all`, CustomerAdminAPI.getAllCustomers);
postCustomerRequest = router.post(`/api/1.0/admin/post/customers/new`, CustomerAdminAPI.postCustomer);


//Projects
getProjectRequest = router.get(`/api/1.0/admin/get/project`, ProjectAdminAPI.getProject);
getAllProjectsRequest = router.get(`/api/1.0/admin/get/projects/all`, ProjectAdminAPI.getAllProjects);
postProjectRequest = router.post(`/api/1.0/admin/post/projects/new`, ProjectAdminAPI.postProject);
updateProjectRequest = router.patch(`/api/1.0/admin/patch/projects/:projectTitle/:projectAttribute?`, ProjectAdminAPI.updateProject);


module.exports = router;
