const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    list.forEach(element => {
        if(path.extname(element).slice(1) === process.argv[3])
                console.log(element); 
    }); 
});