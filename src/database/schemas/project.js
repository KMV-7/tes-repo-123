const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type: String},
    leadConsultant: {type: String},
    scope: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    specialRequirements: [{type: String}],
    executiveSummary: {type: String},
    customer: [{ type: mongoose.Types.ObjectId, ref: 'Customer' }],
    asset: [{ type: mongoose.Types.ObjectId, ref: 'Asset' }]
  
    
}, {strict : false});

const projectModel =  mongoose.model('Project', projectSchema);

module.exports = projectModel;