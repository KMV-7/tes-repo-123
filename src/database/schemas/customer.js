const mongoose = require('mongoose');

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

const customerModel =  mongoose.model('Customer', customerSchema);
module.exports = customerModel;