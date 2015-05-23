var http = require('http'),
    bl   = require('bl'),
    urls = [process.argv[2], process.argv[3], process.argv[4]],
    data = [];

urls.forEach(function (url) {
    http.get(url, function (response) {
        response.setEncoding('utf8');

        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            aggregateData(url, data.toString());
        }));
    });
});

function aggregateData(urlOfData, str) {
    data[urlOfData] = str;

    var notReady = false;

    // not ready?
    urls.forEach(function (url) {
        if(typeof data[url] == "undefined") {
            notReady = true;
            return;
        }
    });

    if (!notReady) {
        // ready, show data
        urls.forEach(function (url) {
            console.log(data[url]);
        });
    }
}
