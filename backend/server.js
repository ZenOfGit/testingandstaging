const http = require('http');

const app = require('./app');

const port = process.env.PORT || 3000;

app.set('port', port);  // set the port in the app to our variable

const server = http.createServer(app);  // pass in the app.js file with expess framework

server.listen(port);
