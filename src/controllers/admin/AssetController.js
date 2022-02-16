const express = require('express');
const router = express.Router();
const assetModel = require('../admin/../../database/schemas/asset');
const projectModel = require('../admin/../../database/schemas/project');
//add check
//add validationError

createAsset = async (req, res) => {
 
    const assets = req.body.assets;
    const projectName = Object.values(req.params);
    const project = await projectModel.findOne({'name': projectName})
    await assets.forEach(element => {
        const newAsset = new assetModel({
            name: element.name,
            type: element.type,
            relatedAssets: element.relatedAssets,
            tags: element.tags,
            //project: project._id,
        });
        savedAsset =  newAsset.save();
    });



    res.send({message: `Assets successfully added to ${projectName}`})
    
};


module.exports = { createAsset }