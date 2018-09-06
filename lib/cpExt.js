var fs = require('fs');
var path = require('path');
var loadPath = require('./loadPath.js');
var mountFileVar = require('./mountFileVar.js');
var mkDir = require('./mkDir.js');

module.exports.cpExt = function(souceDir, targetDir, arrExtensions) {


var auxLoadPath = loadPath.loadPath(souceDir, arrExtensions);
var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);
// console.log('auxLoadPath:',auxLoadPath);
// console.log('auxMountFileVar:', auxMountFileVar);
// console.log(auxMountFileVar);

for (var i = 0; i < auxMountFileVar.length-1; i++) {
        // array[i]
// }
// for(var index in auxMountFileVar) {
        // console.log('index:',auxMountFileVar[i]);
        //// console.log('path:',auxMountFileVar[i].filePath);
        //// console.log('pathbuild:',auxMountFileVar[i].auxOnlyDirPath + auxMountFileVar[i].auxOnlyFileName);
    // console.log(path.extname(fileName));
    // mountLess.mountLess(auxMountFileVar[index]);

    // var fileNames = recursiveReadSync(souceDir).filter(function(fileName) {
    //     console.log('rootDir:');
    //     console.log(rootDir);
    //     console.log('loadpath:');
    //     console.log(fileName);
        // console.log(arrExtensions.indexOf(path.extname(fileName)) > -1);
        // if (arrExtensions.indexOf(path.extname(fileName)) > -1){
        mkDir.mkDir(auxMountFileVar[i].auxOnlyDirPath);
        fs.copyFileSync(auxMountFileVar[i].filePath, auxMountFileVar[i].auxOnlyDirPath + auxMountFileVar[i].auxOnlyFileName);
    // }
    // });
}







};
