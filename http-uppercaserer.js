var http = require('http'),
    map  = require('through2-map'),
    port = process.argv[2];

var server = http.createServer(function (request, response) {
    if (request.method != 'POST') {
        return request.end('Not a POST Request\n');
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response)
});

server.listen(Number(port));
