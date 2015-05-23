var net  = require('net'),
    port = process.argv[2];

var server = net.createServer(function (socket) {
    socket.end(now() + "\n");
});

server.listen(Number(port));

/**
 * Return now in the format "YYYY-MM-DD hh:mm"
 *
 * @returns {string}
 */
function now() {
    var now = new Date();

    return now.getFullYear()
        + '-'
        + addZeroPrefixToInteger(now.getMonth()+1)
        + '-'
        + addZeroPrefixToInteger(now.getDate())
        + ' '
        + addZeroPrefixToInteger(now.getHours())
        + ':'
        + addZeroPrefixToInteger(now.getMinutes());
}

/**
 * Add a zero prefix when needed
 *
 * @param value
 * @returns string
 */
function addZeroPrefixToInteger(value) {
    if (value < 10) {
        return '0' + value;
    }

    return value;
}
