var copy = require('copy');

module.exports.copyGif = function() {
    copy([
        './src/**/*.gif',
    ], './build', function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
    });
};
