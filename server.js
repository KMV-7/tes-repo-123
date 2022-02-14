const config = require('config')
const app = require('./src/app');
const port = config.get('url.port');
const mongoose = require('mongoose');
const connectionString = config.get('mongo.url');



app.listen(port);
console.log(`App listening on port ${port} in environment: ${process.env.NODE_ENV}`);

mongoose.connect(connectionString,() => {
    console.log('connected to mongo!')
}, () => {
    console.log(`There was an ERROR connecting to mongo`)
});
