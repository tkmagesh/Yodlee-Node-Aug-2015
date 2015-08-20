var calculator = require('./calculator');
var fs = require('fs');

fs.readFile('data.csv', {encoding :'utf8'},function(err, contents){
    if (err){
        console.log(error);
        return;
    };
    contents.split('\n').forEach(function(line){
        var fields = line.split(','),
            operation = fields[0],
            n1 = parseInt(fields[1]),
            n2 = parseInt(fields[2]);
        var result = calculator[operation](n1,n2);
        console.log(result);

    });
});
