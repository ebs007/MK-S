var copy = require('copy');

module.exports.copyJpg = function() {
    copy([
        './src/**/*.jpg',
    ], './build', function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
    });
};
