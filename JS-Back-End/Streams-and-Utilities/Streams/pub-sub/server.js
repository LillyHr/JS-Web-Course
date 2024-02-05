const http = require('http');
// const logger = require('./logger');
// const reportingService = require('./reportingService');
const messageBroker = require('./messageBroker');
//Initialization
require('./logger');
require('./reportingService');


const server = http.createServer((req, res) => {
    // logger(`URL: ${req.url}, Method: ${req.method}`);
    // reportingService(`URL: ${req.url}, Method: ${req.method}`);
    messageBroker.publish('request', (`URL: ${req.url}, Method: ${req.method}`));

    res.end();
});

server.listen(5001);
console.log('server listening on port 5001 ...');
