const mongoose = require('mongoose');
const config = require('config');

///Add ASSET and decide how to use it => https://docs.google.com/document/d/12jqSfcEEz5iwIZA69uJMNIjmkdnFe-vEDsf5uMVA_1o/edit

const connectionString = config.get('mongo.url');

///decalre indexes for frequently used fields

mongoose.connect(connectionString, () => {
    console.log('connected to mongo!')
    //db commands to add admin users if they don't exist already
}, () => {
    console.log(`There was an ERROR connecting to mongo`)
});

//Mitigation
const mitigationSchema = new mongoose.Schema({
    mitigation: {
        task: {type: String, required: true},
        status: {type: String, required: true},
        cct: {type: String, required: true},
        priority: {type: String, required: true}
    }
});

//const mitigationModel = mongoose.model('Mitigation', mitigationSchema)

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
    
    //basically admin should be able to create projects with empty values because the assesment and pentest results wont 
    //be available at that moment
});

//const pentestModel = mongoose.model('PenTest', pentestSchema)


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
    
});

//const assessmentModel = mongoose.model('Assessment', assessmentSchema)


//Customer
const customerSchema = new mongoose.Schema({   
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    active: {type: Boolean, required: true},
    role: {type: String, required: true},
    size: {type: Number, required: true},
    vertical: {type: String, required: true},
    tags: [{type: Array, required: true}],
});

const customerModel = mongoose.model('Customer', customerSchema);


///Project
const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    leadConsultant: {type: String, required: true},
    scope: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    specialRequirements: [{type: String}],
    executiveSummary: {type: String, required: true},
    customerName: {type: String, required: true},
    pentestInfo: pentestSchema,
    assessmentInfo: assessmentSchema

    //you can have both or neither or only one or none
    
});

const projectModel = mongoose.model('Project', projectSchema);

//Admin
const adminSchema = new mongoose.Schema({   
    name: {type: String, required: true},
    email: {type: Number, required: true},
    password: {type: String, required: true},
    active: {type: Boolean, required: true},
    role: {type: String, required: true}
});

const adminModel = mongoose.model('Admin', customerSchema)


module.exports = {customerModel, projectModel};