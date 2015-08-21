var path = require('path');
var fs = require('fs');

var staticResourceExtns = ['.html','.css','.js','.png','.ico','.jpg','.xml','.json'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
    if (isStatic(req.url.pathname)){
        var resourceUrl = req.url.pathname === '/' ? '/index.html' : req.url.pathname;

        var resourcePath = path.join(__dirname, resourceUrl);
        if (!fs.existsSync(resourcePath)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath).pipe(res);
    } else {
        next();
    }
}
