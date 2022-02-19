const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({   
    name: {type: String},
    type: {type: String},
    relatedAssets: {type: Array},
    tags: {type: Array},
    projectIds: [{ type: mongoose.Types.ObjectId, ref: 'Project' }],
    findingIds: [{ type: mongoose.Types.ObjectId, ref: 'Finding' }]
}, {strict : false});

const assetModel = mongoose.model('Asset', assetSchema);
module.exports = assetModel;