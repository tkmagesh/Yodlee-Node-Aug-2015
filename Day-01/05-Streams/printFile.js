var fs = require("fs");

var stream = fs.createReadStream('sample.txt', {encoding : 'utf8'});

/*
data, error, close, end, open
*/


/*var readCount = 0;
stream.on('data', function(chunk){
    ++readCount;
    console.log(chunk);
});

stream.on('end', function(){
    console.log("Done - with readCount = ", readCount);
});*/


var readCount = 0
stream.on('data', function(chunk){
    ++readCount;
});

stream.on('end', function(){
    console.log("Done - with readCount = ", readCount);
});

stream.pipe(process.stdout);
