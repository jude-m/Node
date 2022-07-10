const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
    if (req.method == "POST") {
        req.pipe(map( (data => {
            return data.toString().toUpperCase()
        }))).pipe(res)

    } else {
        res.end("Only accepting POST requests!")
    }

})
server.listen(process.argv[2])


//First attemp without external packages.
// const server = http.createServer(function (req, res) {
//     if (req.method == "POST") {
//         let body = ""
//         req.on('data', (data) => {
//             body += data
//         })
//         req.on('end', () => {
//             res.end(body.toString().toUpperCase())
//         })
//     } else {
//         res.end("Only accepting POST requests!")
//     }

// })
// server.listen(process.argv[2])