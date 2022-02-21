const express = require('express');
const adminRouter = require('./routes/admin/AdminRouter');
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(adminRouter);



module.exports = app;

