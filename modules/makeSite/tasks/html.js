var loadPath = require('../../../lib/loadPath.js');
var mountFileVar = require('../../../lib/mountFileVar.js');
var mountHtml = require('../modules/mountHtml.js');

module.exports.html = async function() {
    var result = null;
    var auxLoadPath = loadPath.loadPath('./build/', ['.html']);
    var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);

    for (var i = 0; i <= auxMountFileVar.length-1; i++) {
        result = await mountHtml.mountHtml(auxMountFileVar[i]);
    }

};