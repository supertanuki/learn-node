var filtered_ls = require('./filtered-files-module.js'),
    directory   = process.argv[2],
    extension   = process.argv[3];

filtered_ls(directory, extension, function (err, data) {
    if (err) {
        console.log('Error:');
        console.log(err);
    }

    console.log(data.join('\n'));
});
