const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);

let result = buffer.toString().split("\n");

console.log((result.length-1).toString());

