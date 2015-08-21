var http = require('http');
var path = require('path');
var dataParser = require('./dataParser');
var staticResourceServer = require('./staticResourceServer');
var calculatorProcessor = require('./calculatorProcessor');
var notFoundAction = require('./notFoundAction');
var app = require('./app');

app.use(dataParser);
var staticResourcePath = path.join(__dirname, '/client');
app.use(staticResourceServer(staticResourcePath));
app.use(calculatorProcessor);
app.use(notFoundAction);

var server = http.createServer(app);
server.listen(8080);
console.log("server listening on port 8080");
