const mongoose = require('mongoose');
const config = require('config');

//TODO:
///Add ASSET and decide how to use it => https://docs.google.com/document/d/12jqSfcEEz5iwIZA69uJMNIjmkdnFe-vEDsf5uMVA_1o/edit
//db commands to add admin users if they don't exist already
///decalre indexes for frequently used fields

const connectionString = config.get('mongo.url');


mongoose.connect(connectionString,() => {
    console.log('connected to mongo!')
}, () => {
    console.log(`There was an ERROR connecting to mongo`)
});

//Mitigation
const mitigationSchema = new mongoose.Schema({
    mitigation: {
        task: {type: String},
        status: {type: String},
        cct: {type: String},
        priority: {type: String}
    }
}, {strict : false});

const mitigationModel = mongoose.model('Mitigation', mitigationSchema)

//Pentest
const pentestSchema = new mongoose.Schema({
    findings: {
        type: Array,
        title: {type: String},
        vulnDescription: {type: String},
        findingDescription: {type: String},
        imapct: {type: String},
        execProbability: {type: String},
        severity: {type: String},
        category: {type: String},
        screenshots: [{type: Array}], ///base64 encoded value or better s3 bucket link
        additionalComments: [{type: Array}],
        tags: [{type: Array}],
        mitigation: [mitigationSchema],
    }
    
}, {strict : false});

const pentestModel = mongoose.model('PenTest', pentestSchema)


//Assasment



//Admin
const adminSchema = new mongoose.Schema({   
    name: {type: String},
    email: {type: Number},
    password: {type: String},
    active: {type: Boolean},
    role: {type: String}
}, {strict : false});

const adminModel = mongoose.model('Admin', customerSchema)


module.exports = {customerModel, projectModel};