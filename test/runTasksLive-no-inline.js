var taskSass = require('../modules/makeSite/tasks/sass.js');
var taskImg = require('../modules/makeSite/tasks/img.js');
var taskBase64 = require('../modules/makeSite/tasks/base64.js');
var taskCssInline = require('../modules/makeSite/tasks/cssInline.js');
var taskLive = require('../modules/makeSite/tasks/live.js');
var rmDir = require('../lib/rmDir.js');
var mkDir = require('../lib/mkDir.js');
var cpExt = require('../lib/cpExt.js');
var checkExist = require('../lib/checkExist.js');

if(checkExist.checkExist('./build/')) {
	// console.log('exist');
	rmDir.rmDir('./build/');
}

mkDir.mkDir('./build/');


/**
* -----------------------------------------------------------------------
*                              Copy to build
* -----------------------------------------------------------------------
*/

cpExt.cpExt(
	'./src/',
	'./build/',
	[
		'.svg',
		'.js',
		'.css',
		'.html',
		'.eot',
		'.ttf',
		'.woff',
		'.woff2',
		'.gif',
		'.ico'
	]
);

/**
* -----------------------------------------------------------------------
*                            Copy to build End
* -----------------------------------------------------------------------
*/

const task = async () => {
	let img = await taskImg.img();
	let css = await taskSass.sass();
	let base64 = await taskBase64.base64();
	//let inline = await taskCssInline.cssInline();
	let live = await taskLive.live();
	return {
		'css:':css,
		'img:':img,
		'base64:':base64,
		'inline': inline,
		'live': live
	};
}

task()
.then((value) => console.log('SUCCESS', value)) // 2 + 3 + 2 + 6 = 13
.catch((error) => console.log('FAILURE', error)); // Random error
