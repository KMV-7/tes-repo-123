const express = require('express');
const router = express.Router();
const {projectModel} = require('../admin/../../database/database');
//add check
//add validationError

postProject = async (req, res) => {
 
    let {title,leadConsultant,scope,startDate,endDate,specialRequirements,executiveSummary, customerName, assets} = req.body;
    const newProject = new projectModel({
      title: title,
      leadConsultant: leadConsultant,
      scope: scope,
      startDate: startDate,
      endDate: endDate,
      specialRequirements: specialRequirements,
      executiveSummary: executiveSummary,
      customerName: customerName,
      assets: assets
      //pentestInfo:{findings: req.body.pentestInfo.findings}
  
    });
    if (process.env.NODE_ENV === 'local'){savedProject = await newProject.save()};
    res.send(savedProject)


};

updateProject = async (req, res) => {

  let {projectTitle, projectAttribute} = req.params;

  if (projectAttribute){
    const projectQueryRes = await projectModel.findOne({title: projectTitle});
    console.log(req.query.name)
    for (const i in projectQueryRes.assets){
      if (projectQueryRes.assets[i].name === req.query.name && req.body.pentestInfo){
        const fieldToUpdate = projectQueryRes.assets[i].pentestInfo;
        const update = req.body.pentestInfo;
        projectModel.updateOne({fieldToUpdate: update})
      }
  }
    }


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