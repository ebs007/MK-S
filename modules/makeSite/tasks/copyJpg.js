const fs = require('fs-extra');

module.exports.copyJpg = function() {
    // copy([
    //     './src/**/*.jpg',
    // ], './build/', function(err, files) {
    //     // console.log('error:',err);
    //     // console.log(files);
    //     if (err) throw err;
    //     // `files` is an array of the files that were copied
    // });


    const filterFunc = (src, dest) => {
    // your logic here
    // it will be copied if return true
    // (arrExtensions.indexOf(path.extname(fileName)) > -1)

console.log(src, dest);
    }
    fs.copySync('./src/', './build/', { filter: filterFunc });



function (rootDir, arrExtensions) { // ['.jpg', 'png', '.js', '.css']



    var fileNames = recursiveReadSync(rootDir).filter(function(fileName) {
        console.log('rootDir:');
        console.log(rootDir);
        console.log('loadpath:');
        console.log(fileName);
        // console.log(arrExtensions.indexOf(path.extname(fileName)) > -1);
        if (arrExtensions.indexOf(path.extname(fileName)) > -1){
        fs.copySync(path.extname(fileName), './build/', { filter: filterFunc });
    }
    });




};
