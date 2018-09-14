var loadPath = require('../../../lib/loadPath.js');
var mountFileVar = require('../../../lib/mountFileVar.js');
var mountCssInline = require('../modules/mountCssInline.js');
// var cssInline = require('./cssInline.js');

module.exports.cssInline = async function() {
    var result = null;
    var auxLoadPath = loadPath.loadPath('./build/', ['.html']);
    var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);

    // return new Promise((resolve, reject) => {

    for (var i = 0; i <= auxMountFileVar.length-1; i++) {
        result = await mountCssInline.mountCssInline(auxMountFileVar[i]);
    }

    // if(result == null)
    // resolve('inline ok');
    // else
    // reject('inline error');
    // });
};


// cssInline.cssInline();
