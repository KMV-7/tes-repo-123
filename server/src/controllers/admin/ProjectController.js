const express = require('express');
const router = express.Router();
const projectModel = require('../admin/../../database/schemas/project');
const customerModel = require('../admin/../../database/schemas/customer');

//add check
//add validationError

createProject = async (req, res) => {
 
    const { title,leadConsultant,scope,startDate,endDate,specialRequirements,executiveSummary } = req.body;
    const customerName = Object.values(req.params);
    const customer = await customerModel.findOne({'name': customerName})
    const newProject = new projectModel({
      title: title.replace(/\s+/g, "").toLowerCase(), //this will be handled in express validation
      leadConsultant: leadConsultant,
      scope: scope,
      startDate: startDate,
      endDate: endDate,
      specialRequirements: specialRequirements,
      executiveSummary: executiveSummary,
      customer: customer._id
    });
  
    savedProject = await newProject.save();
    res.send(savedProject)


};

getAllProjectsForCustomer = async (req, res) => {
 
  const customerName = Object.values(req.params);
  const customer = await customerModel.findOne({'name': customerName})
  const existingProject = await projectModel.find({'customer': customer._id})

  res.json(existingProject)
  

};

module.exports = { createProject, getAllProjectsForCustomer };