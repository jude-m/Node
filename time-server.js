const net = require('net')

const server = net.createServer((socket) => {
    socket.end(getTimestamp() + "\n")
})
server.listen(process.argv[2], () => console.log("server listening on port " + process.argv[2]));

//function to return timestamp
function getTimestamp(){
    const date = new Date()
    return date.getFullYear().toString() + "-" + zeroFill((date.getMonth() + 1).toString()) + "-" + zeroFill(date.getDate().toString()) + " " + zeroFill(date.getHours().toString()) + ":" + zeroFill(date.getMinutes().toString())
}

//function to format inputs to zero-fill strings
function zeroFill(digit) {
    return digit.length === 2 ? digit : "0" + digit;
}