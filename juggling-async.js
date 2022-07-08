const http = require('http');
const bl = require('bl')

var list = [];
var count = 0;

for (let i = 2; i < process.argv.length; i++) {
    httpGet(i);
}

function httpGet(index) {
    http.get(process.argv[index], (res) => {
        res.pipe(bl((err, data) => {
            if (err) {
                return console.error(err)
            }

            list[index] = data.toString();
            count++;

            if (count === process.argv.length - 2) {
                list.forEach((list) => console.log(list));
            }
        }))
    });
}