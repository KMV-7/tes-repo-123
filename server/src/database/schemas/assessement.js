const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    imapct: {type: String},
    execProbability: {type: String},
    severity: {type: String},
    category: {type: String},
    inherantRisk: {type: String},
    residualRisk: {type: String},
    appetite: [{type: String}],
    threats: [{title: {type: String}, description: {type: String}
    }],
    control: {
        title: {type: String},
        description: {type: String},
        score: {type: Number},
        weight: {type: Number},
        domain: {type: String},
    }
    
}, {strict : false});

const assessmentModel = mongoose.model('Assessment', assessmentSchema);
module.exports = assessmentModel;
