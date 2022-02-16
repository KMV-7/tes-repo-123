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

module.exports = { createFinding }