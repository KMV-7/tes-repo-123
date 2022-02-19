const express = require('express');
const adminRouter = require('./routes/admin/AdminRouter');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(adminRouter);



module.exports = app;

