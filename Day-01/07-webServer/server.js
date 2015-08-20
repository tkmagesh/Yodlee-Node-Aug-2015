var http = require('http');
var path = require('path');
var fs = require('fs');

var staticResourceExtns = ['.html','.css','.js','.png','.ico','.jpg','.xml','.json'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
    /*
    /calculator?operation=add&n1=100&n2=200
    */
    req.url = url.parse(req.url, true);
    if (isStatic(req.url.pathname)){
        var resourceUrl = req.url.pathname === '/' ? '/index.html' : req.url.pathname;

        var resourcePath = path.join(__dirname, resourceUrl);
        if (!fs.existsSync(resourcePath)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath).pipe(res);
    } else if (req.url.pathname === '/calculator'){

    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log("server listening on port 8080");
