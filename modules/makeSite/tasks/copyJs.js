var copy = require('copy');

module.exports.copyJs = function() {
    copy([
        './src/**/*.js',
    ], './build', function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
    });
};
