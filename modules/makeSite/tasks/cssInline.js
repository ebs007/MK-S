var loadPath = require('../../../lib/loadPath.js');
var mountFileVar = require('../../../lib/mountFileVar.js');
var mountCssInline = require('../modules/mountCssInline.js');

module.exports.cssInline = function() {
    var auxLoadPath = loadPath.loadPath('./src/', ['.html']);
    var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);

    for (var i = 0; i <= auxMountFileVar.length-1; i++) {
        mountCssInline.mountCssInline(auxMountFileVar[i]);
    }
};

// var lessTest = require('./Less.js');
// lessTest.less();
