const http = require('http');
const bl = require('bl')

var list = [];

for (let i = 2; i< process.argv.length; i++) {
    http.get(process.argv[i], (res) => {
        res.pipe(bl((err, data) => {
            data = data.toString();
            
            list.push("kkkk");                       
        }))
    });
}

console.log(list[0]);