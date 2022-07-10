const http = require('http')
const url = require('url')


const server = http.createServer(function (req, res) {
    if (req.method == "GET") {
        const reqUrl = url.parse(req.url, true)

        if (reqUrl.pathname === "/api/parsetime") {
            let date = new Date(reqUrl.query.iso)

            const obj = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify(obj))
        }

        if (reqUrl.pathname === '/api/unixtime') {
            let date = new Date(reqUrl.query.iso)

            const obj = {
                unixtime: date.getTime()
            }

            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify(obj))
        }
    } else {
        res.end("Only accepting GET requests!")
    }

})
server.listen(process.argv[2])