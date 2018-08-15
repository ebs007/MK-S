var copy = require('copy');

module.exports.copyPng = function() {
    copy([
        './src/**/*.png',
    ], './build', function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
    });
};
