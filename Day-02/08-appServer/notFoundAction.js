module.exports = function(req, res){
    console.log("not found action");
    res.statusCode = 404;
    res.end();
}
