var copy = require('copy');

module.exports.copyCss = function() {
    copy([
        './src/**/*.css',
    ], './build', function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
    });
};
