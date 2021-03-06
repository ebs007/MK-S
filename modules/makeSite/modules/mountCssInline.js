var fs = require('fs');
var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../lib/mkDir.js');
var checkExist = require('../../../lib/checkExist.js');
var CleanCSS = require('clean-css');
var minify = require('html-minifier').minify;
const { inlineSource } = require('inline-source');
const path = require('path');
const htmlImporter = require('html-importer');
// import htmlImporter from 'html-importer';

module.exports.mountCssInline = async function (fileVar) {
    // const htmlpath = path.resolve('project/src/html/index.html');
    // console.log('fileVar.filePath:', path.resolve(fileVar.filePath));
    // console.log('pathresolve:', htmlpath);
    // 	var opts = {
    //     scripts: true, 	/// (default: true) package scripts
    //     styles: true, 	/// (default: true)	package styles
    //     uglify: true, 	/// (default: true) uglify packaged scripts
    //     minifyCss: true, 	/// (default: true)	minify packaged styles
    //     images: true, 	/// (default: true) package images
    //     external: false 	/// (default: false) only scrape external resources
    // };
    // var html = packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
    // var html = packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
    // var html = packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
    mkDir.mkDir(fileVar.auxOnlyDirPath);
    // await inlineSource(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, {
    //     compress: true,
    //     rootpath: path.resolve('build/new-home-page'),
    //     // Skip all css types and png formats
    //     // ignore: ['css', 'png']
    // }).then(function(html){
    //     console.log('html:',html);
    //     fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, html);
    // }).catch(err => {
    //     console.log('err:',err);
    //     return err;
    //
    // });



    let html;

    try {

        // console.log(htmlImported);
        const srcPath = path.join(process.cwd(), fileVar.filePath);
        var htmlImported = htmlImporter.parseHtml(fileVar.filePath);
        console.log('teste: ', htmlImported);
        

        var htmlMinify = await minify(htmlImported, {
            caseSensitive: false,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            decodeEntities: true,
            html5: true,
            // includeAutoGeneratedTags: true,
            keepClosingSlash: true,
            preserveLineBreaks: false,
            // preventAttributesEscaping: true,
            // processConditionalComments: true,
            // quoteCharacter: ('\''),
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            // removeEmptyElements: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeTagWhitespace: true,
            // trimCustomFragments: true,
            useShortDoctype: true
        });
        console.log('html-min:', htmlMinify);
        fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, htmlMinify);

        html = await inlineSource(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, {
            compress: true,
            rootpath: path.resolve('build/celso-lisboa'),
            // tag: 'source'
            // Skip all css types and png formats
            // ignore: ['css', 'png']
        });
        // console.log('html: ', html);

        fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, html);
        console.log('Css and Image inline: ', fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName);
        // Do something with html
    } catch(err) {
        console.log('File inline error: ', err);
        // Handle error
    }






    // packagify.pkgWrite( fileVar.filePath, opts, fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName );
    // packagify.pkgFile( fileVar.filePath, opts ).pipe( process.stdout );
    // packagify.pkgWrite( fileVar.filePath, opts,fileVar.auxOnlyDirPath + fileVar.auxOnlyFileNam );
    // var html = packagify.pkgSync( fileVar.filePath ).pipe( process.stdout );
    // var output = new CleanCSS(options).minify(input);
    // console.log(html.toString());
    // var html = fs.createReadStream( fileVar.filePath ).pipe( packagify.pkg( fileVar.filePath, opts ) ).pipe( process.stdout );

    // var html = fs.createReadStream( fileVar.filePath ).pipe( packagify.pkg( fileVar.filePath, opts ) ).pipe( process.stdout );


    // var html = minifyInline({
    // 	css: {
    // 		level: {1: {specialComments: 0}}
    // 	},
    // });
    // console.log('html:', html);


    // fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, html.toString());
    // packagify.pkgWrite( fileVar.filePath, fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName );
    // console.log('html:',html);


};
