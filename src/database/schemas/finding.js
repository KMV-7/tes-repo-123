const mongoose = require('mongoose');

const findingSchema = new mongoose.Schema({
    
    title: {type: String},
    vulnDescription: {type: String},
    findingDescription: {type: String},
    imapct: {type: String},
    execProbability: {type: String},
    severity: {type: String},
    category: {type: String},
    screenshots: {type: Array}, ///base64 encoded value or better s3 bucket link
    additionalComments: {type: Array},
    tags: {type: Array},
    pentestIds: [{ type: mongoose.Types.ObjectId, ref: 'Pentest' }],
    assetIds: [{ type: mongoose.Types.ObjectId, ref: 'Asset' }]
    
    
}, {strict : false});

const findingModel =  mongoose.model('Finding', findingSchema)

module.exports = findingModel;