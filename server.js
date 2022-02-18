const config = require('config')
const app = require('./src/app');
const port = config.get('url.port');
const mongoose = require('mongoose');
const connectionString = config.get('mongo.url');



app.listen(port);
console.log(`App listening on port ${port} in environment: ${process.env.NODE_ENV}`);

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(`Mongo connection established on host: ${mongoose.connections[0].host}, port: ${mongoose.connections[0].port} for db: ${mongoose.connections[0].name}`);
    },
    err => { 
        console.log('error: '+ err)
    }
);