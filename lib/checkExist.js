var fs = require('fs');

module.exports.checkExist = function(dir) {
    return fs.existsSync('./build') ? true : false ;
    };
