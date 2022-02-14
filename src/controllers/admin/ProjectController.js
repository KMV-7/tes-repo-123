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

  const {projectTitle, projectAttribute} = req.params;

  if (projectAttribute){
    const projectQueryRes = await projectModel.findOne({title: projectTitle});
    for (const i in projectQueryRes.assets){
      if (projectQueryRes.assets[i].name === req.query.name && req.body.pentestInfo){
        const fieldToUpdate = projectQueryRes.assets[i].pentestInfo.findings;
        const findingsFromReq = req.body.pentestInfo.findings;
        findingsFromReq.forEach(element => {
          fieldToUpdate.push(element)
        });
        await projectModel.updateOne(projectQueryRes)
        res.send(projectQueryRes)
      }
    }
  }


};


deleteProject = async (req, res) => {

    //TODO:
   

  };


getProject = async (req, res) => {

  const {projectTitle, projectAttribute} = req.params;
  const projectQueryRes = await projectModel.findOne({title: projectTitle});
  const findingsToShow = req.query.name;
  if (!projectAttribute){
   res.send(projectQueryRes);
  }

  if (findingsToShow === 'all'){
    const returnAllFindings = projectQueryRes.assets.pentestInfo;
    let findingsToReturn = [];
    for (const i in projectQueryRes.assets){
      const findingsFromDB = projectQueryRes.assets[i].pentestInfo.findings;
      findingsFromDB.forEach(element => {
        findingsToReturn.push(element)
      });
      
    }
    res.send(findingsToReturn)
  }
   
};

getAllProjects = async (req, res) => {

    //TODO:
    res.send({message: "Hello from get All projects API"})
   
  };

  module.exports = { postProject, updateProject, getProject, getAllProjects, deleteProject };