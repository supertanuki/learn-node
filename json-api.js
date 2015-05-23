var http = require('http'),
    url  = require('url'),
    port = process.argv[2];

var server = http.createServer(function (request, response) {
    var _get   = url.parse(request.url, true);
    var mydate = new Date(_get.query.iso);
    var result = {};

    if (_get.pathname == '/api/parsetime') {
        result = {
            hour: mydate.getHours(),
            minute: mydate.getMinutes(),
            second: mydate.getSeconds()
        };

    } else {
        result = {
            unixtime: mydate.getTime()
        };
    }

    return response.end(JSON.stringify(result));
});

server.listen(Number(port));
