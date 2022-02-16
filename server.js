const config = require('config')
const app = require('./src/app');
const port = config.get('url.port');
const mongoose = require('mongoose');
const connectionString = config.get('mongo.url');



app.listen(port);
console.log(`App listening on port ${port} in environment: ${process.env.NODE_ENV}`);

/*mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },() => {
    console.log(mongoose.connections[0])
}, () => {
    console.log(`There was an ERROR connecting to mongo`)
});*/

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(mongoose.connections[0])
    },
    err => { 
        console.log('error: '+ err)
    }
);