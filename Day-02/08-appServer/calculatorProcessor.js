
var calculator = require('./calculator');
var qs = require('querystring');

module.exports = function(req, res){
    console.log("calculator processor");
    if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var operation = req.url.query.operation,
            n1 = parseInt(req.url.query.n1),
            n2 = parseInt(req.url.query.n2),
            result = calculator[operation](n1,n2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(reqData);
             var operation = data.operation,
                n1 = parseInt(data.n1),
                n2 = parseInt(data.n2),
                result = calculator[operation](n1,n2);
            res.write(result.toString());
            res.end();
        })
    }
}
