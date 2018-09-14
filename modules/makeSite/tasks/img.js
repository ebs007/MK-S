var loadPath = require('../../../lib/loadPath.js');
var mountFileVar = require('../../../lib/mountFileVar.js');
var checkExist = require('../../../lib/checkExist.js');
var mountImg = require('../modules/mountImg.js');
// var taskCopyJpg = require('./copyJpg.js');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
var imageminJpegoptim = require('imagemin-jpegoptim');
var imageminPngquant = require('imagemin-pngquant');
const fs = require('fs-extra');
var copy = require('copy');
var path = require('path');


module.exports.img = async function() {
    var result = null;
    console.log('cwd:', process.cwd());
    // var auxLoadPath = loadPath.loadPath('./src/', ['.jpg', '.png']);
    // copy([
    //     './src/new-home-page/assets/img',
    // ], './build/', function(err, files) {
    //     // console.log('error:',err);
    //     // console.log(files);
    //     if (err) throw err;
    //     // `files` is an array of the files that were copied
    // });

    //     fs.copySync('./src/', './build/', (err) => {
    //   if (err) throw err;
    //   console.log('source.txt was copied to destination.txt');
    // }));
    var auxLoadPath = loadPath.loadPath('./src/', ['.jpg', '.png']);
    // console.log('imgtest11:');
    // console.log(auxLoadPath);
    console.log('auxLoadPath:',auxLoadPath);
    var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);
    // console.log('imgtest1:');
    // console.log('auxMountFileVar:',auxMountFileVar);
    // return new Promise((resolve, reject) => {
        for (var i = 0; i <= auxMountFileVar.length-1; i++) {
            // console.log('imgtest: '+auxMountFileVar[index]);
            result =  await mountImg.mountImg(auxMountFileVar[i]);
        }
        // if(result == null)
        // reject('images error');
        // else
        // resolve('images ok');
    // });
    // const files = imagemin('../../../src/new-home-page/assets/img', 'build/images', {
    //     const files = imagemin('../../../src/**/*.{jpg}', '../../../build/**/*', {
    // plugins: [
    //             imageminJpegoptim({
    //                     progressive: false,
    //                     max: 100,
    //                     size:'25%'
    //             }),
    //             imageminPngquant({
    //                     quality: '15'
    //             })
    //     ]
    // });
    //
    // console.log(files);
    //     if(checkExist.checkExist('./src/new-home-page/assets/img/hero/')) {
    //     	console.log('exist');
    //     } else {
    //         console.log('folder not found.');
    //     }
    //     const srcPath = path.join(process.cwd(), './src/new-home-page/assets/img/hero/background-xl.jpg');
    //     const dstPath = path.join(process.cwd(), './build/new-home-page/assets/img/hero/');
    //     console.log(srcPath);
    //     console.log(dstPath);
    // (async () => {
    //     const files = await imagemin([srcPath], dstPath, {
    //         plugins: [
    //                     // imageminJpegoptim({
    //                     //         progressive: false,
    //                     //         max: 100,
    //                     //         size:'80%'
    //                     // }),
    //                     imageminMozjpeg({quality: 70,progressive: false}),
    //                     imageminPngquant({
    //                             quality: '15'
    //                     })
    //             ]
    //     });
    //
    //     console.log(files);
    //     //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
    // })();

};
