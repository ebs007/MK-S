var loadPath = require('../modules/load/loadPath.js');
var mountFileVar = require('../modules/mount/mountFileVar.js');
var mountLess = require('../modules/mount/mountLess.js');

module.exports.less = function() {
    var auxLoadPath = loadPath.loadPath('.less');
    var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);

    for(var index in auxMountFileVar) {
        mountLess.mountLess(auxMountFileVar[index]);
    }
};

// var lessTest = require('./Less.js');
// lessTest.less();
