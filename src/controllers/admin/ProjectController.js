const express = require('express');
const router = express.Router();
const {projectModel} = require('../admin/../../database/database');
//add check
//add validationError

postProject = async (req, res) => {
 
    let {title,leadConsultant,scope,startDate,endDate,specialRequirements,executiveSummary, customerName} = req.body;
    const newProject = new projectModel({
      title: title,
      leadConsultant: leadConsultant,
      scope: scope,
      startDate: startDate,
      endDate: endDate,
      specialRequirements: specialRequirements,
      executiveSummary: executiveSummary,
      customerName: customerName,
      pentestInfo:{findings: req.body.pentestInfo.findings}
  
    });
    if (process.env.NODE_ENV === 'local'){savedProject = await newProject.save()};
    res.send(savedProject)


};

updateProject = async (req, res) => {


  };


deleteProject = async (req, res) => {

    //TODO:
   

  };


getProject = async (req, res) => {

  res.send({message: "Hello from get project API"})
   
  };

getAllProjects = async (req, res) => {

    //TODO:
    res.send({message: "Hello from get All projects API"})
   
  };

  module.exports = { postProject, updateProject, getProject, getAllProjects, deleteProject };