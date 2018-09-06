var loadPath = require('../../../lib/loadPath.js');
var mountFileVar = require('../../../lib/mountFileVar.js');
var mountLess = require('../modules/mountLess.js');

module.exports.less = function() {
    var auxLoadPath = loadPath.loadPath('./src/', ['.less']);
    var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);

    for (var i = 0; i <= auxMountFileVar.length-1; i++) {
        mountLess.mountLess(auxMountFileVar[i]);
    }
};

// var lessTest = require('./Less.js');
// lessTest.less();
