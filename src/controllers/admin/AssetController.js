const express = require('express');
const router = express.Router();
const assetModel = require('../admin/../../database/schemas/asset');
//add check
//add validationError

createAsset = async (req, res) => {
 
    let { name, type, relatedAssets, tags } = req.body;
    const newAsset = new assetModel({
        name: name,
        type: type,
        relatedAssets: relatedAssets,
        tags: tags,
        projectTitle: projectTitle
    });

    savedAssets = await newAsset.save();
    res.send(savedCustomer)
};