const mongoose = require('mongoose');

const mitigationSchema = new mongoose.Schema({
    
    task: {type: String},
    status: {type: String},
    cct: {type: String},
    priority: {type: String}
    
}, {strict : false});

const mitigationModel = mongoose.model('Mitigation', mitigationSchema)

module.exports = mitigationModel;