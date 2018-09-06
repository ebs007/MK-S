var fs = require('fs');

module.exports.checkExist = function(dir) {
    return fs.existsSync(dir) ? true : false ;
    };
