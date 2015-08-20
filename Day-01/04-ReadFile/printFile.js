var fs = require('fs');
/*
Sync
var fileContents = fs.readFileSync("sample.txt", {encoding : 'utf8'})
*/

fs.readFile("sample.txt", {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log(err);
        return;
    }
    console.log(fileContents);
});
console.log("done");
