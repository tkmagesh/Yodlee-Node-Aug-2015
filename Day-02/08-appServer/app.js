var _middlewares = [];

function app(req, res){
    exec(req, res, _middlewares);
}

app.use = function(middleware){
    _middlewares.push(middleware);
}

function exec(req, res, fns){
    var first = fns[0],
        remaining =fns.slice(1),
        next = function(){
            exec(req, res, remaining);
        };
    if (first){
        first(req, res, next);
    }
}

module.exports = app;
