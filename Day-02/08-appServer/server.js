var http = require('http');
var dataParser = require('./dataParser');
var staticResourceServer = require('./staticResourceServer');
var calculatorProcessor = require('./calculatorProcessor');
var notFoundAction = require('./notFoundAction');




/*
1. Data Parsing
2. Serving static resource
3. Processing requests for calculator (get & post)
4. serving 404
*/
var server = http.createServer(function(req, res){
    dataParser(req, res);
    staticResourceServer(req, res);
    calculatorProcessor(req, res);
    notFoundAction(req, res);
});
server.listen(8080);
console.log("server listening on port 8080");
