var fs        = require('fs'),
    path      = require('path'),
    directory = process.argv[2],
    extension = process.argv[3];

fs.readdir(directory, function (err, files) {
    files.forEach(function (file) {
        if (path.extname(file) === '.' + extension) {
            console.log(file)
        }
    })
});
