var fs = require('fs');
var packagify = require('packagify-html');
var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../lib/mkDir.js');
var checkExist = require('../../../lib/checkExist.js');
var Inliner = require('inliner');

module.exports.mountCssInline = function (fileVar) {
	var opts = {
    scripts: true, 	/// (default: true) package scripts
    styles: true, 	/// (default: true)	package styles
    uglify: true, 	/// (default: true) uglify packaged scripts
    minifyCss: true, 	/// (default: true)	minify packaged styles
    images: true, 	/// (default: true) package images
    external: false 	/// (default: false) only scrape external resources
};
	// var html = packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
	// var html = packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
	// var html = packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
	mkDir.mkDir(fileVar.auxOnlyDirPath);
	// packagify.pkgWrite( fileVar.filePath, opts, fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName );
	// packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
    packagify.pkgWrite( fileVar.filePath, fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName );
	// var html = fs.createReadStream( fileVar.filePath ).pipe( packagify.pkg( fileVar.filePath, opts ) ).pipe( process.stdout );

	// var html = fs.createReadStream( fileVar.filePath ).pipe( packagify.pkg( fileVar.filePath, opts ) ).pipe( process.stdout );


	// var html = minifyInline({
	// 	css: {
	// 		level: {1: {specialComments: 0}}
	// 	},
	// });
	// console.log('html:', html);


	// fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, html);
	// packagify.pkgWrite( fileVar.filePath, fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName );
	// console.log('html:',html);


};
