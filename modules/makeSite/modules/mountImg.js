var fs = require('fs');
var path = require('path');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
var imageminJpegoptim = require('imagemin-jpegoptim');
var imageminPngquant = require('imagemin-pngquant');
var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../lib/mkDir.js');
var checkExist = require('../../../lib/checkExist.js');

module.exports.mountImg = async function (fileVar) {

    try {

    var someError = null;
    var resultFiles = null;

    // if(checkExist.checkExist('./src/new-home-page/assets/img/hero/')) {
    // 	console.log('exist');
    // } else {
    //     console.log('folder not found.');
    // }
    // console.log('fileVar.filePath:',fileVar.filePath);
    // console.log('fileVar.auxOnlyExtension:',fileVar.auxOnlyExtension);
    // console.log('fileVar.auxOnlyDirPath:',fileVar.auxOnlyDirPath);
    // console.log('fileVar.auxOnlyFileName:',fileVar.auxOnlyFileName);
    // auxOnlyExtension
    // fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName
    // const srcPath = path.join(process.cwd(), './src/new-home-page/assets/img/hero/background-xl.jpg');
    // const dstPath = path.join(process.cwd(), './build/new-home-page/assets/img/hero/');
    const srcPath = path.join(process.cwd(), fileVar.filePath);
    const dstPath = path.join(process.cwd(), fileVar.auxOnlyDirPath);
    console.log('srcPath:',srcPath);
    console.log('dstPath:',dstPath);
    // return new Promise((resolve, reject) => {
        // (async () => {
            const file = await imagemin([srcPath], dstPath, {
                plugins: [
                    // imageminJpegoptim({
                    //         progressive: false,
                    //         max: 100,
                    //         size:'80%'
                    // }),
                    imageminMozjpeg({quality: 70,progressive: false}),
                    imageminPngquant({
                        quality: '40'
                    })
                ]
            });

console.log('Image compress: ', file);
            //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
        // })();


    } catch(err) {
        console.log('mountImg error: ', err);
      // Handle error
    }

};
