const mongoose = require('mongoose');
const config = require('config');

//TODO:
///Add ASSET and decide how to use it => https://docs.google.com/document/d/12jqSfcEEz5iwIZA69uJMNIjmkdnFe-vEDsf5uMVA_1o/edit
//db commands to add admin users if they don't exist already
///decalre indexes for frequently used fields

const connectionString = config.get('mongo.url');

///decalre indexes for frequently used fields

mongoose.connect(connectionString,() => {
    console.log('connected to mongo!')
    //db commands to add admin users if they don't exist already
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
const assessmentSchema = new mongoose.Schema({
    assessmentRisk: {
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
            mitigation: [mitigationSchema]
        }
    }
    //basically admin should be able to create projects with empty values because the assesment and pentest results wont 
    //be available at that moment
    
}, {strict : false});

const assessmentModel = mongoose.model('Assessment', assessmentSchema)


//Asset
const assetSchema = new mongoose.Schema({   
    name: {type: String},
    type: {type: String},
    relatedAssets: {type: Array},
    tags: {type: Array},
    projectTitle: {type: String}, ///FK
    pentestInfo: pentestSchema,
    assessmentInfo: assessmentSchema
}, {strict : false});

const assetModel = mongoose.model('Asset', assetSchema);


//Customer
const customerSchema = new mongoose.Schema({   
    name: {type: String},
    email: {type: String},
    password: {type: String},
    active: {type: Boolean},
    role: {type: String},
    size: {type: Number},
    vertical: {type: String},
    tags: [{type: Array}],
}, {strict : false});

const customerModel = mongoose.model('Customer', customerSchema);


///Project
const projectSchema = new mongoose.Schema({
    title: {type: String},
    leadConsultant: {type: String},
    scope: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    specialRequirements: [{type: String}],
    executiveSummary: {type: String},
    customerName: {type: String}, ///FK
    assets: [assetSchema],

    //you can have both or neither or only one or none
    
}, {strict : false});

const projectModel = mongoose.model('Project', projectSchema);

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