const http = require('http');
const bl = require('bl')

http.get(process.argv[2], (res) => {
    res.pipe(bl((err, data) => {
        data = data.toString();
        console.log(data.length)
        console.log(data)
    }))
});

// http.get(process.argv[2], (res) => {
//     res.setEncoding('utf8');

//     var result = "";
//     res.on('data', (data) =>{
//         result += data
//     });

//     res.on('end', () => {
//         console.log(result.length);
//         console.log(result);
//     })

//     res.on('error', console.error)
// }).on('error', console.error);