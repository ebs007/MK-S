var copy = require('copy');

module.exports.copySvg = function() {
    copy([
        './src/**/*.svg',
    ], './build', function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
    });
};
