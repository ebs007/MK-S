var fs = require('fs');
var path = require('path');
var baser = require('base64-css');
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
const url = require("postcss-url")
const options = {
	url: 'inline'
};
// var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../lib/mkDir.js');
// const util = require('util');

module.exports.mountBase64 = async function (fileVar) {
	const srcPath = path.join(process.cwd(), fileVar.filePath);
	const dstPath = path.join(process.cwd(), fileVar.auxOnlyDirPath);

	cssBuilded = path.join(process.cwd(), fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName);
	// console.log('cssBuilded: ', fileVar.content);

	// 		await baser(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, 'build/new-home-page/', function(err,res){
	//
	// 			// resultB64 = res;
	// // console.log('resultB64: ', resultB64);
	// 			console.log('res: ', res);
	// 			if (!err)
	// 			console.log(err);
	// 		});

	await postcss()
	.use(url(options))
	.process(fileVar.content, {
		from: fileVar.auxOnlyDirPath,
		// from: cssBuilded,
		// to: fileVar.auxOnlyDirPath,
		file: cssBuilded
	})
	// .process(cssBuilded, {
	// from: 'build/new-home-page/style/'
	// })
	.then(result => {
		console.log(result);
		fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, result.css);
		// fs.writeFile('dest/app.css', result.css, () => true)
		// if ( result.map ) {
		//   fs.writeFile('dest/app.css.map', result.map, () => true)
		// }
	});

	// console.log('test: ', test);

	// fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, resultB64);


};
