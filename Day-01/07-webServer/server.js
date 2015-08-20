var http = require('http');
var server = http.createServer(function(req, res){
    console.log("a new connection is established for ", req.url);
    /*
    1. resource ? req.url
        currdir -> __dirname
        use path.join for creating the resource path

    2. fs.exists, fs.existsSync
    3. if file not exists
        res.statusCode = 404;
        res.end();

    */
    res.write('<h1>Welcome to node</h1>');
    res.end();
});
server.listen(8080);
console.log("server listening on port 8080");
