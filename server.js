const config = require('config')
const app = require('./src/app');
const port = config.get('url.port');

app.listen(port);
console.log(`App listening on port ${port} in environment: ${process.env.NODE_ENV}`)
