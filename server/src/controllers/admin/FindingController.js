const express = require('express');
const router = express.Router();
const findingModel = require('../admin/../../database/schemas/finding');
//add check
//add validationError

/*createFinding = async (req, res) => {
 
    const { title, vulnDescription, findingDescription, imapct, execProbability, severity, category, screenshots, additionalComments, tags, mitigation} = req.body;
    const newFinding = new findingModel({
        title: title,
        vulnDescription: vulnDescription,
        findingDescription: findingDescription,
        imapct: imapct,
        execProbability: execProbability,
        severity: severity,
        category: category,
        screenshots: screenshots, ///base64 encoded value or better s3 bucket link
        additionalComments: additionalComments,
        tags: tags,
        mitigation: mitigation
    });
};*/

const finding = req.body;
const pentestFromReq = req.body.pentest;
const alreadyExistingPentest = await projectModel.findOne({'title': pentestFromReq})
const pentestId = alreadyExistingPentest._id;

let assetsArray = findings.assets;
let alreadyExistingFinding = await findingModel.findOne({title: finding.title, pentestIds: pentestId});
if (!alreadyExistingFinding){
    alreadyExistingFinding = FindingService.insertNewFinding(finding, findingModel, pentestId)
}else{
    findingAlreadyExistsErr = {message: `Finding ${alreadyExistingFinding.title} already exists for pentest ${alreadyExistingPentest.title}!`};
    res.send(findingAlreadyExistsErr)
}

AssetService.assetSaveAndFindingUpdate(assetsArray,alreadyExistingFinding._id,projectId, assetModel, findingModel, projectModel);
module.exports = { createFinding }