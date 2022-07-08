const fs = require('fs');

fs.readFile(process.argv[2],'utf-8', writeLog);

//just trying out passing a function
function writeLog(err, data) {
    console.log(data.split("\n").length-1);
}