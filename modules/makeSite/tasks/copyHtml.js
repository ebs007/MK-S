var copy = require('copy');

module.exports.copyHtml = function() {
    copy([
        './src/**/*.html',
    ], './build', function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
    });
};
